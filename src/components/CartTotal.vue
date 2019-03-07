<template>
  <div class="cart-total">
    <span :key="item.id" v-for="item in getPurchaseSummary">{{item.productName}} $ {{item.price}}</span>
  </div>
</template>

<script>
export default {
  computed: {
    getPurchaseSummary() {
      return this.$store.state.customer.customer.cartTotal;
    }
  }
};
</script>

<style lang="scss">
@import "@/globalStyles/mixins.scss";

.cart-total {
  flex-grow: 3;
  display: flex;
  flex-flow: column wrap;
  @include item-styles();
    span{
      width: 25%
    }
}
</style>
