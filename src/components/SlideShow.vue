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
    mounted: function (){
        let array = this.pictureArray
        let counter = 0
        let id;
            if(counter < array.length){
            id = setInterval(()=>{
                this.picTitle = array[counter].title
                this.url = array[counter].url
                counter++
                console.log(id, counter, array.length)

            }, 5000, array, counter)
            }else if(counter >= array.length){
                clearInterval(id)
                console.log("cleared")
            }
        }
    
}
</script>

<style scoped>
  div{
    height: 100%;
    width: 100%;
   }
</style>
