<template>
    <div>
        <div class="xl:px-20 px-8 font-arian-bold xl:pt-60 pt-32 pb-20">
            <div class="xl:text-4xl text-2xl">{{ $t('about.ownership_structure_label') }}</div>
            <img src="~/assets/images/struktur-kepemilikan-emiten.png" class="w-full object-contain">
        </div>
    </div>
</template>
<script>
    export default {
        name: 'OwnershipStructurePage',
    }
</script>