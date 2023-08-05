<template>
    <div class="h-screen relative bg-light-blue bg-hero bg-cover">
      <particles-bg v-if="isMounted" type="cobweb" :num="particles" color="#6F6F6F" :bg="true" />
      <div class="xl:px-32 px-8 xl:pt-96 pt-40 font-arian-bold">
          <div class="xl:text-7xl text-5xl">Pacific Strategic <br>Financial Tbk.</div>
          <div class="text-paraph mt-5 text-lg">PT Pacific Strategic Financial Tbk (“Perseroan”) merupakan <br>perusahaan yang bergerak dalam bidang . . . .</div>
          <button class="bg-primary rounded-lg px-5 py-3 text-white text-xl mt-4">{{ $t('home.read_more') }}</button>
      </div>
      <img src="~/assets/images/hero-hand.png" class="hidden xl:flex object-contain absolute right-0 bottom-0 w-[58.813rem]">
    </div>
  </template>
  
  <script>
  export default {
    name: 'TheHero',
    data(){
      return {
        isMounted: false,
        particles: 0,
      }
    },
    mounted() {
      if(this.$device.isMobile){
        this.particles = 50;
      }else{
        this.particles = 200;
      }
      this.isMounted = true;
    }
  }
  </script>
  