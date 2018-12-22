<template>
  <div id="home">
    <header id="header">
      <StoreName title="Online Store"></StoreName>
      <Cart></Cart>
      <Login></Login>
      <Menu></Menu>
      <Input></Input>
    </header>
  </div>
</template>

<script>
// @ is an alias to /src
import StoreName from '@/components/StoreName.vue'
import Cart from '@/components/Cart.vue'
import Input from '@/components/Input.vue'
import Login from '@/components/Login.vue'
import Menu from '@/components/Menu.vue'

export default {
  name: 'home',
  components: {
    StoreName,
    Cart,
    Input,
    Login,
    Menu
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

</style>