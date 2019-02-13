<template>
  <nav id="menu">
    <div class="menu-container">  
      <div class="menu-title" v-bind:style="{order:menu.order}" v-for="(menu, index) in menus" v-bind:key="index">
        <button class="menu-button" 
          v-bind:id="index" 
          v-on:click="toggle">
          {{menu.category}}
        </button>
        <transition appear name="dropdown">
          <div class="dropdown" v-show="menu.toggle">
            <a class="menu-links" 
              v-for= "link in menu.links" 
              v-bind:href="link.url">
              {{link.product}}
            </a>
          </div>
        </transition>
      </div>
    </div>
  </nav>
</template>

<script>
  export default{
    computed: {
      menus: function(){
        return this.$store.state.shopConfig.menus
      }
    },
    methods: {
      toggle: function(event){
        this.$store.dispatch("toggleMenuAction", event)
      }
    },
  }
</script>

<style lang="scss">
@import '@/globalStyles/mixins.scss';

  #menu{
    grid-column: 1/3;
    grid-row: 2/3;
    @include mediaQ(600px){
      grid-area: 2/1/3/4;
    }
  }
 
  .menu-container{
    display:flex;
    height: 100%;
    padding: 0%;
  }
  .menu-title{
    width: 25%;
  }
  .menu-button{
    width: 100%;
    height: 100%;
    background:coral;
    border: 0.2px solid black
  }
  .menu-links{
    display:block;
  }
  .dropdown{
    background-color: lightsalmon;
    padding: 4%;
    z-index: 1
  }
  
  .dropdown-enter-active{
    animation: enter 0.5s ease;
  }

  @keyframes enter {
    from{
      transform: scaleY(0) 
    }
    to{
      transform: scaleY(1) 
    }
  }
  .dropdown-leave-active{
    animation: exit 0.5s ease;
  }

  @keyframes exit{
    from{
      transform: scaleY(1)
    }
    to{
      transform: scaleY(0) 
    }
  }
</style>


