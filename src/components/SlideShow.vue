<template>
    <transition>
        <div id="slideshow-container" :style="{backgroundImage: `url(${url})`}">
            <h2 id="pic-title">{{picTitle}}</h2>
            <div id="slideshow-position">
                <div v-bind:class="{highlighted: slideshowPosition(index)}" class="slideshow-indicator" v-for="(picture, index) in pictureArray">
                </div>
            </div>
            <button name="left" v-on:click="scrollFunction()" id="left-button">Left</button>
            <button name="right" v-on:click="scrollFunction()" id=right-button>Right</button>
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
                picTitle:"stuff",
                url: require("@/assets/blue-camaro.png"),
                counter: 1,

        }
    },
    beforeMount: function(){
        let array = this.pictureArray
        let id = setInterval(()=>{
                if(this.counter < array.length){
                    this.picTitle = array[this.counter].title
                    this.url = require(`@/assets/${array[this.counter].url}`)
                    this.counter++
                }else if(this.counter >= array.length){
                    clearInterval(id)
                }
            }, 5000, array, this.counter)
        },
    methods:{
        slideshowPosition: function(index){
           if(index + 1 === this.counter){
               return true
           }
           else{
               return false
           }
        },
        scrollFunction: function(e){
            console.log(e.target.id)
            let array = this.pictureArray
        }
    }
    
}
</script>

<style>
    #slideshow-container{
        height: 100%;
        width: 100%;
        background-size: 100%;
        background-repeat: no-repeat;
        position: relative;
    }
    #pic-title{
       text-align: center;
    }
    #slideshow-position{
        display: flex;
        justify-content: center;
        height: 10%;
    }
    .slideshow-indicator{
        width: 3%;
        height: 15%;
        background-color:aqua;
        margin: 0% 1%;
        opacity: 0.2;
    }
    .highlighted{
        opacity: 1;
    }
    #left-button{
        position: absolute;
        left: 1%;
        top: 45%
    }
    #right-button{
       position: absolute;
       right: 1%;
       top: 45%;
    }
</style>
