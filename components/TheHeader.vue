<template>
    <div>
        <div class="w-full xl:h-36 h-20 fixed z-50" :class="getBackground()">
            <div class="hidden xl:flex w-full h-12 xl:px-32 px-8 border-b font-arian-bold items-center justify-between">
                <div class="flex items-center space-x-10">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                        </svg>
                        <div class="ml-2">Jakarta Selatan 12710</div>
                    </div>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                            <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                        </svg>
                        <div class="ml-2">021 - 39502900 (hunting)</div>
                    </div>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                        <div class="ml-2">corpsec@apic.co.id</div>
                    </div>
                </div>
                <div class="relative group cursor-pointer">
                    <div v-if="this.$i18n.locale === 'id'" class='group-hover:text-primary flex items-center'>
                        <img src="~/assets/images/indonesia-language.png" class="w-6 h-6 border-2 border-black rounded-full">
                        <div class="ml-2">Bahasa Indonesia</div>
                    </div>
                    <div v-else class='group-hover:text-primary flex items-center'>
                        <img src="~/assets/images/english-language.png" class="w-6 h-6 border-2 border-black rounded-full">
                        <div class="ml-2">English</div>
                    </div>
                    <div class="absolute bg-transparent transition-all scale-0 group-hover:scale-100">
                        <div class="w-60 bg-white custom-shadow mt-2.5 rounded-md py-3">
                            <nuxt-link :to="switchLocalePath('id')">
                                <div class="flex items-center py-3 px-5">
                                    <div class="hover:text-primary">Bahasa Indonesia</div>
                                </div>
                            </nuxt-link>
                            <nuxt-link :to="switchLocalePath('en')">
                                <div class="flex items-center py-3 px-5">
                                    <div class="hover:text-primary">English</div>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full h-20 xl:px-32 px-8 xl:mt-2 mt-0 flex items-center justify-between">
                <nuxt-link to="/">
                    <div class="flex items-center">
                        <img src="~assets/images/logo.png" class="xl:w-14 xl:h-14 w-12 h-12"/>
                        <div class="font-arian-bold xl:text-2xl text-lg xl:ml-5 ml-2">PACIFIC STRATEGIC FINANCIAL</div>
                    </div>
                </nuxt-link>
                <div class="hidden xl:flex items-center space-x-10 font-arian-bold">
                    <nuxt-link to="/">
                        <div class="text-xl hover:text-primary">{{ $t('menu.home') }}</div>
                    </nuxt-link>
                    <div class="relative group cursor-pointer">
                        <div class='group-hover:text-primary flex items-center'>
                            <div class="text-xl">{{ $t('menu.about') }}</div>
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 ml-1 transition-all duration-100 rotate-0 group-hover:rotate-180"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                        <div class="absolute bg-transparent transition-all scale-0 group-hover:scale-100">
                            <div class="w-80 bg-white custom-shadow mt-2.5 rounded-md py-3">
                                <nuxt-link to="'/">
                                    <div class="font-nunito hover:text-primary py-3 px-5">PROFIL DEWAN KOMISARIS</div>
                                </nuxt-link>
                                <nuxt-link to="'/">
                                    <div class="font-nunito hover:text-primary py-3 px-5">PROFIL DIREKSI</div>
                                </nuxt-link>
                                <nuxt-link to="'/">
                                    <div class="font-nunito hover:text-primary py-3 px-5">STRUKTUR ORGANISASI</div>
                                </nuxt-link>
                                <nuxt-link to="'/">
                                    <div class="font-nunito hover:text-primary py-3 px-5">INFORMASI PERUSAHAAN DAN ENTITAS ANAK</div>
                                </nuxt-link>
                                <nuxt-link to="'/">
                                    <div class="font-nunito hover:text-primary py-3 px-5">VISI DAN MISI</div>
                                </nuxt-link>
                                <nuxt-link to="'/">
                                    <div class="font-nunito hover:text-primary py-3 px-5">INFORMASI CORPORATE SECRETARY</div>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="relative group cursor-pointer">
                        <div class='group-hover:text-primary flex items-center'>
                            <div class="text-xl">{{ $t('menu.gcg') }}</div>
                            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 ml-1 transition-all duration-100 rotate-0 group-hover:rotate-180"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </div>
                        <div class="absolute bg-transparent transition-all scale-0 group-hover:scale-100">
                            <div class="w-64 bg-white custom-shadow mt-2.5 rounded-md py-3">
                                <nuxt-link to="'/">
                                    <div class="font-nunito hover:text-primary py-3 px-5">ANNUAL REPORT</div>
                                </nuxt-link>
                                <nuxt-link to="'/">
                                    <div class="font-nunito hover:text-primary py-3 px-5">RUPS</div>
                                </nuxt-link>
                                <nuxt-link to="'/">
                                    <div class="font-nunito hover:text-primary py-3 px-5">LAPORAN KEUANGAN</div>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <nuxt-link :to="localePath('contact-us')">
                        <div class="text-xl hover:text-primary">{{ $t('menu.contact') }}</div>
                    </nuxt-link>
                </div>
                <button @click="showMenu = !showMenu" class="xl:hidden flex bg-primary bg-opacity-10 p-2 items-center justify-center rounded-md">
                    <svg v-if="!showMenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-8 h-8 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-primary">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'TheHeader',
        data(){
            return{
                showMenu: false,
                scrollPostion: 0,
            }
        },
        methods: {
            handleScroll() {
                this.scrollPostion = window.scrollY
            },
            closeMenu(){
                this.showMenu = false;
                this.showSubMenu = false;
            },
            getBackground(){
                let background = this.scrollPostion > 80 ? 'bg-white drop-shadow-sm' : 'bg-transparent'
                return background;
            },
        },
        created() {
            if (process.client) {
                window.addEventListener("scroll", this.handleScroll);
            }
        },
        destroyed() {
            if (process.client) {
                window.removeEventListener("scroll", this.handleScroll);
            }
        },
    }
</script>