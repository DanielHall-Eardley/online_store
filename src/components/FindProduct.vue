<template> 
<div>
  <form>
    <input v-model="input"/>
    <button v-on:click.prevent="handleInput()">Submit</button>
  </form>
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

<style scoped>
  form{
    grid-column: 3/4;
    grid-row: 2/3;
    display: flex;
    justify-content: center;
    align-content: center
  }
  input{
    margin: 2%;
  }
  button{
    margin: 2%;
  }
</style>