<template>
  <div id="products">
    <header class="header">
      <StoreName title="Products"></StoreName>
      <Cart></Cart>
      <Login></Login>
      <Menu></Menu>
      <FindProduct></FindProduct>
    </header>
    <main id="products-section"> 
      <StoreName title="Categories"></StoreName>
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
  #products-section{
    min-height: 50vh;
    height: auto;
    width: 100%;
    background: lightgrey;
  }
</style>