<template>
  <div id="cart">
    {{itemCount}}
    <img id="cart-icon" src="@/assets/cart.png" />
  </div>
</template>

<script>
  export default{
    computed:{
      itemCount: function(){
        return this.$store.state.itemCount
      }
    },
    methods: {
      addItem: function(){
        this.$store.dispatch("addItem")
      }
    }
  }
</script>

<style lang="scss">
  #cart{

  }
  #cart-icon{
      
  }
</style>