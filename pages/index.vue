<template>
  <div>
    <the-hero/>
    <div class="xl:px-32 px-8 font-arian-bold py-32 grid xl:grid-cols-2 grid-cols-none xl:gap-32 gap-0">
      <div class="">
        <div class="text-5xl">{{ $t('home.about_title') }}</div>
        <div class="mt-7 text-paraph text-lg">PT Pacific Strategic Financial Tbk (“Perseroan”) merupakan perusahaan yang bergerak dalam bidang Investasi dan Aktivitas Konsultasi Manajemen Lainnya yang aktif di Pasar Modal Indonesia. Perseroan bergerak melalui 4 (empat) Entitas Anak, yakni PT Pacific Capital Investment, PT Pacific Sekuritas Indonesia, PT Pacific Multi Finance, dan PT Pacific Strategic Invesco (melalui PT Pacific Life Insurance) Perseroan terus berupaya untuk tetap konsisten dan bisa menjadi Perusahaan investasi yang terkemuka di Pasar Modal Indonesia.</div>
      </div>
      <div class="flex items-end">
        <img src="~/assets/images/subtract.png" class="xl:flex hidden w-[40rem] ml-auto">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
