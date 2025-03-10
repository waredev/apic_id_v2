<template>
    <div class="absolute w-full h-screen xl:px-0 px-5 bg-black top-0 z-50 flex items-center justify-center bg-opacity-10 custom-drop-blur">
      <div class="relative">
        <div class="absolute right-2 top-2 cursor-pointer w-8 h-8 rounded-full flex items-center justify-center border-2 border-white" @click="$emit('close-modal')">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-white h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
        <img v-if="this.$i18n.locale === 'id'" src="~/assets/images/popup-id.png" class="w-[40rem] rounded-xl" alt="">
        <img v-else src="~/assets/images/popup-en.png" class="w-[40rem] rounded-xl" alt="">
      </div>
    </div>
</template>
<script>
    export default {
        name: 'ThePopup'
    }
</script>
