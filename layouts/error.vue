<template>
    <section class="pt-32 xl:px-20 px-10 font-nunito mb-32">
      <div class="mt-40">
        <div v-if="error.statusCode === 404">
          <img src="~assets/images/error-404.png" class="w-72 mx-auto object-contain" />
          <div class="font-nunito text-word text-center">Sorry, the page you are looking for was not found</div>
        </div>
        <div v-else>An error occurred</div>
        <div class="font-nunito text-word text-center">Please return to the <NuxtLink to="/" class="text-primary">Home page</NuxtLink></div>
      </div>
    </section>
  </template>
  
  <script>
    export default {
      props: ['error'],
      layout: 'error' // you can set a custom layout for the error page
    }
  </script>