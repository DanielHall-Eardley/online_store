<template>
  <div id="home">
    <Title title="Online Store"/>
    <Cart></Cart>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue'
import Cart from '@/components/Cart.vue'

export default {
  name: 'home',
  components: {
    Title,
    Cart,
  }
}
</script>

<style>
#home{
  display:grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 12vh 15vh 45vh 30vh 20vh 15vh;
}

#title{
  grid-column: 2/3;
  grid-row: 1/2;
}
</style>