<template>
    <div>
        <div class="xl:px-20 px-8 font-arian-bold xl:pt-60 pt-32 pb-20">
            <div class="xl:text-4xl text-2xl">{{ $t('about.vision_label') }}</div>
            <div class="text-slate-700 xl:w-6/12 w-full justify-custom mt-2 font-arian-demi">{{ $t('about.vision_content') }}</div>
            <div class="xl:text-4xl mt-10 text-2xl">{{ $t('about.mision_label') }}</div>
            <ul class="list-disc font-arian-demi text-paraph ml-10 mt-3">
                <li class="text-slate-700 xl:w-6/12 w-full justify-custom">{{ $t('about.mision_content.mission_content1') }}</li>
                <li class="text-slate-700 xl:w-6/12 w-full justify-custom">{{ $t('about.mision_content.mission_content2') }}</li>
                <li class="text-slate-700 xl:w-6/12 w-full justify-custom">{{ $t('about.mision_content.mission_content3') }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'VisiAndMissionPage'
    }
</script>