<template>
  <div id="home">
    <header id="header">
      <StoreName title="Online Store"></StoreName>
      <Cart></Cart>
    </header>
  </div>
</template>

<script>
// @ is an alias to /src
import StoreName from '@/components/StoreName.vue'
import Cart from '@/components/Cart.vue'

export default {
  name: 'home',
  components: {
    StoreName,
    Cart,
  }
}
</script>

<style>
#home{
  
}

#header{
  display:grid;
  grid-template-rows: 12vh;
  grid-template-columns: 1fr 2fr 1fr;

}

</style>