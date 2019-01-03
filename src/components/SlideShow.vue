<template>
    <transition>
        <div style="{backgroundImage: url(@/assets/gto.jpg)}">
            <h2>{{picTitle}}</h2>
            <button id="left-button">Left</button>
            <button id=right-button>Right</button>
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
                    url:"blue-camaro.png"
                },{
                    title:"things",
                    url:"charger.jpeg"
                },{
                    title:"hellcat",
                    url:"chevelle.jpg" 
                }, {
                    title:"monicas",
                    url:"gto.jpg"
                }
            ],
                picTitle:"",
                url:""
        }
    },
    beforeMount: function(){
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
    }
    h2{

    }
    img{
        object-fit: cover;
    }
</style>
