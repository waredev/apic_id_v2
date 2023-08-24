<template>
    <div>
        <div class="xl:px-20 px-8 font-arian-bold xl:pt-60 pt-32 pb-20">
            <div class="xl:text-4xl text-2xl">{{ $t('about.board_of_director_label') }}</div>
            <div class="flex items-center space-x-2 mt-10">
              <div @click="activeTab = 0" class="cursor-pointer xl:w-64 w-full px-4 h-12 rounded-t-lg flex items-center justify-center" :class=" activeTab === 0 ? 'bg-primary' : 'bg-slate-200'">
                <div :class="activeTab === 0 ? 'text-white text-center' : 'text-paraph text-center'">{{ $t('about.president_director_label') }}</div>              
              </div>
              <div @click="activeTab = 1" class="cursor-pointer xl:w-64 w-full px-4 h-12 rounded-t-lg flex items-center justify-center" :class=" activeTab === 1 ? 'bg-primary' : 'bg-slate-200'">
                <div :class="activeTab === 1 ? 'text-white text-center' : 'text-paraph text-center'">{{ $t('about.director_label') }}</div>              
              </div>
            </div>

            <div v-if="activeTab === 0" class="xl:pr-[45rem] mt-10">
              <div class="text-2xl">Jon Adijaya</div>
              <div class="w-32 h-1 mt-1 rounded-full bg-primary"/>
              <div class="text-paraph font-arian-demi justify-custom mt-5">{{ $t('about.board_of_director_content1') }}</div>              
            </div>

            <div v-if="activeTab === 1" class="xl:pr-[45rem] mt-10">
              <div class="text-2xl">Wiyana</div>
              <div class="w-32 h-1 mt-1 rounded-full bg-primary"/>
              <div class="text-paraph font-arian-demi justify-custom mt-5">{{ $t('about.board_of_director_content2') }}</div>              
            </div>

        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DirectorsProfilePage',
    data(){
      return {
        activeTab: 0
      }
    },
  }
  </script>
  