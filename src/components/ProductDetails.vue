<template>
  <div id="product-details">
    <div id="img-container">
      <SlideShow v-bind:slideshowData="item.imgArray"></SlideShow>
    </div>
    <h1>{{item.name}} Details</h1>
    <h3>Summary</h3>
    <p>{{item.summary}}</p>
    <div id="product-specs">
      <h3>Specifications</h3>
      <div v-for="spec in item.specs">
        <span>
          <b>{{spec.key}}</b>:
        </span>
        <span>{{spec.value}}</span>
      </div>
    </div>
    <div id="product-reviews">
      <h3>Reviews</h3>
      <div v-for="review in item.reviews ">
        <div v-for="n in review"></div>
        <span>
          <b>{{review.user}} says:</b>
        </span>
        <span>{{review.comment}}</span>
      </div>
    </div>

    <div id="product-questions">
      <h3>Questions</h3>
      <div v-for="question in item.questions">
        <span>
          <b>{{question.user}} asks:</b>
        </span>
        <span>{{question.question}}</span>
        <span>
          <b>Answer:</b>
          {{question.answer}}
        </span>
      </div>
      <div id="product-info">
        <span><b>Price:</b> ${{item.price}}</span>
        <span><b>In Stock:</b> {{item.inStock === true? "Yes" : "No"}}</span>
        <button>Buy</button>
        <button v-on:click="backToList(item)">Hide Details</button>
      </div>
    </div>
  </div>
</template>

<script>
import SlideShow from "@/components/SlideShow.vue";
export default {
  props: {
    item: Object
  },
  components: {
    SlideShow
  },
  methods: {
    backToList(item) {
      item.showDetails = !item.showDetails;
    }
  }
};
</script>

<style lang="scss">
@import "@/globalStyles/mixins.scss";

#product-details {
  background: var(--item-background);
  padding: var(--item-division);
  border-radius: var(--border-rad);
  border: var(--border-highlighted);
  margin-bottom: var(--item-division);
}
#img-container {
  float: right;
  height: 50vh;
  width: 40%;
  overflow: hidden;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
}

span {
  display: inline-block;
  margin: 3px;
}

#product-info{
  display: flex;
  margin: 2% 0%;
  background: lightblue;
  padding: 10px 2%;
  border-radius: 8px;
  span, button{
    flex: 1
  }
  
}
</style>

