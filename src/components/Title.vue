<template>
  <div id="title">
    <h1>{{Title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'title',
  props: {
    Title: {
      type: String,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
