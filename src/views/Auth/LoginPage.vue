<template>
    <div id="app">

        <!-- Customer Login -->
    <div v-if="selectedLogin === 'customer'" class="flex flex-row justify-center" style="min-height: 100vh;">

        <div class="w-1/2 bg-cover" :style="`background-image: url(${require('@/assets/customerbg.png')});`">
        
        
        </div>

        <div class="w-1/2 text-center justify-center flex items-center h-screen" style="background-color: #C0BDBD; ">
            <div class="h-96 mx-auto text-center justify-center items-center" style="background-color: #232628; width: 500px;">
                <div class="flex flex-row justify-center items-center pt-6 space-x-4">
                    <a href="#" @click.prevent="selectedLogin = 'customer'" ><div class="border-b-2  p-1 flex items-center space-x-2" style="border-color: #FFB128 ;"><img class="w-8 h-8" src="@/assets/icons/Driveractive.png"> <h3 class="font-semibold text-center text-xs" style="color:#FFB128; ">Customer</h3> </div></a>
                    <a href="#" @click.prevent="selectedLogin = 'carOwner'"><div class="border-b-2 border-transparent hover:border-yellow-400 p-1 flex items-center space-x-2 " ><img class="w-8 h-8" src="@/assets/icons/carowner.png"><h3 class="font-semibold text-center text-xs" style="color:white; ">Car Owner</h3> </div></a>
                    <a href="#" @click.prevent="selectedLogin = 'trucker'" ><div class="border-b-2 border-transparent hover:border-yellow-400 p-1 flex items-center space-x-2" ><img class="w-8 h-8" src="@/assets/icons/trucker.png"><h3 class="font-semibold text-center text-xs" style="color:white; ">Trucker</h3> </div></a>
                </div>
            <h1 class="text-lg font-semibold text-white p-2 mt-4">LOG IN TO YOUR ACCOUNT</h1>
            <input type="email" id="email" class=" p-2 mt-2 text-gray-800 placeholder-gray-900 border border-gray-700 w-3/4 text-sm h-10" style="background-color: #C0BDBD;" placeholder="Email" required>
            <input type="password" id="password" class="p-2 mt-4 text-gray-800 placeholder-gray-900 border border-gray-700 w-3/4 text-sm h-10" style="background-color: #C0BDBD;" placeholder="Password" required>
            <div class="pl-12 mt-2">
             <div class="text-left pl-3 mt-1 text-gray-300 ">
                <div class="form-check">
                   <input class="form-check-input" type="checkbox" name="remember" id="remember">
                    <label class="form-check-label text-sm px-2" for="remember">Remember Me</label>
                </div>
                </div>
            </div>
            <button type="submit" class="block mx-auto mt-1 mb-4 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Sign in</button>
             <a href="#" class="text-xs text-gray-200 hover:underline p-4 ">Forgot Password?<br></a>
             <router-link to="/Auth/CustomerRegister" class="text-xs text-gray-200 hover:underline p-4 ">New Member? Sign up
             </router-link>
                        

        </div>
        </div>


    </div>

    <!-- Car Owner Login -->
    <div v-else-if="selectedLogin === 'carOwner'" class="flex flex-row justify-center" style="min-height: 100vh;">

        <div class="w-1/2 bg-cover" :style="`background-image: url(${require('@/assets/loginbg.png')});`">


        </div>

        <div class="w-1/2 text-center justify-center flex items-center h-screen" style="background-color: #C0BDBD; ">
            <div class="h-96 mx-auto text-center justify-center items-center" style="background-color: #232628; width: 500px;">
                <div class="flex flex-row justify-center items-center pt-6 space-x-4">
                        <a href="" @click.prevent="selectedLogin = 'customer'"><div class="border-b-2 border-transparent hover:border-yellow-400 p-1 flex items-center space-x-2"><img class="w-8 h-8" src="@/assets/icons/Driver.png"><h3 class="font-semibold text-center text-xs" style="color:white; ">Customer</h3> </div></a>
                        <a href="" @click.prevent="selectedLogin = 'carOwner'"><div class="border-b-2 p-1 flex items-center space-x-2" style="border-color: #FFB128 ;"><img class="w-8 h-8" src="@/assets/icons/carowneractive.png"><h3 class="font-semibold text-center text-xs" style="color:#FFB128; ">Car Owner</h3> </div></a>
                    <a href="" @click.prevent="selectedLogin = 'trucker'"><div class="border-b-2 border-transparent hover:border-yellow-400 p-1 flex items-center space-x-2" ><img class="w-8 h-8" src="@/assets/icons/trucker.png"><h3 class="font-semibold text-center text-xs" style="color:white; ">Trucker</h3> </div></a>
                </div>
            <h1 class="text-lg font-semibold text-white p-2 mt-4">LOG IN TO YOUR ACCOUNT</h1>
            <input type="email" id="email" class=" p-2 mt-2 text-gray-800 placeholder-gray-900 border border-gray-700 w-3/4 text-sm h-10" style="background-color: #C0BDBD;" placeholder="Email" required>
            <input type="password" id="password" class="p-2 mt-4 text-gray-800 placeholder-gray-900 border border-gray-700 w-3/4 text-sm h-10" style="background-color: #C0BDBD;" placeholder="Password" required>
            <div class="pl-12 mt-2">
            <div class="text-left pl-3 mt-1 text-gray-300 ">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" name="remember" id="remember">
                    <label class="form-check-label text-sm px-2" for="remember">Remember Me</label>
                </div>
                </div>
            </div>
            <router-link to="/carowner/HomePage">
            <button type="submit" class="block mx-auto mt-1 mb-4 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Sign in</button></router-link>
            <a href="#" class="text-xs text-gray-200 hover:underline p-4 ">Forgot Password?<br></a>
            <router-link to="/Auth/CustomerRegister" class="text-xs text-gray-200 hover:underline p-4 ">New Member? Sign up
            </router-link>
                        

        </div>
        </div>


        </div>

        <!-- Trucker Login -->

        <div v-else-if="selectedLogin === 'trucker'" class="flex flex-row justify-center" style="min-height: 100vh;">

            <div class="w-1/2 bg-cover" :style="`background-image: url(${require('@/assets/truckerbg.png')});`">


            </div>

            <div class="w-1/2 text-center justify-center flex items-center h-screen" style="background-color: #C0BDBD; ">
                <div class="h-96 mx-auto text-center justify-center items-center" style="background-color: #232628; width: 500px;">
                    <div class="flex flex-row justify-center items-center pt-6 space-x-4">
                        <a href="" @click.prevent="selectedLogin = 'customer'"><div class="border-b-2 border-transparent hover:border-yellow-400 p-1 flex items-center space-x-2" ><img class="w-8 h-8" src="@/assets/icons/Driver.png"><h3 class="font-semibold text-center text-xs" style="color:white; ">Customer</h3> </div></a>
                        <a href="" @click.prevent="selectedLogin = 'carOwner'"><div class="border-b-2 border-transparent hover:border-yellow-400 p-1 flex items-center space-x-2" ><img class="w-8 h-8" src="@/assets/icons/carowner.png"><h3 class="font-semibold text-center text-xs" style="color:white; ">Car Owner</h3> </div></a>
                        <a href="" @click.prevent="selectedLogin = 'trucker'"><div class="border-b-2 p-1 flex items-center space-x-2" style="border-color: #FFB128;"><img class="w-8 h-8" src="@/assets/icons/truckeractive.png"><h3 class="font-semibold text-center text-xs" style="color:#FFB128; ">Trucker</h3> </div></a>
                    </div>
                <h1 class="text-lg font-semibold text-white p-2 mt-4">LOG IN TO YOUR ACCOUNT</h1>
                <input type="email" id="email" class=" p-2 mt-2 text-gray-800 placeholder-gray-900 border border-gray-700 w-3/4 text-sm h-10" style="background-color: #C0BDBD;" placeholder="Email" required>
                <input type="password" id="password" class="p-2 mt-4 text-gray-800 placeholder-gray-900 border border-gray-700 w-3/4 text-sm h-10" style="background-color: #C0BDBD;" placeholder="Password" required>
                <div class="pl-12 mt-2">
                <div class="text-left pl-3 mt-1 text-gray-300 ">
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" name="remember" id="remember">
                        <label class="form-check-label text-sm px-2" for="remember">Remember Me</label>
                    </div>
                    </div>
                </div>
                <button type="submit" class="block mx-auto mt-1 mb-4 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Sign in</button>
                <a href="#" class="text-xs text-gray-200 hover:underline p-4 ">Forgot Password?<br></a>
                <router-link to="/Auth/CustomerRegister" class="text-xs text-gray-200 hover:underline p-4 ">New Member? Sign up
                </router-link>
                            

            </div>
            </div>


            </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLogin: 'customer', // Initially show the customer login section
    };
  },
};
</script>

<style>
h3 {
    font-family: Montserrat, sans-serif;
}
</style>