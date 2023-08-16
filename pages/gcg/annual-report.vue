<template>
    <div>
        <div class="xl:px-32 px-8 font-arian-bold xl:pt-60 pt-32 pb-20">
            <div class="xl:text-4xl text-2xl">{{ $t('gcg.annual_report') }}</div>
            <div class="p-5 border rounded-md mt-10">
                <div v-for="(item, index) in annual_reports" :key="index" class="mb-5">
                    <div class="text-xl">{{item.attributes.label}}</div>
                    <a target="_blank" :href="host + item.attributes.file.data.attributes.url" class="w-96 h-12 mt-1 border group hover:bg-primary hover:border-primary cursor-pointer flex items-center justify-between px-3 rounded-md">
                        <div class="group-hover:text-white">{{item.attributes.label}}</div>
                        <div class="border-l px-4 group-hover:border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-hover:text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'AnnualReportPage',
        data(){
            return {
                host: 'http://localhost:1337',
                annual_reports: [
                    {
                        "id": 2,
                        "attributes": {
                            "createdAt": "2023-08-14T05:32:17.395Z",
                            "updatedAt": "2023-08-14T05:32:19.858Z",
                            "publishedAt": "2023-08-14T05:32:19.852Z",
                            "locale": "id",
                            "label": "Annual Report 2019",
                            "file": {
                                "data": {
                                    "id": 1,
                                    "attributes": {
                                        "name": "sample.pdf",
                                        "alternativeText": null,
                                        "caption": null,
                                        "width": null,
                                        "height": null,
                                        "formats": null,
                                        "hash": "sample_1091c62664",
                                        "ext": ".pdf",
                                        "mime": "application/pdf",
                                        "size": 3.03,
                                        "url": "/uploads/sample_1091c62664.pdf",
                                        "previewUrl": null,
                                        "provider": "local",
                                        "provider_metadata": null,
                                        "createdAt": "2023-08-14T05:32:10.378Z",
                                        "updatedAt": "2023-08-14T05:32:10.378Z"
                                    }
                                }
                            },
                            "localizations": {
                                "data": []
                            }
                        }
                    },
                    {
                        "id": 3,
                        "attributes": {
                            "createdAt": "2023-08-14T05:32:56.176Z",
                            "updatedAt": "2023-08-14T05:32:56.968Z",
                            "publishedAt": "2023-08-14T05:32:56.963Z",
                            "locale": "id",
                            "label": "Annual Report 2018",
                            "file": {
                                "data": {
                                    "id": 1,
                                    "attributes": {
                                        "name": "sample.pdf",
                                        "alternativeText": null,
                                        "caption": null,
                                        "width": null,
                                        "height": null,
                                        "formats": null,
                                        "hash": "sample_1091c62664",
                                        "ext": ".pdf",
                                        "mime": "application/pdf",
                                        "size": 3.03,
                                        "url": "/uploads/sample_1091c62664.pdf",
                                        "previewUrl": null,
                                        "provider": "local",
                                        "provider_metadata": null,
                                        "createdAt": "2023-08-14T05:32:10.378Z",
                                        "updatedAt": "2023-08-14T05:32:10.378Z"
                                    }
                                }
                            },
                            "localizations": {
                                "data": []
                            }
                        }
                    }
                ],
            }
        }
    }
</script>