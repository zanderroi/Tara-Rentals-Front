<template>
  <div id="app">
    <nav class="sticky top-0 left-0 right-0 font-montserrat" style="background-color: #232628;">
      <div class=" flex flex-row justify-center items-center text-gray-300 space-x-6">
   
        <div class="flex justify-start space-x-4 p-2 ml-4">
          <a href="/">  <img src="../assets/taralogo.png" class="rounded-full w-16 h-10"></a>
          <a href="/" class=" hover:text-yellow-400 text-xl font-bold flex items-center">TARA</a>
        </div>

            <div class="w-full flex justify-end space-x-9 p-2">
              <router-link to="/OurServices" class=" border-b-2 border-transparent p-1 hover:border-yellow-500">
            
                <div class="font-normal text-sm p-1">Our Services</div>
            
            </router-link>
            <router-link to="/AboutUs" class=" border-b-2 border-transparent p-1 hover:border-yellow-500">
              
                <div class="font-normal text-sm p-1">About Us</div>
              
            </router-link>
              <router-link to="/HostPage" class=" border-b-2 border-transparent p-1  hover:border-yellow-500">
              
                <div class="font-normal text-sm p-1">BECOME A HOST <i class="fa-solid fa-car" style="color: #ffffff;"></i></div>
              
            </router-link>
              <router-link to="/Auth/LoginPage" class="font-normal text-sm border-b-2 border-transparent hover:border-yellow-500 p-1 mt-1"> Login </router-link>

                      <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="text-sm font-normal flex items-center justify-between  border-b-2 border-transparent p-1  hover:border-yellow-500">Sign up 
                        <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
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
            
                
            </div>
                  <!-- Mobile Menu -->
                  <div class="md:hidden flex justify-between items-center px-4 py-2">
                  <a href="/">
                    <img src="../assets/taralogo.png" class="rounded-full w-8 h-8" />
                  </a>

                  <router-link to="/HostPage" class=" border-b-2 border-transparent p-1 hover:border-yellow-500">
              <div>
                <div class="font-normal text-xs text-white">BECOME A HOST <i class="fa-solid fa-car" style="color: #ffffff;"></i></div>
              </div>
            </router-link>
                  <!-- Hamburger button -->
                  <button
                    @click="toggleMobileMenu"
                    class="text-white focus:outline-none"
                    :class="{ 'text-yellow-400': mobileMenuOpen }"
                  >
                    <i class="fas fa-bars text-xl"></i>
                  </button>

                  
                </div>

                <!-- Mobile menu items -->
                <div v-if="mobileMenuOpen" class="font-montserrat fixed top-12 left-0 right-0 bottom-0 z-50 bg-white divide-y divide-gray-100  w-full dark:bg-gray-700 dark:divide-gray-600" style="background-color: #ffffff;">
                  <!-- ... (mobile menu items) ... -->
                  <!-- Add your mobile menu items here -->
                  <router-link to="/Auth/LoginPage" class="font-normal text-xs hover:text-yellow-400">
            <div class="text-left">
              Login
            </div>
          </router-link>
                  <ul class="font-montserrat px-4 py-2 text-lg  dark:text-gray-400  text-yellow-400 font-bold text-left" aria-labelledby="dropdownLargeButton"> Join Us!
                    <li>
                      <router-link to="/Auth/CustomerRegister" class="text-left text-lg font-normal block px-2 mb-1 text-gray-600 hover:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-white"> <i class="fa-regular fa-user mr-4"></i>Customer</router-link>
                    </li>
                    <li>
                      <router-link to="/Auth/OwnerRegister" class="text-left text-lg font-normal block px-2 py-2 mb-1  text-gray-600 hover:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-white"><i class="fa-regular fa-id-card mr-3"></i>Car Owner</router-link>
                    </li>
                    <li>
                      <router-link to="/Auth/TruckerRegister" class="text-left text-lg font-normal block px-2 mb-1 text-gray-600 hover:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-white"><i class="fa-regular fa-truck-fast mr-3"></i>Trucker</router-link>
                    </li>
                  </ul>
                </div>

                <!-- Desktop Menu (Hidden on mobile) -->
                <div v-if="!mobileMenuOpen" class="hidden md:flex md:justify-between md:items-center text-gray-300 text-sm p-1 space-x-6">
                  <!-- ... (existing header content) ... -->
                  <!-- Add your existing header content here -->
                </div>
              </nav>
            
              <router-view />
            </div>
</template>

<script>
import 'flowbite';

export default
{
  data() {
    return {
      mobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    },
  },
};
</script>
<style>
.font-montserrat {
    font-family: 'Montserrat', sans-serif;
  }
</style>

