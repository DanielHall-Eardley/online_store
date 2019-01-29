<template>
    <p id="store-desc">{{storeDesc}}</p>
</template>

<script>
export default {
    computed:{
        storeDesc(){
            return this.$store.state.storeDescription
        }
    },
    created: function getDescription(){
            this.$store.dispatch('storeDescription')
        }
     
}
</script>

<style>
    #store-desc{
        width: 100%;
        text-align: center;
    }
</style>
