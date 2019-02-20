<template>
  <div id="title-container">
    <slot></slot>
  </div>
</template>

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

