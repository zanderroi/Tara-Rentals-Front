<template>
 <div class="flex flex-col mx-auto py-12 sm:px-6 lg:px-8" style="min-height: 100vh;">
     <div class="p-4 mt-4 sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="text-center text-3xl font-bold text-gray-900">REGISTER</h2>
      </div>
      <div class="px-20 mt-8 sm:mx-auto sm:w-full border-2 sm:max-w-1/2">
        <div class="border-2 flex justify-center items-center" style="padding-top: 2rem;">
          
    
            <div class="flex flex-row space-x-8">
             <div class="step" id="step-1">
                <div class="border-b-4 w-52 mb-4" style="border-color: #FFB128;">
                    <div class="rounded-full text-left  text-white font-bold px-2 text-xs flex justify-center items-center w-5 h-5" style="background-color: #FFB128;">1.</div>
                <h3 class="mt-4 text-sm text-left font-semibold mb-1 " style="color: #232628;"> USER INFORMATION</h3>
                <h3 class="text-xs text-left font-normal mb-2 text-gray-500 "> Add your details here</h3>
            </div>   
            </div>

            <div class="step" id="step-1">
                <div class="border-b-4 w-52 mb-4" style="border-color: #EAEDF0;">
                    <div class="rounded-full text-left border-2 text-white font-bold px-2 text-xs flex justify-center items-center w-5 h-5" style="border-color: #FFB128; color: #FFB128;">2.</div>
                <h3 class="mt-4 text-sm text-left font-semibold mb-1 " style="color: #232628;"> USER IDENTIFICATION</h3>
                <h3 class="text-xs text-left font-normal mb-2 text-gray-500 "> Add your details here</h3>
            </div>   
            </div>

            <div class="step" id="step-1">
                <div class="border-b-4 w-52 mb-4" style="border-color: #EAEDF0;">
                    <div class="rounded-full text-left border-2 text-white font-bold px-2 text-xs flex justify-center items-center w-5 h-5" style="border-color: #FFB128; color: #FFB128;">3.</div>
                <h3 class="mt-4 text-sm text-left font-semibold mb-1 " style="color: #232628;"> USER ACCOUNT</h3>
                <h3 class="text-xs text-left font-normal mb-2 text-gray-500 "> Add your details here</h3>
            </div>   
            </div>
        </div>         
        </div>
        <div class="flex flex-row space-x-8 justify-center items-center mb-4">
            <div>
                <div class="text-left">
               <label for="first_name" class="text-xs text-gray-600 ">First name <br></label>
               <input id="first_name" name="first_name" type="text" class="p-2" style="background-color: #ECEFF3;" required>
            </div>
            </div>

            <div> 
                <div>
                <div class="text-left">
               <label for="last_name" class="text-xs text-gray-600 ">Last name <br></label>
               <input id="last_name" name="last_name" type="text" class="p-2" style="background-color: #ECEFF3;" required>
            </div>
            </div>

            </div>

            <div> 
                <div>
                <div class="text-left">
               <label for="middle_initial" class="text-xs text-gray-600 ">Middle Name <br></label>
               <input id="middle_initial" name="middle_initial" type="text" class="p-2" style="background-color: #ECEFF3;" required>
            </div>
            </div>

            </div>
        </div>
        <div class="flex flex-row space-x-8 justify-center items-center">

            <div> 
                <div class="text-left">
                <label for="gender" class="text-xs text-gray-600"> Gender<br></label>
                <select id="user_type" name="user_type" class="p-2" style="background-color: #ECEFF3;">
                    <option value=""> </option>
                    <option value="customer">Male</option>
                    <option value="car_owner">Female</option>
                    <option value="car_owner">Rather not say</option>
                </select>

            </div>
            </div>

            <div> 
                <div class="text-left">
                    
                </div>


            </div>

            <div> 


            </div>


        </div>

        </div>
        </div>
  
</template>