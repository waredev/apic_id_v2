<template>
    <div>
        <div class="xl:px-20 px-8 font-arian-bold xl:pt-60 pt-32 pb-20">
            <div class="xl:text-4xl text-2xl">{{ $t('about.management.board_commisioner_title') }}</div>
            <div class="flex items-center space-x-2 mt-10">
              <div @click="activeTab = 0" class="cursor-pointer w-auto px-4 h-12 rounded-t-lg flex items-center justify-center" :class=" activeTab === 0 ? 'bg-primary' : 'bg-slate-200'">
                <div :class="activeTab === 0 ? 'text-white' : 'text-paraph'">{{ $t('about.president_commissioner_label') }}</div>              
              </div>
              <div @click="activeTab = 1" class="cursor-pointer w-auto px-4 h-12 rounded-t-lg flex items-center justify-center" :class=" activeTab === 1 ? 'bg-primary' : 'bg-slate-200'">
                <div :class="activeTab === 1 ? 'text-white' : 'text-paraph'">{{ $t('about.independent_commissioner_label') }}</div>              
              </div>
            </div>

            <div v-if="activeTab === 0" class="xl:pr-[45rem] mt-10">
              <div class="text-2xl">Agus Herlambang</div>
              <div class="w-32 h-1 mt-1 rounded-full bg-primary"/>
              <div class="mt-2 text-paraph">{{ $t('about.management.board_commisioner_content1') }}</div>              
            </div>

            <div v-if="activeTab === 1" class="xl:pr-[45rem] mt-10">
              <div class="text-2xl">Leon Tangi</div>
              <div class="w-32 h-1 mt-1 rounded-full bg-primary"/>
              <div class="text-paraph mt-5">{{ $t('about.management.board_commisioner_content2') }}</div>              
            </div>

        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CommissionersProfilePage',
    data(){
      return {
        activeTab: 0
      }
    },
    methods: {
      switchTab(){
        
      }
    }
  }
  </script>
  