<template>
     <div id="app">
    <nav class="topheader sticky top-0 left-0 right-0 font-montserrat">
        <div class="flex flex-row justify-center items-center text-gray-300 text-sm p-2 space-x-6">
          <a href="/">
            <div><img src="../assets/taralogo.png" class="rounded-full w-8 h-8"></div></a>
            <a href="/" class="mr-4 pr-4 hover:text-yellow-400">TARA</a>

    <div class="text-xs">
      <i class="fa-solid fa-phone-flip" style="color: #ffffff;"></i> +1 212-226-3126
    </div>
    <div class="text-xs">
      <i class="fa-sharp fa-solid fa-location-pin" style="color: #ffffff;"></i> 1840 E Garvey Ave South West Covina, CA 91791
    </div>
    <div class="mr-4 text-xs">
      <i class="fa-solid fa-calendar-check" style="color: #ffffff;"></i> Work Hours
    </div>
    <a href="#" class="ml-6 pl-4">
      <i class="fa-brands fa-facebook text-white hover:text-blue-600"></i>
    </a>
    <a href="#">
      <i class="fa-brands fa-twitter text-white hover:text-blue-400"></i>
    </a>
    <a href="#">
      <i class="fa-brands fa-instagram text-white hover:text-red-500"></i>
    </a>
    <a href="#">
      <i class="fa-brands fa-linkedin text-white hover:text-blue-600"></i>
    </a>
    <a href="#">
      <i class="fa-brands fa-google-plus text-white hover:text-red-500"></i>
    </a>
    <div>
      <div class="font-normal text-xs">BE A HOST <i class="fa-solid fa-car" style="color: #ffffff;"></i></div>
    </div>
    <router-link to="/Auth/LoginPage" class="font-normal text-xs hover:text-yellow-400">
  <div>
    Login
  </div>
</router-link>

            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="text-xs font-normal flex items-center justify-between w-full py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Sign up <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
            <!-- Dropdown menu -->
            <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <router-link to="/Auth/CustomerRegister" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Customer</router-link>
                  </li>
                  <li>
                    <router-link to="/Auth/OwnerRegister" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Car Owner</router-link>
                  </li>
                  <li>
                    <router-link to="/Auth/TruckerRegister" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Trucker</router-link>
                  </li>
                </ul>
            </div>
       
  </div>
    </nav>
   
    <router-view />
  </div>
</template>

<script>
import 'flowbite';

export default
{

}
</script>
<style>
.font-montserrat {
    font-family: 'Montserrat', sans-serif;
  }
</style>

