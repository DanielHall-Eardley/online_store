<template>
  <div id="home">
    <header>
      <Title>
        <h1>Online Store</h1>
      </Title>
      <Cart></Cart>
      <Login></Login>
      <Menu></Menu>
      <FindProduct></FindProduct>
    </header>
    <main id="main-body">
      <SlideShow v-bind:slideshowData="slideshowData"></SlideShow>
    </main>
    <article id="store-description">
      <StoreDescription></StoreDescription>
      <router-link id="custom-product-link" to="/custom-products">{{customProductName}}</router-link>
    </article>
    <footer class="footer">
      <Content></Content>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue'
import Cart from '@/components/Cart.vue'
import FindProduct from '@/components/FindProduct.vue'
import Login from '@/components/Login.vue'
import Menu from '@/components/Menu.vue'
import SlideShow from '@/components/SlideShow.vue'
import StoreDescription from '@/components/StoreDescription.vue'
import Content from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Title,
    Cart,
    FindProduct,
    Login,
    Menu,
    SlideShow,
    StoreDescription,
    Content
  }, 
  computed:{
    customProductName(){
      return this.$store.state.shopConfig.customProductName
    },
    slideshowData(){
      return this.$store.state.products.featuredSlideshow
    }
  }
}
</script>

<style lang="scss">
@import '@/globalStyles/mixins.scss';

:root{
  --main-background: rgb(166, 229, 160);
  --item-background: lightgrey;
  --border-rad: 10px;
  --item-division: 10px;
  --border-highlighted: solid 2px aqua;
  --border-div: solid black 1px;
}

header{
  display:grid;
  grid-template-rows: 12vh 6vh;
  grid-template-columns: 1fr 2fr 1fr; 
  @include mediaQ (600px){
    grid-template-rows: 12vh 5vh 5vh  ;
  }
}



#main-body{
  display: block;
  height: 50vh;
  background: var(--main-background)
}

#store-description{
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: lightgoldenrodyellow;
}

#custom-product-link{
  padding: 16px;
  background:chartreuse;
  text-align: center;
  width: 50%;
  border-radius: var(--border-rad)
}

.footer{
  width: 100%;
}

body{
  @include scrollbar()
}
</style>