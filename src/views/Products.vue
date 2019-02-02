<template>
  <div id="products">
    <header class="header">
      <StoreName title="Products"></StoreName>
      <Cart></Cart>
      <Login></Login>
      <Menu></Menu>
      <FindProduct></FindProduct>
    </header>
    <footer class="footer">
      <Content></Content>
    </footer>
  </div>
</template>

<script>
import StoreName from "@/components/StoreName.vue";
import Cart from "@/components/Cart.vue";
import FindProduct from "@/components/FindProduct.vue";
import Login from "@/components/Login.vue";
import Content from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";

export default {
  components:{
    StoreName,
    Cart,
    FindProduct,
    Login,
    Content,
    Menu,
  }
};
</script>

<style>

</style>