<template>
  <div id="products">
    <header>
      <Title>
        <h1>Custom Product</h1>
      </Title>
      <Cart></Cart>
      <Login></Login>
      <Menu></Menu>
      <FindProduct></FindProduct>
    </header>
    <main id="custom-section">
      <div id="steps">
        <button
          :key="step.name"
          v-bind:style="{order: step.order}"
          v-for="step in customSetUp.customSteps"
        >{{step.name}}</button>
      </div>
      <div id="option-details">
        <Details v-if="itemDetails.showDetails" v-bind:item="itemDetails"></Details>
      </div>
      <div id="options">
        <div
          v-for="item in productData"
          v-bind:key="item.id"
          v-bind:class="highlightBorder(item.id)"
          v-on:click="showSelectedDetails(item)"
          v-bind:style="styleObject(item)"
        >
          <h3>{{item.name}}</h3>
        </div>
      </div>
      <div id="total"></div>
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
import Details from "@/components/ProductDetails.vue";

export default {
  components: {
    Title,
    Cart,
    FindProduct,
    Login,
    Content,
    Menu,
    Details
  },
  data() {
    return {
      itemDetails: {},
      customSetUp: {},
      productData: []
    };
  },
  beforeMount: function() {
    let customSetUp = this.$store.state.shopConfig.customSetUp;
    let productData = this.$store.state.products.productData;
    this.productData = productData;
    this.customSetUp = customSetUp;
  },
  methods: {
    styleObject(imgPath) {
      return {
        backgroundImage: `url(${imgPath.imgArray[0].url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      };
    },
    showSelectedDetails(item) {
      if (
        this.itemDetails.id !== item.id &&
        this.itemDetails.hasOwnProperty("id")
      ) {
        this.itemDetails.showDetails = false;
        item.showDetails = !item.showDetails;
        this.itemDetails = item;
      } else {
        item.showDetails = !item.showDetails;
        this.itemDetails = item;
      }
    },
    highlightBorder(id) {
      if (id === this.itemDetails.id) {
        return "option border-highlight";
      } else {
        return "option";
      }
    }
  }
};
</script>

<style lang='scss'>
@import "@/globalStyles/mixins.scss";

#custom-section {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto 385.5px 30vh;
  background: var(--main-background);
  border-bottom: var(--border-div);
}
#steps {
  padding-bottom: 5px;
}

#option-details {
  margin: var(--item-division);
}

#steps button {
  border: 0.5px solid black;
  margin-left: 5px;
  margin-top: 5px;
  border-radius: var(--border-rad);
  padding: 5px 3px;
}

#options {
  display: flex;
  overflow-x: scroll;
  padding: 12px;
  @include scrollbar();
  border-bottom: var(--border-div);
}

.option {
  width: 350px;
  border-radius: var(--border-rad);
  flex: 1 0 auto;
  margin-right: var(--item-division);
  h3 {
    @include center-content();
  }
}

.border-highlight{
  border: var(--border-highlighted)
}
</style>
