import type { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressStore = defineStore('address', () => {
  const selectAddress = ref<AddressItem>()

  const saveAddress = (a: AddressItem) => {
    selectAddress.value = a
  }
  return {
    selectAddress,
    saveAddress,
  }
})
