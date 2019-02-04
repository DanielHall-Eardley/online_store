<template>
  <div id="products">
    <header class="header">
      <Title>
        <h1>Custom Product</h1>
      </Title>
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
import Title from "@/components/Title.vue";
import Cart from "@/components/Cart.vue";
import FindProduct from "@/components/FindProduct.vue";
import Login from "@/components/Login.vue";
import Content from "@/components/Footer.vue";
import Menu from "@/components/Menu.vue";

export default {
  components:{
    Title,
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
