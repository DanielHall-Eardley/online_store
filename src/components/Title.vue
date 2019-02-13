<template>
  <div id="title-container">
    <slot></slot>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@/globalStyles/mixins.scss';

#title-container {
  text-align: center;
  background: sandybrown;
  padding: 5px 1%;
  @include mediaQ(600px){
    grid-area:1/2/2/3;
  }
}

</style>

