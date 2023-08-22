<template>
    <div class="w-full xl:h-[25rem] h-auto bg-primary">
        <div class="xl:px-20 px-8 w-full flex xl:flex-row flex-col font-arian-bold">
            <div class="xl:w-[35rem] w-auto px-5 bg-white h-24 rounded-b-xl flex items-center justify-center">
                <img src="~assets/images/logo.png" class="xl:w-14 xl:h-14 w-12 h-12"/>
                <div class="font-arian-bold xl:text-2xl text-lg xl:ml-5 ml-2">PACIFIC STRATEGIC FINANCIAL</div>
            </div>
            <div class="xl:ml-32 ml-0">
                <div class="flex mt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 text-white mt-1 h-6">
                        <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                    </svg>
                    <div class="ml-5 text-lg text-white">Menara BPJAMSOSTEK (Utara) Lt. 12A <br>Jl. Jend. Gatot Subroto Kav. 38 <br>Jakarta Selatan 12710</div>
                </div>
                <div class="flex mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 text-white mt-1 h-6">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    <div class="ml-5 text-lg text-white">corpsec@apic.co.id</div>
                </div>
                <div class="flex mt-5">
                    <img src="~/assets/images/fax.png" class="w-6 h-6 mt-1">
                    <div class="ml-5 text-lg text-white">021 - 39502901</div>
                </div>
                <div class="flex mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 text-white mt-1 h-6">
                        <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                    </svg>
                    <div class="ml-5 text-lg text-white">021 - 39502900 (hunting)</div>
                </div>
            </div>
        </div>
        <div class="border-t border-white mt-14 xl:pb-0 pb-5">
            <div class="font-arian-bold text-white text-center mt-6">© apic.co.id. All Rights Reserved.</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'TheHeader'
    }
</script>