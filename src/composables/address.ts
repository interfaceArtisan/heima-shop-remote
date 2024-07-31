import { getMemberAddressListAPI } from '@/services/address'
import type { AddressItem } from '@/types/address'
import { ref } from 'vue'
export const useAddressList = () => {
  const addressList = ref<AddressItem[]>([])

  const getMemberAddressList = async () => {
    const res = await getMemberAddressListAPI()

    addressList.value = res.result
  }

  return {
    getMemberAddressList,
    addressList,
  }
}