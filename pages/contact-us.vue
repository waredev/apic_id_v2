<template>
    <div>
        <div class="xl:px-20 px-8 font-arian-bold xl:pt-60 pt-32">
            <div class="xl:text-4xl text-2xl">{{ $t('contact.contact_label') }}</div>
            <div class="w-full border my-20 rounded-xl p-10">
                <div class="text-xl">Head Office</div>
                <div class="mt-5 text-lg text-black">Menara BPJAMSOSTEK (Utara) Lt. 12A <br>Jl. Jend. Gatot Subroto Kav. 38 <br>Jakarta Selatan 12710</div>
                <div class="flex mt-5 items-center">
                    <div class="bg-primary rounded-md w-12 h-12 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 text-white h-6">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                    </div>
                    <div class="ml-5 text-lg text-black">corpsec@apic.co.id</div>
                </div>
                <div class="flex mt-5 items-center">
                    <div class="bg-primary rounded-md w-12 h-12 flex items-center justify-center">
                        <img src="~/assets/images/fax.png" class="w-6 h-6">
                    </div>
                    <div class="ml-5 text-lg text-black">021 - 39502901</div>
                </div>
                <div class="flex mt-5 items-center">
                    <div class="bg-primary rounded-md w-12 h-12 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 text-white h-6">
                            <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="ml-5 text-lg text-black">021 - 39502900 (hunting)</div>
                </div>
            </div>
        </div>
        <iframe class="w-full xl:h-[45rem] h-96" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6033.979884160376!2d106.81929499104865!3d-6.2349673303177315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e6d2d0baf5%3A0x588f7d9256cef7bf!2sJAMSOSTEK%20Tower!5e0!3m2!1sen!2sid!4v1691163736399!5m2!1sen!2sid" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactUsPage'
  }
  </script>
  