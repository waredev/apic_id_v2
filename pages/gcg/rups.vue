<template>
    <div>
        <div class="xl:px-20 px-8 font-arian-bold xl:pt-60 pt-32 pb-20">
            <div class="xl:text-4xl text-2xl">{{ $t('gcg.rups') }}</div>
            <div class="p-5 border rounded-md mt-10">
                <div v-if="loading" class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-6 h-6 text-black animate-spin">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    <div class="ml-2 text-black">Loading. . .</div>
                </div>
                
                <div>
                    <div class="font-arian-bold text-3xl mb-5 border-b border-slate-200 pb-2">Links</div>
                    <div v-if="!loading" v-for="(item, index) in links" :key="index" class="mb-5">
                        <div class="text-xl text-slate-700">{{item.label.substring(0, 50)}}</div>
                        <a target="_blank" :href="item.url" class="xl:w-96 w-full h-12 mt-1 border group hover:bg-primary hover:border-primary cursor-pointer flex items-center px-3 rounded-md">
                            <img src="~/assets/images/export.png" class="w-6" alt="pdf" />
                            <div class="group-hover:text-white font-arian-demi ml-2">{{item.label.length > 28 ? item.label.substring(0, 27) + '...' : item.label}}</div>
                            <div class="border-l px-4 group-hover:border-white ml-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-hover:text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="mt-10">
                    <div class="font-arian-bold text-3xl mb-5 border-b border-slate-200 pb-2">Downloads</div>
                    <div v-if="!loading" v-for="(item, index) in downloads" :key="index" class="mb-5">
                        <div class="text-xl text-slate-700">{{item.label}}</div>
                        <a target="_blank" :href="item.url" class="xl:w-96 w-full h-12 mt-1 border group hover:bg-primary hover:border-primary cursor-pointer flex items-center px-3 rounded-md">
                            <img src="~/assets/images/pdf.png" class="w-6" alt="pdf" />
                            <div class="group-hover:text-white font-arian-demi ml-2">{{item.label.length > 28 ? item.label.substring(0, 27) + '...' : item.label}}</div>
                            <div class="border-l px-4 group-hover:border-white ml-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-hover:text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
                
                <div class="mt-10">
                    <div class="font-arian-bold text-3xl mb-5 border-b border-slate-200 pb-2">Blanko RUPS</div>
                    <div v-if="!loading" v-for="(item, index) in blanko_rups" :key="index" class="mb-5">
                        <div class="text-xl text-slate-700">{{item.label}}</div>
                        <a target="_blank" :href="item.url" class="xl:w-96 w-full h-12 mt-1 border group hover:bg-primary hover:border-primary cursor-pointer flex items-center px-3 rounded-md">
                            <img src="~/assets/images/pdf.png" class="w-6" alt="pdf" />
                            <div class="group-hover:text-white font-arian-demi ml-2">{{item.label.length > 28 ? item.label.substring(0, 27) + '...' : item.label}}</div>
                            <div class="border-l px-4 group-hover:border-white ml-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-hover:text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'RupsPage',
        data(){
            return {
                links: [],
                downloads: [],
                blanko_rups: [],
                loading: true,
            }
        },
        mounted(){
            this.fetchData();
        },
        methods: {
            async fetchData(){
                const res = await this.$store.dispatch('fetchRups');

                const easy_ksei = [];
                const rups = [];
                const blanko_rups = [];

                // links
                res.data.easy_ksei.forEach(item => {
                    const val = {
                        label: this.$i18n.locale === 'id' ? item.label_id : item.label_en,
                        url: item.link
                    }
                    easy_ksei.push(val)
                });

                // downloads
                res.data.downloads.forEach(item => {
                    const val = {
                        label: this.$i18n.locale === 'id' ? item.label_id : item.label_en,
                        url: item.file
                    }
                    rups.push(val)
                });

                // blanko rups
                res.data.blanko_rups.forEach(item => {
                    const val = {
                        label: this.$i18n.locale === 'id' ? item.label_id : item.label_en,
                        url: item.file
                    }
                    blanko_rups.push(val)
                });

                this.links = easy_ksei;
                this.downloads = rups;
                this.blanko_rups = blanko_rups;

                this.loading = false;
            }
        }
    }
</script>