<template>
  <div id="cart">
    <span id="item-count">{{itemCount}}</span>
    <img id="cart-icon" src="@/assets/open-cart.png"/>
  </div>
</template>

<script>
  export default{
    computed:{
      itemCount: function(){
        return this.$store.state.customer.itemCount
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
    grid-row: 1/2;
    grid-column: 3/4;
    text-align: end;
    position: relative;
  }

  #cart-icon{
     width:60px;
     z-index: 0;
     text-align: end; 
  }

  #item-count{
    position: absolute;
    top: 14px;
    right: 20px;
    color: orangered;
    font-size: 1.3rem;
    z-index: 1;
  }
</style>