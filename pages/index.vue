<template>
  <div>
    <the-hero/>
    <the-popup v-show="showModal" @close-modal="showModal = false"/>
    <div class="xl:px-32 px-8 font-arian-bold py-32 grid xl:grid-cols-2 grid-cols-none xl:gap-32 gap-0">
      <div class="">
        <div class="text-5xl">{{ $t('home.about_title') }}</div>
        <div class="mt-7 text-paraph font-arian-demi text-lg justify-custom">{{ $t('home.about_company') }}</div>
      </div>
      <div class="flex items-end">
        <img src="~/assets/images/subtract.png" class="xl:flex hidden w-[40rem] ml-auto">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return {
      showModal: true,
    }
  }
}
</script>
