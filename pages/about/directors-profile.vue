<template>
    <div>
        <div class="xl:px-32 px-8 font-arian-bold xl:pt-60 pt-32 pb-20">
            <div class="xl:text-4xl text-2xl">Profil Direksi.</div>
            <div class="flex items-center space-x-2 mt-10">
              <div @click="activeTab = 0" class="cursor-pointer w-64 h-12 rounded-t-lg flex items-center justify-center" :class=" activeTab === 0 ? 'bg-primary' : 'bg-slate-200'">
                <div :class="activeTab === 0 ? 'text-white' : 'text-paraph'">DIREKTUR UTAMA</div>              
              </div>
              <div @click="activeTab = 1" class="cursor-pointer w-64 h-12 rounded-t-lg flex items-center justify-center" :class=" activeTab === 1 ? 'bg-primary' : 'bg-slate-200'">
                <div :class="activeTab === 1 ? 'text-white' : 'text-paraph'">DIREKTUR</div>              
              </div>
            </div>

            <div v-if="activeTab === 0" class="xl:pr-[45rem] mt-10">
              <div class="text-2xl">Jon Adijaya</div>
              <div class="w-32 h-1 mt-1 rounded-full bg-primary"/>
              <div class="text-paraph mt-5">Warga negara Indonesia, 55 tahun. Memperoleh gelar Magister Manajemen dari Sekolah Tinggi Ilmu Ekonomi (STIE) Supra,Jakarta Tahun 2005 dan Sarjana Ekonomi jurusan Akuntansi dari Universitas AIrlangga Tahun 1992. Saat ini menjabat sebagai Direktur Utama Perseroan, sebelumnya beliau menjabat sebagai Komisaris Utama Perseroan (Agustus 2016-Juni2021), Associate Director PT Pacific Capital (Juli 2012-Juni 2014), General Manager PT Royal Trust Capital (2011-2012), General Manager PT MNC Securities (Mei 2000-November 2011), Vice President PT Bhakti Investama Tbk (November 1999-Mei 2000), Internal Controller PT Danatama Makmur Securities (September 1997-Oktober 1999), Direktur PT Bomar Securities (Desember 1994-September 1997), Branch Manager PT Dharmala Securities (November 1989-Desember 1994) dan Auditor di Kantor Akuntan Publik dan Konsultan Pajak (1987-1989).</div>              
            </div>

            <div v-if="activeTab === 1" class="xl:pr-[45rem] mt-10">
              <div class="text-2xl">Wiyana</div>
              <div class="w-32 h-1 mt-1 rounded-full bg-primary"/>
              <div class="text-paraph mt-5">Warga Negara Indonesia, 54 Tahun. Memperoleh gelar Sarjana Ekonomi bidang Akuntansi dari Universitas Gadjah Mada, Yogyakarta Tahun 1994. Saat ini menjabat sebagai Direktur Perseroan, sebelumnya beliau menjabat sebagai Direktur Utama Perseroan (Agustus 2016-Juni 2021), Komisaris Utama Perseroan (2009-2016), Komisaris PT Artha Pacific Securities (2003-2004), Direktur PT Artha Pacific Securities (2002-2003), Direktur Utama PT Artha Pacific Securities (2000-2001), Sales Manager PT Cipta Dana Amerta Securities (1994-1996), dan Sales Manager PT Prakarsa Investama (1996-1998).</div>              
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
  