<template>
        <div id="slideshowData-container" :style="{backgroundImage: `url(${slideshowData[counter].url})`}">
            <h2 id="pic-title">{{slideshowData[counter].title}}</h2>
            <div id="slideshowData-position">
                <div v-bind:class="{highlighted: slideshowPosition(index)}" 
                class="slideshowData-indicator" 
                v-for="(picture, index) in slideshowData">
                </div>
            </div>
            <button name="left" v-on:click="scrollFunction" id="left-button">Left</button>
            <button name="right" v-on:click="scrollFunction" id=right-button>Right</button>
        </div>
</template>

<script>
export default {
    data: function(){
        return{
            counter: 0,
        }
    },
    props:{
      slideshowData: Array
    },
    mounted: function(){
        let id = setInterval(()=>{
            if(this.counter < this.slideshowData.length - 1){
                this.counter++  
            }else if(this.counter >= this.slideshowData.length - 1){
                clearInterval(id)
            }
            }, 5000, this.counter)
    },
    methods:{
        slideshowPosition: function(index){
            if(index  === this.counter){
               return true
            }else{
               return false
            }
        },
        scrollFunction: function(e){
            let array = this.slideshowData
            if(e.target.id === "left-button"){
                if(this.counter <= 0){
                    this.counter = array.length - 1
                }else{
                    this.counter = this.counter - 1
                }    
            }else if(e.target.id === "right-button"){
                if(this.counter >= array.length - 1){
                    this.counter = 0
                }else{
                    this.counter = this.counter + 1
                }    
            }                
        },
    },
}
</script>

<style>
    #slideshowData-container{
        height: 100%;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
    }
    #pic-title{
       text-align: center;
    }
    #slideshowData-position{
        display: flex;
        justify-content: center;
        height: 10%;
    }
    .slideshowData-indicator{
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
