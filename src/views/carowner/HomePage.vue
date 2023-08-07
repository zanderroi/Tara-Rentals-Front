<template>
    <div id="app">
         <div class="bg-cover p-4" :style="`background-image: url(${require('@/assets/carownerbg.png')}); min-height: 90vh;`">

            <div class=" rounded-md shadow-md mx-auto p-4 w-1/2" style="background-color: #232628; ">
                <div class="flex flex-wrap p-4">
                 <img src="/assets/searchcaricon.png">
                    <h3 class="ml-4 font-montserrat text-md text-white text-left mb-4">Want to List your Car?</h3>

                    <div class="flex flex-wrap space-x-4 px-4 pt-2 font-montserrat"> 
        <select id="year" name="year" class="p-2 border-0 outline-none text-xs py-2 " style="background-color: #ECEFF3;">
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

                   <button type="button" class="border-2 border-yellow-500 rounded-sm px-8 text-white text-xs font-montserrat hover:bg-yellow-500"> Continue</button>

                   
      </div>
                </div>
      </div>

            </div>
        
        </div>
    
</template>