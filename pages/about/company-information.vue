<template>
    <div>
        <div class="xl:px-32 px-8 font-arian-bold xl:pt-60 pt-32 pb-20">
            <div class="xl:text-4xl text-2xl">Informasi Perusahaan dan Entitas Anak.</div>
            <div class="mt-10 xl:pr-[30rem] pr-0">
                <div class="text-xl text-slate-700">Perseroan menjalankan kegiatan sebagai perusahaan investasi dan melakukan penyertaan investasi modal pada 4 (Empat) entitas anak aktif, yaitu:</div>
                <ol class="ml-10 mt-5 text-lg text-paraph list-decimal">
                    <li>PT Pacific Sekuritas Indonesia (“AP”), perusahaan sekuritas yang bergerak di bidang perantara pedagang efek (broker dealer) dan penjamin emisi efek (underwriter).</li>
                    <li>PT Pacific Capital Investment (“PCI”), perusahaan yang bergerak dalam bidang Manager Investasi.</li>
                    <li>PT Pacific Multi Finance (“PMF”), perusahaan yang bergerak di bidang multifinance.</li>
                    <li>PT Pacific Strategic Invesco (“PSI”), perusahaan yang bergerak di bidang Konsultasi Bisnis.</li>
                </ol>
                <div class="ml-12 mt-5">
                    <div class="text-xl text-slate-700">PSI Memiliki entitas anak sebagai berikut:</div>
                    <ul class="list-disc text-lg text-paraph ml-8 mt-3">
                        <li>PT Pacific Life Insurance (“PLI”), Dengan Kegiatan Usaha yaitu menjalankan usaha dibidang Asuransi Jiwa.</li>
                        <li>PT Pacific Life Insurance Syariah (“PLIS”), Dengan Kegiatan Usaha yaitu menjalankan usaha dibidang Asuransi Jiwa Syariah (Saat ini masih sedang dalam proses perizinan dari Otoritas Jasa Keuangan).</li>
                    </ul>
                </div>
            </div>
            <div class="mt-10 xl:pr-[30rem] pr-0">
                <div v-for="(item, index) in data" :key="index" class="border p-6 w-full rounded-lg mt-6">
                    <div class="text-2xl text-secondary">{{ item.title }}</div>
                    <div class="text-paraph mt-1 text-lg">{{ item.list.title }}</div>
                    <ul v-if="item.list.data.length > 0" v-for="(list, listIndex) in item.list.data" :key="listIndex" class="list-disc text-lg text-paraph ml-10 mt-3">
                        <li>{{ list.value }}</li>
                    </ul>
                    <div class="xl:text-lg text-md mt-7 text-slate-700">Pengurusan dan Pengawasan</div>
                    <div class="mt-3 w-full overflow-x-auto">
                        <div class="text-slate-700 mb-3">DIREKSI</div>
                        <div v-for="(director, dirIndex) in item.directors" :key="dirIndex" class="flex xl:flex-row mb-2 flex-col xl:items-center items-start">
                            <div class="xl:w-[15rem] xl:text-lg text-xs w-full xl:capitalize uppercase xl:text-paraph text-slate-700">{{director.label}}</div>
                            <div class="mr-2 xl:block hidden text-paraph">:</div>
                            <div class="xl:ml-0 ml-5 text-paraph">{{ director.value }}</div>
                        </div>
                    </div>
                    <div class="mt-3 w-full overflow-x-auto">
                        <div class="text-slate-700 mb-3">DEWAN KOMISARIS</div>
                        <div v-for="(commissioner, comIndex) in item.commissioners" :key="comIndex" class="flex xl:flex-row mb-2 flex-col xl:items-center items-start">
                            <div class="xl:w-[15rem] xl:text-lg text-xs w-full xl:capitalize uppercase xl:text-paraph text-slate-700">{{commissioner.label}}</div>
                            <div class="mr-2 xl:block hidden text-paraph">:</div>
                            <div class="xl:ml-0 ml-5 text-paraph">{{ commissioner.value }}</div>
                        </div>
                    </div>
                    
                    <div v-if="item.children.length > 0" v-for="(child, chIndex) in item.children" :key="chIndex" class="border xl:p-6 p-3 w-full rounded-lg mt-6">
                        <div class="text-2xl text-secondary">{{ child.title }}</div>
                        <div class="text-paraph mt-1 text-lg">{{ child.list.title }}</div>
                        <ul v-if="child.list.data.length > 0" v-for="(list, listIndex) in child.list.data" :key="listIndex" class="list-disc text-lg text-paraph ml-10 mt-3">
                            <li>{{ list.value }}</li>
                        </ul>
                        <div class="xl:text-lg text-md mt-7 text-slate-700">Pengurusan dan Pengawasan</div>
                        <div class="mt-3 w-full overflow-x-auto">
                            <div class="text-slate-700 mb-3">DIREKSI</div>
                            <div v-for="(director, dirIndex) in child.directors" :key="dirIndex" class="flex xl:flex-row mb-2 flex-col xl:items-center items-start">
                                <div class="xl:w-[15rem] xl:text-lg text-xs w-full xl:capitalize uppercase xl:text-paraph text-slate-700">{{director.label}}</div>
                                <div class="mr-2 xl:block hidden text-paraph">:</div>
                                <div class="xl:ml-0 ml-5 text-paraph">{{ director.value }}</div>
                            </div>
                        </div>
                        <div class="mt-3 w-full overflow-x-auto">
                            <div class="text-slate-700 mb-3">DEWAN KOMISARIS</div>
                            <div v-for="(commissioner, comIndex) in child.commissioners" :key="comIndex" class="flex xl:flex-row mb-2 flex-col xl:items-center items-start">
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
  import data from "~/static/json/company-information.json";
  export default {
    name: 'CompanyInformationPage',
    data(){
      return {
        activeTab: 0,
        data: []
      }
    },
    mounted(){
        this.data = data;
    }
  }
  </script>
  