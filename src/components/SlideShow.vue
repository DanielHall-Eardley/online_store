<template>
  <transition>
    <div>
      <h2>{{picTitle}}</h2>
      <img v-bind:href="url" alt="A slideshow of products"/>
      
    </div>
  </transition>
</template>

<script>
export default {
    data: function(){
        return{
            pictureArray:[
                {
                    title:"stuff",
                    url:""
                },{
                    title:"things",
                    url:""
                },{
                    title:"hellcat",
                    url:""
                }, {
                    title:"monicas",
                    url:""
                }
            ],
                picTitle:"",
                url:""
        }
    },
    beforeMount: function slideShow(){
        let array = this.pictureArray
        let counter = 0
        let id;
            id = setInterval(()=>{
                if(counter < array.length){
                    this.picTitle = array[counter].title
                    this.url = array[counter].url
                    counter++
                }else if(counter >= array.length){
                    clearInterval(id)
                }
            }, 5000, array, counter)
        }
    
}
</script>

<style scoped>
  div{
    height: 100%;
    width: 100%;
    z-index: 0;
   }
</style>
