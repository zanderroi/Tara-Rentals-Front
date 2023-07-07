<template>
  <div id="app" class="font-montserrat">
    <div class="bg-cover bg-no-repeat w-full flex flex-col pt-4" :style="`background-image: url(${require('@/assets/bgimagehome.jpg')}); min-height: 95vh;`">
    <!-- Your content here --> 

    <div class="mt-4 w-1/2  mx-auto p-4 rounded-md" style="background-color: #232628; height: 9rem;">
      <div class="flex flex-row p-4">
        <img src="../assets/searchcaricon.png">
      <h3 class="ml-4 font-montserrat text-md text-white text-left">Looking for a Car to Rent</h3>
    
      </div>
      <div class="flex flex-row space-x-4 px-4 pt-2 font-montserrat"> 
        <select id="year" name="year" class="p-2 border-0 outline-none text-xs py-2 w-32" style="background-color: #ECEFF3;">
                       <option value=""> Choose Year </option>
                       <option value="2023">2023</option>
                       <option value="2022">2022</option>
                       <option value="2021">2021</option>
                       <option value="2019">2019</option>
                       <option value="2018">2018</option>
                       <option value="2017">2017</option>
                   </select>

                   <select id="make" name="make" class="p-2 border-0 outline-none text-xs py-2" style="background-color: #ECEFF3;">
                       <option value=""> Choose Make </option>
                       <option value="Toyota">Toyota</option>
                       <option value="Honda">Honda</option>
                       <option value="Mitsubishi">Mitsubishi</option>
                       <option value="Hyundai">Hyundai</option>
                       <option value="Jaguar">Jaguar</option>
                       <option value="Ford">Ford</option>
                   </select>

                   <select id="model" name="model" class="p-2 border-0 outline-none text-xs py-2" style="background-color: #ECEFF3;">
                       <option value=""> Choose Model </option>
                       <option value="SSS">Toyota</option>
                       <option value="National ID">Honda</option>
                       <option value="Passport">Mitsubishi</option>
                       <option value="Philhealth ID">Hyundai</option>
                       <option value="Tin ID">Jaguar</option>
                       <option value="Postal ID">Ford</option>
                   </select>

                   <input id="date" name="date" type="date" class="p-2 border-0 outline-none text-sm py-2" style="background-color: #ECEFF3;" placeholder="Date and Time">
                   <button type="button" class="border-2 border-yellow-500 rounded-sm px-8 text-white text-xs font-montserrat"> Search</button>

                   
      </div>
 
    </div>
  </div>
  <div class="bg-white" :style="`min-height: 100vh;`">
  <div class="pt-4 flex flex-row justify-center p-4 mt-4 space-x-5">
    <div>
      <h1 class="font-montserrat text-gray-800 font-bold text-4xl">RECENT</h1>
    </div>
    <div>
      <h1 class="font-montserrat font-bold text-4xl" style="color: #FFB128;">CARS AVAILABLE</h1>
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
  </div>

  </template>
  <script>

  </script>
  
  <style scoped>
  
  .font-montserrat {
    font-family: 'Montserrat', sans-serif;
  }
  </style>
  