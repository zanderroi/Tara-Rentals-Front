<template>
    <div>
      
      <Carousel :itemsToShow="3.95" :wrapAround="true" :transition="500" ref="carousel">
        <Slide v-for="slide in images" :key="slide.url">
          <div class="carousel__item">
            <img :src="slide.url" alt="Slide" />
          </div>
        </Slide>
        <Pagination :numberOfPages="Math.ceil(images.length / 4)" />
      </Carousel>


    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  import 'vue3-carousel/dist/carousel.css';
  import { Carousel, Slide, Pagination } from 'vue3-carousel';
  

  
  export default defineComponent({
    name: 'AutoplayCarousel',
    components: {
      Carousel,
      Slide,
      Pagination,
    },
    props: {
      images: {
        type: Array,
        required: true,
      },
    },

  });
  </script>
  
  <style scoped>
  /* Your styles go here */
  </style>
  
 
  
<style scoped>
.carousel__item {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

/* Additional styles for pagination */
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.pagination__item {
  cursor: pointer;
  margin: 0 5px;
  font-size: 18px;
  color: #333;
}

.pagination__item--active {
  font-weight: bold;
}
</style>