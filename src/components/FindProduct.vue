<template> 
<div>
  <input v-model="input"/>
  <button v-on:click.prevent="handleInput()">Submit</button>
</div>
</template>

<script>
  export default{
    data(){
      return{
        input:""
      }
    },
    methods:{
      handleInput: function(){
      console.log(this.input + "submitted")
      }
    }
  }
</script>

<style scoped lang="scss">
@import '@/globalStyles/mixins.scss';

  div{
    grid-column: 3/4;
    grid-row: 2/3;
    display: flex;
    justify-content: center;
    align-content: center;
    @include mediaQ(600px){
      grid-area: 3/1/4/4;
    }
  }
  input{
    margin: 2%;
    border: solid 0.5px black;
  }
  button{
    margin: 2%;
  }
</style>