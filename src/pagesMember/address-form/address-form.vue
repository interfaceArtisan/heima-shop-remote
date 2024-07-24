<template>
  <div class="address-form">address-form</div>
</template>

<script lang="ts" setup>
const query = defineProps<{
  id?: string
}>()

uni.setNavigationBarTitle({
  title: query.id ? '修改地址' : '新建地址',
})
</script>

<style lang="scss" scoped></style>
