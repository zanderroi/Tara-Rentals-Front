<template>
    <div id="app">
        <div class="background-container">
            <div class="bg-scroll">
                <img class="image" src="../assets/contact1.jpg">
            </div>
        </div>
    </div>
        <div class="w-full flex flex-wrap justify-center bg-gray-100" style="min-height: 25rem;">
            <div class="w-2/4 rounded-sm bg-white shadow-2xl">
                <div class="p-3">
                    <h3 class="font-monserrat font-bold text-left text-2xl p-6">CONTACT US</h3>
        
                    <div class="flex flex-row space-x-5 justify-center items-center">

        <div>
            <div class="text-left">
                <label for="first_name" class="text-xs text-gray-600">First name <span class="text-red-600">*</span> <br></label>
                <input v-model="firstName" ref="firstNameInput" id="first_name" name="first_name" type="text"  class="outline-none text-sm px-8 py-2" style="background-color: #ECEFF3; border: 1px solid transparent;" required>
            </div>
       <div>
            <div class="text-left mt-8">
                <label for="email" class="text-xs text-gray-600">Email <span class="text-red-600">*</span> <br></label>
                <input v-model="email" ref="email" id="email" name="email" type="text"  class=" outline-none text-sm px-8 py-2" style="background-color: #ECEFF3; border: 1px solid transparent;" required>
            </div>
        </div>
    </div>
<div> 
        <div>
            <div class="text-left">
                <label for="last_name" class="text-xs text-gray-600 ">Last name <span class="text-red-600">*</span> <br></label>
                <input v-model="lastName" ref="lastNameInput" id="last_name" name="last_name" type="text"  class="p-2  outline-none text-sm px-8 py-2" style="background-color: #ECEFF3; border: 1px solid transparent; " required>
            </div>
        </div>
        <div>
            <div class="text-left mt-8">
                <label for="phone_number" class="text-xs text-gray-600">Phone <span class="text-red-600">*</span> <br></label>
                <input v-model="phoneNumber" ref="phoneNumberInput" id="phone_number" name="phone_number" type="text"  class=" outline-none text-sm px-8 py-2" style="background-color: #ECEFF3; border: 1px solid transparent;" required>
            </div>
        </div>
    </div>
        <div>
            <div class="text-left">
                <label for="comment" class="text-xs text-gray-600 ">Comment <span class="text-red-600"></span> <br></label>
                <input v-model="comment" ref="lastNameInput" id="comment" name="comment" type="text"  class="p-2 outline-none text-sm px-16 h-36" style="background-color: #ECEFF3; border: 1px solid transparent; " required>
            </div>
        </div>
    </div>
</div>
        <div class="flex items-center mb-4 mt-2">
            <input id="subscribe-checkbox" type="checkbox" value="" class="ml-14 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="subscribe-checkbox" class="flex flex-wrap ml-2 text-sm font-medium text-gray-600">Subscribe and Get latest updates and offers by Email</label>
            <button class="flex flex-wrap bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded-sm px-8 mt-1 ml-40 flex flex-row justify-start">Submit</button>
        </div>
    </div>
</div>
            <div class="w-full flex flex-wrap justify-center items-center space-x-6 bg-gray-100" style="min-height: 25rem;">
                <div class="my-2"> 
                    <div class="font-montserrat font-bold text-left text-sm text-yellow-400 mt-28">
                        <h3 class="w-24 p-2 bg-white rounded-sm shadow-lg">LOCATION</h3>
                    </div>
        <div class="px-2 w-72 bg-white rounded-sm">
            <h3 class="font-montserrat font-bold text-xl text-left text-yellow-400 p-2">Address</h3>
                <p class="text-sm text-left font-montserrat p-2">ECJ Building, Arzobispo Street, Intramuros, Manila</p>
            <h3 class="mt-2 font-montserrat font-bold text-xl text-left mt-3 text-yellow-400 p-2">Phone</h3>
                <p class="text-sm text-left font-montserrat p-2">09123456789</p> 
            <h3 class="mt-2 font-montserrat font-bold text-xl text-left mt-3 text-yellow-400 p-2">Hours</h3>
                <p class="text-sm text-left font-montserrat p-2">Mon-Fri 09:00AM-09:00PM</p>
                <p class="text-sm text-left font-montserrat p-2 mb-20">Sat-Sun 09:00AM-07:00PM</p>     
        </div>
    </div>
</div>
</template>
  
<style>

</style>
  

<script>
export default {
data() {
  return {
    firstName: '',
    lastName: '',
    comment: '',
  };
},
computed: {
    isPhoneNumberInvalid() {
    const phoneNumberLength = this.phoneNumber.toString().length;
    return phoneNumberLength !== 12;
}
}
}
</script>