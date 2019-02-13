<template>
  <div id="products">
    <header>
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
        <div class="list-item" v-for="item in productData">
          <h3>{{item.name}}</h3>
          <p>{{item.summary}}</p>
          <span>Price: ${{item.price}}</span>
          <button>Buy</button>
          <img v-bind:src="item.imgArray">
          <router-link to="/details" v-on:click="getDetails(item)">Details</router-link>
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
  components: {
    Title,
    Cart,
    FindProduct,
    Login,
    Content,
    Menu
  },
  computed: {
    productData() {
      return this.$store.state.products.productData;
    },
    method:{
      getDetails(item){
        this.$store.dispatch('getDetails', payload)
      }
    }
  }
};
</script>

<style lang='scss'>
@import "@/globalStyles/variables.scss";
@import "@/globalStyles/mixins.scss";

#products-section {
  height: 50vh;
  background: lightgrey;
  padding: 2%;
}

#product-list {
  overflow-y: scroll;
}

.list-item {
  display: grid;
  grid-template-columns: 1fr 1fr 0.5fr;
  grid-template-rows: 40px 112px 20%;
  h3 {
    grid-area: 1/1/2/3;
    margin: $item-margin;
  }
  p {
    grid-area: 2/1/3/3;
    margin: $item-margin;
    overflow: hidden;
  }
  span {
    grid-area: 3/1/4/2;
    margin: $item-margin;
  }
  button {
    grid-area: 3/2/4/3;
    margin: $item-margin;
    width: 50%;
    box-sizing: border-box;
    @include standard-button(lightblue, maroon);
  }
  img {
    grid-area: 1/3/3/4;
    margin: $item-margin;
  }
  a {
    grid-area: 3/3/4/4;
    text-decoration: none;
    color: black;
    @include center-content();
  }
}

@include mediaQ(600px) {
  .list-item {
    grid-template-rows: 15% 20% 70% 12%;
    h3 {
      grid-area: 1/1/2/4;
      @include center-content();
    }
    p {
      grid-area: 2/1/3/4;
      @include center-content();
    }
    span {
      grid-area: 4/1/5/2;
      @include center-content();
    }
    button {
      grid-area: 4/2/5/3;
      width: 100%;
      @include center-content();
    }
    img {
      grid-area: 3/1/4/4;
    }
  }
}
</style>