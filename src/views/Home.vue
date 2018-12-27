<template>
  <div id="home">
    <header id="header">
      <StoreName title="Online Store"></StoreName>
      <Cart></Cart>
      <Login></Login>
      <Menu></Menu>
      <FindProduct></FindProduct>
    </header>
    <main id="main-body">
      <SlideShow></SlideShow>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import StoreName from '@/components/StoreName.vue'
import Cart from '@/components/Cart.vue'
import FindProduct from '@/components/FindProduct.vue'
import Login from '@/components/Login.vue'
import Menu from '@/components/Menu.vue'
import SlideShow from '@/components/SlideShow.vue'

export default {
  name: 'home',
  components: {
    StoreName,
    Cart,
    FindProduct,
    Login,
    Menu,
    SlideShow
  }
}
</script>

<style>
#home{
  
}

#header{
  display:grid;
  grid-template-rows: 12vh 6vh;
  grid-template-columns: 1fr 2fr 1fr;
  background:cornsilk
}

#main-body{
  display:block;
  height: 50vh;
}
</style>