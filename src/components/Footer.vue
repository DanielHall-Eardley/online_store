<template>
  <div id='footer-container'>
    <div id="custom-content-container">

    </div>
    <div id="links-container">
      <a v-for="link in footerData.links">{{link}}</a>
    </div>
    <div id="logo-copyright-container">

    </div>
  </div>
</template>

<script>
  export default {
    computed:{
      footerData(){
        return this.$store.state.footerData
      }
    }
  }
</script>

<style>
  #footer-container{
    display:grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: minmax(15vh, auto) 10vh;
  }
</style>


