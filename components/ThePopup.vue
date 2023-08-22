<template>
    <div class="absolute w-full h-screen xl:px-0 px-10 bg-black top-0 z-50 flex items-center justify-center bg-opacity-60">
        <div class="w-[30rem] h-auto pb-10 bg-white custom-shadow rounded-xl relative" @click.stop>
            <div class="absolute -right-3 -top-3 cursor-pointer w-8 h-8 rounded-full flex items-center justify-center bg-white" @click="$emit('close-modal')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 text-primary h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <div class="w-30 h-36 rounded-t-xl flex items-center justify-center bg-primary">
                <svg class="w-24 text-white h-24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
            </div>
            <div class="text-center text-4xl mt-3 text-orange-700 font-arian-bold">{{ $t('home.warning') }}</div>
            <div class="text-center font-arian-demi mx-10 mt-3 text-slate-700">{{ $t('home.warning_content') }}</div>
            <div class="flex mt-5 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 text-primary h-6">
                    <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                </svg>
                <div class="ml-2 text-lg font-arian-bold text-slate-700">021 - 39502900</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ThePopup'
    }
</script>