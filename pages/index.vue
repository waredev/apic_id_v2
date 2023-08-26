<template>
  <div>
    <the-hero @scroll-to="scrollToTop" />
    <the-popup v-show="showModal" @close-modal="onCloseModal"/>
    <div class="xl:px-20 px-8 font-arian-bold py-32 grid xl:grid-cols-2 grid-cols-none xl:gap-32 gap-0">
      <div class="">
        <div class="text-5xl">{{ $t('home.about_title') }}</div>
        <div class="mt-7 text-paraph font-arian-demi text-lg justify-custom">{{ $t('home.about_company') }}</div>
      </div>
      <div class="flex items-end">
        <img src="~/assets/images/asian-business-man_173387-2213.png" class="xl:flex hidden w-[40rem] ml-auto">
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
  },
  mounted(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    this.toggleBodyScrollbar(true);
  },
  methods: {
    toggleBodyScrollbar(visible) {
      const body = document.getElementsByTagName('body')[0];
      if(visible)
        body.classList.add("overflow-hidden");
      else
        body.classList.remove("overflow-hidden");
    },
    onCloseModal(){
      this.showModal = false;
      this.toggleBodyScrollbar(false)
    },
    scrollToTop() {
      window.scrollTo({
        top: 750,
        behavior: 'smooth'
      })
    },
  }
}
</script>
