<template>
    <div>
      <the-header />
      <Nuxt />
      <the-footer />
    </div>
  </template>
  
  <style></style>
  <script>
  import TheHeader from '~/components/TheHeader'
  import TheFooter from '~/components/TheFooter'
  export default {
    components: { TheHeader },
  }
  </script>