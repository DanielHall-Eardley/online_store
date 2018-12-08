<template>
  <h1 id="store-name">{{title}}</h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  #store-name{
    grid-row: 1/2;
    grid-column: 2/3;
    text-align: center;
  }
</style>

