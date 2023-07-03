<template>
 

    <div class="bg-cover bg-no-repeat w-full flex flex-col " :style="`background-image: url(${require('@/assets/bgimagehome.jpg')}); min-height: 80vh;`">
    <!-- Your content here --> 
   
  </div>
  <div class="bg-white" :style="`min-height: 100vh;`">
  <div class="pt-4 flex flex-row justify-center p-4 mt-4 space-x-5">
    <div>
      <h1 class="font-montserrat text-gray-800 font-bold text-4xl">RECENT</h1>
    </div>
    <div>
      <h1 class="font-montserrat font-bold text-4xl text-yellow-500">CARS AVAILABLE</h1>
    </div>
  </div>
  <p class="text-center text-md font-normal">Select the one that suits your preference</p>
</div>
    <div class="pt-4 mt-6">
      <div class="flex flex-wrap justify-center items-center space-x-3 space-y-2">
        <div class=" w-64 h-72  shadow-md" style="background-color: #373C3F;">
        <div class="h-48 bg-cover" :style="`background-image: url(${require('@/assets/carsimage/toyota3.jpg')});`">
        </div>
        </div>
        <div class="w-64 h-72" style="background-color: #373C3F;">
          <div class="h-48 bg-cover" :style="`background-image: url(${require('@/assets/carsimage/samplecar.png')});`">
        </div>
      </div>
        <div class="w-64 h-72" style="background-color: #373C3F;">
          <div class="h-48 bg-cover" :style="`background-image: url(${require('@/assets/carsimage/samplecar.png')});`">
        </div>
        </div>
        <div class="w-64 h-72" style="background-color: #373C3F;">
          <div class="h-48 bg-cover" :style="`background-image: url(${require('@/assets/carsimage/samplecar.png')});`">
        </div>
        </div>
        <div class="w-64 h-72" style="background-color: #373C3F;">
          <div class="h-48 bg-cover" :style="`background-image: url(${require('@/assets/carsimage/samplecar.png')});`">
        </div>
        </div>
        <div class="w-64 h-72" style="background-color: #373C3F;">
          <div class="h-48 bg-cover" :style="`background-image: url(${require('@/assets/carsimage/samplecar.png')});`">
        </div>
        </div>
      </div>
    </div>
        

  </template>
  <script>

  </script>
  
  <style scoped>
  
  .font-montserrat {
    font-family: 'Montserrat', sans-serif;
  }
  </style>
  