<script setup lang="ts">
import { loginAPI, loginByCodeAPI, loginSimpleAPI } from '@/services/login'
import { onLoad } from '@dcloudio/uni-app'
import { reactive, ref } from 'vue'
import { useMemberStore } from '@/stores'
import type { LoginResult } from '@/types/member'

// 是否同意隐私协议
const isAgreePrivacy = ref(false)

// #ifdef MP-WEIXIN
let code = ''
onLoad(async () => {
  const res = await wx.login()

  code = res.code
})

const onGetphonenumber: UniHelper.ButtonOnGetphonenumber = async (event) => {
  const { encryptedData, iv } = event.detail

  const res = await loginAPI({
    code,
    encryptedData: encryptedData as string,
    iv: iv!, // 非空断言
  })

  loginSuccess(res.result)
}
// #endif
// 小程序端授权登录
const checkedAgreePrivacy = () => {
  isAgreePrivacy.value = !isAgreePrivacy.value
}

// 小程序模拟登录，个人认证微信小程序无法获取手机号, 只能模拟登录（通用模拟登录）
const onGetphonenumberSimple: UniHelper.ButtonOnGetphonenumber = async (event) => {
  if (!isAgreePrivacy.value) {
    return uni.showToast({
      icon: 'none',
      title: '请先同意隐私协议',
    })
  }
  const res = await loginSimpleAPI('13016496459')

  loginSuccess(res.result)
}

// #ifdef H5
// h5端表单登录
const form = reactive({
  account: '',
  password: '',
})
const onSubmit = async () => {
  const res = await loginByCodeAPI(form)

  loginSuccess(res.result)
}
// #endif

const loginSuccess = (memberInfo: LoginResult) => {
  // 保存用户信息
  const memberStore = useMemberStore()
  memberStore.setProfile(memberInfo) // 设置用户信息

  uni.showToast({
    icon: 'success',
    title: '登录成功',
  })

  setTimeout(() => {
    // 跳转到我的，由于在switchTab中，前面一个页面会全部销毁，如果立马跳转，会出现无法出提示得情况 uni.navigateTo({ url: '/pages/my/my' })（跳转到普通页面）
    uni.switchTab({ url: '/pages/my/my' })
  }, 500)
}

const onOpenPrivacyContract = () => {}

const isAgreePrivacyShakeY = ref(false)
</script>

<template>
  <view class="viewport">
    <view class="logo">
      <image
        src="https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/logo_icon.png"
      ></image>
    </view>
    <view class="login">
      <!-- 网页端表单登录 -->
      <!-- #ifdef H5 -->
      <input v-model="form.account" class="input" type="text" placeholder="请输入用户名/手机号码" />
      <input v-model="form.password" class="input" type="text" password placeholder="请输入密码" />
      <button @tap="onSubmit" class="button phone">登录</button>
      <!-- #endif -->

      <!-- 小程序端授权登录 -->
      <!-- #ifdef MP-WEIXIN -->
      <view class="button-privacy-wrap">
        <button
          :hidden="isAgreePrivacy"
          class="button-opacity button phone"
          @tap="checkedAgreePrivacy"
        >
          请先阅读并勾选协议
        </button>
        <button class="button phone" open-type="getPhoneNumber" @getphonenumber="onGetphonenumber">
          <text class="icon icon-phone"></text>
          手机号快捷登录
        </button>
      </view>
      <!-- #endif -->

      <view class="extra">
        <view class="caption">
          <text>其他登录方式</text>
        </view>
        <view class="options">
          <!-- 通用模拟登录 -->
          <button @tap="onGetphonenumberSimple">
            <text class="icon icon-phone">模拟快捷登录</text>
          </button>
        </view>
      </view>
      <view class="tips" :class="{ animate__shakeY: isAgreePrivacyShakeY }">
        <label class="label" @tap="checkedAgreePrivacy">
          <radio class="radio" color="#28bb9c" :checked="isAgreePrivacy" />
          <text>登录/注册即视为你同意小兔鲜儿</text>
        </label>
        <navigator class="link" hover-class="none" url="/pages/login/protocal"
          >《服务条款》</navigator
        >
        和
        <text class="link" @tap="onOpenPrivacyContract">《隐私协议》</text>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20rpx 40rpx;
}

.logo {
  flex: 1;
  text-align: center;

  image {
    width: 220rpx;
    height: 220rpx;
    margin-top: 15vh;
  }
}

.login {
  display: flex;
  flex-direction: column;
  height: 60vh;
  padding: 40rpx 20rpx 20rpx;

  .input {
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
    border-radius: 72rpx;
    border: 1px solid #ddd;
    padding-left: 30rpx;
    margin-bottom: 20rpx;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
    border-radius: 72rpx;
    color: #fff;

    .icon {
      font-size: 40rpx;
      margin-right: 6rpx;
    }
  }

  .phone {
    background-color: #28bb9c;
  }

  .wechat {
    background-color: #06c05f;
  }

  .extra {
    flex: 1;
    padding: 70rpx 70rpx 0;

    .caption {
      width: 440rpx;
      line-height: 1;
      border-top: 1rpx solid #ddd;
      font-size: 26rpx;
      color: #999;
      position: relative;

      text {
        transform: translate(-40%);
        background-color: #fff;
        position: absolute;
        top: -12rpx;
        left: 50%;
      }
    }

    .options {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 70rpx;

      button {
        padding: 0;
        background-color: transparent;

        &::after {
          border: none;
        }
      }
    }

    .icon {
      font-size: 24rpx;
      color: #444;
      display: flex;
      flex-direction: column;
      align-items: center;

      &::before {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80rpx;
        height: 80rpx;
        margin-bottom: 6rpx;
        font-size: 40rpx;
        border: 1rpx solid #444;
        border-radius: 50%;
      }
    }

    .icon-weixin::before {
      border-color: #06c05f;
      color: #06c05f;
    }
  }
}

@keyframes animate__shakeY {
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, -5rpx);
  }

  100% {
    transform: translate(0, 0);
  }
}

.animate__shakeY {
  animation: animate__shakeY 0.2s ease-in-out 3;
}

.button-privacy-wrap {
  position: relative;

  .button-opacity {
    opacity: 0;
    position: absolute;
    z-index: 1;
  }
}

.tips {
  position: absolute;
  bottom: 80rpx;
  left: 20rpx;
  right: 20rpx;
  font-size: 22rpx;
  color: #999;
  text-align: center;

  .radio {
    transform: scale(0.6);
    margin-right: -4rpx;
    margin-top: -4rpx;
    vertical-align: middle;
  }

  .link {
    display: inline;
    color: #28bb9c;
  }
}
</style>
