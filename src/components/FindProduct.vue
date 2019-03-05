<template> 
<div>
  <input placeholder="search for products" v-model="input"/>
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
    @include mediaQ(600px){
      grid-area: 3/1/4/4;
      
    }
  }
  input{
    border: none;
    padding: 5px;
    background: lightblue;
    flex: 1
  }
  button{
     
  }
</style>