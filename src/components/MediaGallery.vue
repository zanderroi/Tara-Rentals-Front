<!-- Carousel.vue -->
<template>
    <div class="carousel">
   
      <div class="slides-container">
        <div v-for="(image, index) in displayedImages" :key="index" class="slide">
          <img class="w-96 h-64" :src="image.url" alt="Image">
        </div>
      </div>
  
      <div class="carousel-buttons">
        <button @click="prevSlide">Previous</button>
        <button @click="nextSlide">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          { url: '/assets/samplecar.png' },
          { url: '/assets/sample2.png' },
          { url: '/assets/sample8.png' },
          { url: '/assets/sample3.png' },
          { url: '/assets/sample4.png' },
          { url: '/assets/sample5.png' },
          { url: '/assets/sample6.png' },
          { url: '/assets/sample7.png' },
          // Add more images here as needed
        ],
        currentIndex: 0,
      };
    },
    computed: {
      displayedImages() {
        // Return 4 images starting from the currentIndex
        return this.images.slice(this.currentIndex, this.currentIndex + 4);
      },
    },
    methods: {
      prevSlide() {
        if (this.currentIndex > 0) {
          this.currentIndex -= 1;
        }
      },
      nextSlide() {
        if (this.currentIndex + 1 < this.images.length - 3) {
          this.currentIndex += 1;
        }
      },
    },
  };
  </script>
  
  <style>
  .carousel {
    width: 100%;
    max-width: 600px; /* Adjust the width as needed */
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }
  
  .slides-container {
    display: flex;
    transition: transform 0.5s ease;
  }
  
  .slide {
    flex-shrink: 0;
    width: 100%;
  }
  
  img {
    width: 100%;
    height: auto;
  }
  
  .carousel-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
  
  button {
    padding: 0.5rem 1rem;
    background-color: #fff;
    border: none;
    cursor: pointer;
  }
  </style>
  