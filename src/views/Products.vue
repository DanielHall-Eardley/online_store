<template>
  <div id="products">
    <header class="header">
      <Title>
        <h1>Products</h1>
      </Title>
      <Cart></Cart>
      <Login></Login>
      <Menu></Menu>
      <FindProduct></FindProduct>
    </header>
    <main id="products-section"> 
      <Title>
        <h2>Categories</h2>
      </Title>
      <div id="product-list">
        <div class="list-item">
          <h3 class="item-title"></h3>
          <p class="item-summary"></p>
          <span class="item-price"></span>
          <button class="item-buy"></button>
          <img class=item-image/>
        </div>
      </div>  
    </main>
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
  #products-section{
    min-height: 50vh;
    height: auto;
    width: 100%;
    background: lightgrey;
  }
</style>