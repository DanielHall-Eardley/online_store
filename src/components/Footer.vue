<template>
  <div id='footer-container'>
    <div id="custom-content-container">
      <span class='custom-content' v-for='content in footerData.customContent'>{{content}}</span>
    </div>
    <div id="links-container">
      <a :href='link.url' class="link" v-for="link in footerData.links">{{link.name}}</a>
    </div>
    <div id="logo-copyright-container">
      <span class='logo-copyright' v-for='logos in footerData.logos'>{{logos}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    computed:{
      footerData(){
        return this.$store.state.shopConfig.footerData
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
  #custom-content-container{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    grid-column: 1/2;
    grid-row: 1/3;
    padding: 15px;
    border-right: var(--border-div)
  }
  #links-container{
    display:flex;
    flex-direction: column;
    grid-column: 2/3;
    grid-row: 1/2;
    padding: 15px;
    border-bottom: var(--border-div)
  }
  #logo-copyright-container{
    grid-column: 2/3;
    grid-row: 2/3;
    padding: 15px;
  }
  .link{
    margin-bottom: 3px;
    margin-top: 3px;
  }
  .logo-copyright{
    margin: 0px 15px
  }
</style>

