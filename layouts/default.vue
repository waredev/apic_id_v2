<template>
    <div>
      <the-header />
      <particles-bg type="cobweb" color="#6F6F6F" :bg="true" />
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