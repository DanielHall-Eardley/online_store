<template>
  <div>
    <button v-if="customer.loggedIn" v-on:click="login">Log In</button>
    <h2 v-else>Welcome Back {{customer.name}}</h2>
  </div>
</template>

<script>
  export default{
    computed: {
      customer:function(){
      return this.$store.state.customer.customer
      }
    },
    methods:{
      login: function (){
        this.$router.push("/Login")  
      }
    }
  }
</script>

<style scoped>
  div{
    grid-column: 1/2;
    grid-row: 1/2;
  }

  button{
    width:70%;
    height:30%;
  }

  h2{
    font-size: 1.2rem;
  }
  
</style>