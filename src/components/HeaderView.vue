<template>

      <nav class=" sticky top-0 z-50" style="background-color: #232628;">
      <div class="  px-4 py-2 mx-auto md:flex md:justify-between md:items-center font-montserrat" >
        <div class="flex items-center justify-between">
          <router-link to="/" class="text-md font-bold px-4 ml-4 text-yellow-400 md:text-md hover:text-yellow-300"><a href="/">  
            <img src="../assets/logotara.png" class="w-10 "></a>TARA
          </router-link>
          <!-- Mobile menu button -->
          <div @click="toggleNav" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-100
                hover:text-gray-400
                focus:outline-none focus:text-yellow-400
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
  
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
          "
        >
        <router-link to="/OurServices" class="border-b-2 border-transparent p-1 hover:border-yellow-500">
            
            <div class="text-left text-gray-300 font-normal text-sm p-1">Our Services</div>
        
        </router-link>
        <router-link to="/AboutUs" class=" border-b-2 border-transparent p-1 hover:border-yellow-500">
          
            <div class="text-left text-gray-300  font-normal text-sm p-1">About Us</div>
          
        </router-link>
          <router-link to="/HostPage" class=" border-b-2 border-transparent p-1  hover:border-yellow-500">
          
            <div class="text-left text-gray-300  font-normal text-sm p-1">BECOME A HOST <i class="fa-solid fa-car" style="color: #ffffff;"></i></div>
          
        </router-link>
        <router-link to="/Auth/LoginPage" class=" border-b-2 border-transparent p-1  hover:border-yellow-500">  <div class="text-left text-gray-300  font-normal text-sm p-1">Login</div> </router-link>
        <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class=" text-left text-gray-300 text-sm font-normal flex items-center justify-between  border-b-2 border-transparent px-2  hover:border-yellow-500">Sign up 
                        <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                      <!-- Dropdown menu -->
                      <div id="dropdownNavbar" class="z-10 hidden font-normal  divide-y divide-gray-100  w-full  dark:bg-gray-700 dark:divide-gray-600 sm:w-full md:w-44" style="background-color: #232628;">
                          <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                            <li>
                              <router-link to="/Auth/CustomerRegister" class="text-gray-300 block px-4 py-2 border-b-2 border-transparent hover:border-yellow-500 ">Customer</router-link>
                            </li>
                            <li>
                              <router-link to="/Auth/OwnerRegister" class="text-gray-300 block px-4 py-2 border-b-2 border-transparent hover:border-yellow-500 ">Car Owner</router-link>
                            </li>
                            <li>
                              <router-link to="/Auth/TruckerRegister" class="text-gray-300 block px-4 py-2 border-b-2 border-transparent hover:border-yellow-500 ">Trucker</router-link>
                            </li>
                          </ul>
                      </div>
        </ul>
    </div>
      </nav>
      <router-view />
 
  </template>
  <script>
  import 'flowbite';
  import { ref } from 'vue';
  export default {
    setup() {
      let showMenu = ref(false);
      const toggleNav = () => (showMenu.value = !showMenu.value);
      return { showMenu, toggleNav };
    },
  };
  </script>

<style>
.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}

/* Add any additional styling for the mobile menu toggle button here */
</style>