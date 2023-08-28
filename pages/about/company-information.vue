<template>
    <div>
        <div class="xl:px-20 px-8 font-arian-bold xl:pt-60 pt-32 pb-20">
            <div class="xl:text-4xl text-2xl">{{ data.title }}</div>
            <div class="mt-10 xl:pr-[30rem] pr-0">
                <div class="xl:text-xl text-lg text-slate-700 justify-custom">{{ data.description }}</div>
                <ol class="ml-10 mt-5 text-paraph list-decimal">
                    <li class="font-arian-demi justify-custom" v-for="(item, index) in data.list_entity" :key="index">{{ item.name }}</li>
                </ol>
                <div class="ml-12 mt-5">
                    <div class="xl:text-xl text-lg text-slate-700">{{ data.child_entity_title }}</div>
                    <ul class="list-disc text-paraph ml-8 mt-3">
                        <li class="font-arian-demi justify-custom" v-for="(item, index) in data.child_entity" :key="index">{{ item.name }}</li>
                    </ul>
                </div>
            </div>
            <div class="mt-10 xl:pr-[30rem] pr-0">
                <div v-for="(item, index) in data.data" :key="index" class="border p-6 w-full rounded-lg mt-6">
                    <div class="text-2xl text-secondary">{{ item.title }}</div>
                    <div class="text-paraph font-arian-demi mt-1 text-lg justify-custom">{{ item.list.title }}</div>
                    <ul v-if="item.list.data.length > 0" v-for="(list, listIndex) in item.list.data" :key="listIndex" class="list-disc text-paraph ml-10 mt-3">
                        <li class="font-arian-demi justify-custom">{{ list.value }}</li>
                    </ul>
                    <div class="xl:text-lg text-md mt-7 text-slate-700">{{ $t('about.management_and_oversight') }}</div>
                    <div class="mt-3 w-full overflow-x-auto">
                        <div class="text-slate-700 mb-3">{{ $t('about.director_label') }}</div>
                        <div v-for="(director, dirIndex) in item.directors" :key="dirIndex" class="font-arian-demi flex xl:flex-row mb-2 flex-col xl:items-center items-start">
                            <div class="xl:w-[15rem] xl:text-lg text-xs w-full xl:capitalize uppercase xl:text-paraph text-slate-700">{{director.label}}</div>
                            <div class="mr-2 xl:block hidden text-paraph">:</div>
                            <div class="xl:ml-0 ml-5 text-paraph">{{ director.value }}</div>
                        </div>
                    </div>
                    <div class="mt-3 w-full overflow-x-auto">
                        <div class="text-slate-700 mb-3">{{ $t('about.board_of_commissioner_label') }}</div>
                        <div v-for="(commissioner, comIndex) in item.commissioners" :key="comIndex" class="font-arian-demi flex xl:flex-row mb-2 flex-col xl:items-center items-start">
                            <div class="xl:w-[15rem] xl:text-lg text-xs w-full xl:capitalize uppercase xl:text-paraph text-slate-700">{{commissioner.label}}</div>
                            <div class="mr-2 xl:block hidden text-paraph">:</div>
                            <div class="xl:ml-0 ml-5 text-paraph">{{ commissioner.value }}</div>
                        </div>
                    </div>
                    
                    <div v-if="item.children.length > 0" v-for="(child, chIndex) in item.children" :key="chIndex" class="border xl:p-6 p-3 w-full rounded-lg mt-6">
                        <div class="text-2xl text-secondary">{{ child.title }}</div>
                        <div class="text-paraph font-arian-demi mt-1 text-lg justify-custom">{{ child.list.title }}</div>
                        <ul v-if="child.list.data.length > 0" v-for="(list, listIndex) in child.list.data" :key="listIndex" class="list-disc text-paraph ml-10 mt-3">
                            <li class="font-arian-demi justify-custom">{{ list.value }}</li>
                        </ul>
                        <div class="xl:text-lg text-md mt-7 text-slate-700">{{ $t('about.management_and_oversight') }}</div>
                        <div class="mt-3 w-full overflow-x-auto">
                            <div class="text-slate-700 mb-3">{{ $t('about.director_label') }}</div>
                            <div v-for="(director, dirIndex) in child.directors" :key="dirIndex" class="font-arian-demi flex xl:flex-row mb-2 flex-col xl:items-center items-start">
                                <div class="xl:w-[15rem] xl:text-lg text-xs w-full xl:capitalize uppercase xl:text-paraph text-slate-700">{{director.label}}</div>
                                <div class="mr-2 xl:block hidden text-paraph">:</div>
                                <div class="xl:ml-0 ml-5 text-paraph">{{ director.value }}</div>
                            </div>
                        </div>
                        <div class="mt-3 w-full overflow-x-auto">
                            <div class="text-slate-700 mb-3">{{ $t('about.board_of_commissioner_label') }}</div>
                            <div v-for="(commissioner, comIndex) in child.commissioners" :key="comIndex" class="font-arian-demi flex xl:flex-row mb-2 flex-col xl:items-center items-start">
                                <div class="xl:w-[15rem] xl:text-lg text-xs w-full xl:capitalize uppercase xl:text-paraph text-slate-700">{{commissioner.label}}</div>
                                <div class="mr-2 xl:block hidden text-paraph">:</div>
                                <div class="xl:ml-0 ml-5 text-paraph">{{ commissioner.value }}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import data_id from "~/static/json/company-information-id.json";
  import data_en from "~/static/json/company-information-en.json";

  export default {
    name: 'CompanyInformationPage',
    data(){
      return {
        activeTab: 0,
        data: []
      }
    },
    mounted(){
        if(this.$i18n.locale === 'id'){
            this.data = data_id;
        }else{
            this.data = data_en;
        }
    }
  }
  </script>
  