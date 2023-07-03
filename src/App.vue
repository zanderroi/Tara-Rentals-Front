<template>
  <div id="app">
    <nav class="topheader fixed top-0 left-0 right-0">
        <div class="flex flex-row justify-center items-center text-gray-300 text-sm p-4 space-x-6">
    <div>
      <i class="fa-solid fa-phone-flip" style="color: #ffffff;"></i> +1 212-226-3126
    </div>
    <div>
      <i class="fa-sharp fa-solid fa-location-pin" style="color: #ffffff;"></i> 1840 E Garvey Ave South West Covina, CA 91791
    </div>
    <div class="mr-4">
      <i class="fa-solid fa-calendar-check" style="color: #ffffff;"></i> Work Hours
    </div>
    <a href="#" class="ml-6 pl-4">
      <i class="fa-brands fa-facebook" style="color: #ffffff;"></i>
    </a>
    <a href="#">
      <i class="fa-brands fa-twitter" style="color: #ffffff;"></i>
    </a>
    <a href="#">
      <i class="fa-brands fa-instagram" style="color: #ffffff;"></i>
    </a>
    <a href="#">
      <i class="fa-brands fa-linkedin" style="color: #ffffff;"></i>
    </a>
    <a href="#">
      <i class="fa-brands fa-google-plus" style="color: #ffffff;"></i>
    </a>
    <div>
      <div class="font-bold">BE A HOST <i class="fa-solid fa-car" style="color: #ffffff;"></i></div>
    </div>
    <router-link to="/Auth/LoginPage" class="font-bold hover:text-blue-600">
  <div>
    Login
  </div>
</router-link>
  </div>
    </nav>
   
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.topheader {
    background-color: #232628;
  }
  
  .font-montserrat {
    font-family: 'Montserrat', sans-serif;
  }
</style>
