<template>
    <div>
        <div class="xl:px-32 px-8 font-arian-bold xl:pt-60 pt-32 pb-20">
            <div class="xl:text-4xl text-2xl">Profil Dewan Komisaris.</div>
            <div class="flex items-center space-x-2 mt-10">
              <div @click="activeTab = 0" class="cursor-pointer w-64 h-12 rounded-t-lg flex items-center justify-center" :class=" activeTab === 0 ? 'bg-primary' : 'bg-slate-200'">
                <div :class="activeTab === 0 ? 'text-white' : 'text-paraph'">KOMISARIS UTAMA</div>              
              </div>
              <div @click="activeTab = 1" class="cursor-pointer w-64 h-12 rounded-t-lg flex items-center justify-center" :class=" activeTab === 1 ? 'bg-primary' : 'bg-slate-200'">
                <div :class="activeTab === 1 ? 'text-white' : 'text-paraph'">KOMISARIS INDEPENDEN</div>              
              </div>
            </div>

            <div v-if="activeTab === 0" class="xl:pr-[45rem] mt-10">
              <div class="text-2xl">Agus Herlambang</div>
              <div class="w-32 h-1 mt-1 rounded-full bg-primary"/>
              <div class="text-paraph mt-5">Warga Negara Indonesia, 57 tahun, memperoleh gelar Sarjana Ekonomi dari Universitas Gadjah Mada Tahun 1983.</div>              
              <div class="mt-2 text-paraph">Saat ini menjabat sebagai Komisaris Utama Perseroan, sebelumnya beliau menjabat sebagai Head Division Satuan Kerja Audit Intern Retail and Sharia Audit Division PT Bank Maybank Indonesia Tbk (Agustus 2016–Agustus 2017), Head Division Satuan Kerja Audit Intern Credit, Sharia and Subsidiaries Audit Division PT Bank Maybank Indonesia Tbk (Oktober 2006-Juli 2016), Loan Center Head/ SME Commercial Banking Center Head PT Bank Internasional Indonesia Kantor Wilayah Jakarta Juanda -SME Commercial Banking Center (April 2005-Oktober 2006), Loan Center Head/ SME Commercial Banking Center Head PT Bank Internasional Indonesia Kantor Wilayah Jawa Tengah & DIY Loan Center/SME Commercial Banking Center (Januari 2003–Maret 2005), Coordinator Foreclosed Company PT Bank Internasional Indonesia Asset Disposal and Collection Division Foreclosed Company Department (Juni 2002–Desember 2002), Loan Recovery Manager PT Bank Internasional Indonesia – Kantor Fatmawati Loan Work Out Non Corporate (Mei 1999-Mei 2002), Loan Recovery Manager PT Bank Internasional Indonesia – Divisi KPR Loan Recovery Department (November 1997-April 1999), Branch Manager PT Bank Internasional Indonesia Kantor Cabang Yogyakarta (Februari 1995-November 1997), Sub Branch Manager PT Bank Internasional Indonesia Kantor Cabang Pembantu Pondok Indah (Agustus 1993-Februari 1995), Sub Branch Manager PT Bank Internasional Indonesia Kantor Cabang Pembantu Pasar Minggu/MT Haryono (Januari 1991-Agustus 1993), Account Officer PT Bank Internasional Indonesia Kantor Cabang Panglima Polim (Februari 1990–Desember 1990), dan trainee PT Bank Internasional Indonesia – Divisi Sumber Daya Manusia (Februari 1989-Januari 1990).</div>              
            </div>

            <div v-if="activeTab === 1" class="xl:pr-[45rem] mt-10">
              <div class="text-2xl">Leon Tangi</div>
              <div class="w-32 h-1 mt-1 rounded-full bg-primary"/>
              <div class="text-paraph mt-5">Warga negara Indonesia, 57 tahun. Memperoleh gelar Sarjana dari Universitas Pembangunan Nasional (UPN) Tahun 1990. Saat ini menjabat sebagai Komisaris Independen Perseroan, sebelumnya beliau menjabat sebagai Departement Head / Senior Manager Bank CIMB Niaga – Card Production Unit Kartu Kredit & Debet Officer (2009–2019), Departement Head / Senior Manager Bank CIMB Niaga – Risk Management Unit Card Center (2007-2009), Manager Bank CIMB Niaga – Card Delivery Unit Card Center (2006-2007), Manager Bank CIMB Niaga – Card Embosing & Statement Unit Card Center (2005-2006), Manager Bank CIMB Niaga – Operasional Electronik Delivery Chanel (2003-2005), Manager Bank CIMB Niaga –Sundries Operasional Card center (2000-2003), Section Head Bank CIMB Niaga – Sundries KP Privat Banking (1997-2000), Section Head Bank CIMB Niaga –Sundries KP Niaga Tower (1995-1997) dan Officer Bank CIMB Niaga – Accounting Operasional (1990-1995).</div>              
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
  