<template>
    <div id="app">
    <div class="flex flex-col mx-auto py-12 sm:px-6 lg:px-8" style="min-height: 100vh;">
        <div class="mt-12 p-4 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="flex flex-row font-montserrat">
                <div><h2 class="text-center text-3xl font-bold text-gray-900">REGISTER AS&nbsp;    </h2></div>
                <div><h2 class="text-center text-3xl font-bold text-gray-900" style="color: #FFB128;"> CAR OWNER</h2></div>
            </div>
        
         </div>
         <div v-if="show1" class="font-montserrat px-20 mt-5 sm:mx-auto sm:w-full  sm:max-w-1/2">
           <div class="flex justify-center items-center" style="padding-top: 2rem;">
             
       
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
                  <input v-model="firstName" id="first_name" name="first_name" type="text" class="border-0 outline-none text-sm px-6 py-2" style="background-color: #ECEFF3;"  required>
               </div>
               </div>
   
               <div> 
                   <div>
                   <div class="text-left">
                  <label for="last_name" class="text-xs text-gray-600 ">Last name <br></label>
                  <input v-model="lastName" id="last_name" name="last_name" type="text" class="p-2 border-0 outline-none text-sm px-6 py-2" style="background-color: #ECEFF3;" required>
               </div>
               </div>
   
               </div>
   
               <div> 
                   <div>
                   <div class="text-left">
                  <label for="middle_initial" class="text-xs text-gray-600 ">Middle Name <br></label>
                  <input v-model="middleInitial" id="middle_initial" name="middle_initial" type="text" class="p-2 border-0 outline-none text-sm px-6 py-2" style="background-color: #ECEFF3;" required>
               </div>
               </div>
   
               </div>
           </div>
           <div class="flex flex-row space-x-8 justify-center items-center mb-4">
   
               <div> 
                   <div class="text-left">
                   <label for="gender" class="text-xs text-gray-600"> Gender<br></label>
                   <select v-model="gender" id="gender" name="gender" class="p-2 px-20 border-0 outline-none text-sm py-2" style="background-color: #ECEFF3;">
                       <option value=""> </option>
                       <option value="customer">Male</option>
                       <option value="car_owner">Female</option>
                       <option value="car_owner">Rather not say</option>
                   </select>
   
                    </div>
               </div>
   
               <div> 
                   <div class="text-left">
                    <label for="birthday" class="text-xs text-gray-600"> Birthday<br></label>
                    <input v-model="birthday" id="birthday" name="birthday" type="date" class="px-10 border-0 outline-none text-sm py-2" style="background-color: #ECEFF3;" required>
                   </div>
               </div>
   
               <div> 
                <div class="text-left">
                    <label for="phone_number" class="text-xs text-gray-600"> Phone Number<br></label>
                    <input v-model="phoneNumber" id="phone_number" name="phone_number" type="number" class="p-2 border-0 outline-none text-sm px-6 py-2" style="background-color: #ECEFF3;" required>
                   </div>
   
               </div>
   
   
           </div>
           <div class="flex flex-row space-x-8 justify-center items-center mb-4">
               <div>
                   <div class="text-left">
                  <label for="house_no" class="text-xs text-gray-600 ">House Number<br></label>
                  <input v-model="houseNo" id="house_no" name="house_no" type="number" class="p-2 border-0 outline-none text-sm px-6 py-2" style="background-color: #ECEFF3;" required>
               </div>
               </div>
   
               <div> 
                   <div>
                   <div class="text-left">
                  <label for="subdivision" class="text-xs text-gray-600 ">Subdivision/Village <br></label>
                  <input v-model="subdivision" id="subdivision" name="subdivision" type="text" class="p-2 border-0 outline-none text-sm px-6 py-2" style="background-color: #ECEFF3;" required>
               </div>
               </div>
   
               </div>
   
               <div> 
                   <div>
                   <div class="text-left">
                  <label for="city" class="text-xs text-gray-600 ">City <br></label>
                  <input v-model="city" id="city" name="city" type="text" class="p-2 border-0 outline-none text-sm px-6 py-2" style="background-color: #ECEFF3;" required>
               </div>
               </div>
   
               </div>
           </div>
           <div class="flex flex-row space-x-8 justify-center items-center mb-4">
               <div>
                   <div class="text-left">
                  <label for="province" class="text-xs text-gray-600 ">Province<br></label>
                  <input v-model="province" id="province" name="province" type="text" class="p-2 border-0 outline-none text-sm px-6 py-2" style="background-color: #ECEFF3;" required>
               </div>
               </div>
   
               <div> 
                   <div>
                   <div class="text-left">
                  <label for="zipcode" class="text-xs text-gray-600 ">Zip Code <br></label>
                  <input v-model="zipcode" id="zipcode" name="zipcode" type="number" class="p-2 border-0 outline-none text-sm px-6 py-2" style="background-color: #ECEFF3;" required>
               </div>
               </div>
   
               </div>
           </div>
           <button
            type="button"
            @click="showNext"
            :disabled="show1 && !isShow1FormValid || show2 && !isShow2FormValid"
            class="mt-4 text-white text-xs font-montserrat block mx-auto px-10 py-2 rounded-sm"
            :class="{'bg-blue-600': isFormValid, 'bg-gray-400': !isFormValid}">
            NEXT
            </button>
        </div>
           
           
           <div v-if="show2" class="font-montserrat px-20 mt-5 sm:mx-auto sm:w-full  sm:max-w-1/2">
           
            <div class="flex justify-center items-center" style="padding-top: 2rem;">
             
       
             <div class="flex flex-row space-x-8">
              <div class="step" id="step-1">
                 <div class="border-b-4 w-52 mb-4" style="border-color: #EAEDF0;">
                    <div class="rounded-full text-left border-2 text-white font-bold px-2 text-xs flex justify-center items-center w-5 h-5" style="border-color: #FFB128; color: #FFB128;">1.</div>
                 <h3 class="mt-4 text-sm text-left font-semibold mb-1 " style="color: #232628;"> USER INFORMATION</h3>
                 <h3 class="text-xs text-left font-normal mb-2 text-gray-500 "> Add your details here</h3>
             </div>   
             </div>
 
             <div class="step" id="step-1">
                 <div class="border-b-4 w-52 mb-4" style="border-color: #FFB128;">
                    <div class="rounded-full text-left  text-white font-bold px-2 text-xs flex justify-center items-center w-5 h-5" style="background-color: #FFB128;">2.</div>
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
         <!-- first row -->
         <div class="flex flex-row space-x-8 justify-center items-center mb-4">
            <div>
                <div class="text-left">
                  <label for="drivers_license" class="text-xs text-gray-600 ">Driver's License No.<br></label>
                  <input v-model="driversLicense" id="drivers_license" name="drivers_license" type="text" class="p-2 border-0 outline-none text-sm px-6 py-2" style="background-color: #ECEFF3;" required>
               </div>
            </div>

            <div>

                <div class="text-left">
                  <label for="drivers_license_img1" class="text-xs text-gray-600 ">Upload Driver's License Front View<br></label>
                
                  <input
                    class="text-xs"
                    type="file"
                    name="drivers_license_img1"
                    accept="image/*"
                    style="background-color: #ECEFF3; width: 14rem;"
                    @change="handleFileChange('driversLicenseImg1', $event)"
                    required>
                    
               </div>

            </div>

            <div>
                <div class="text-left">
                  <label for="drivers_license_img2" class="text-xs text-gray-600 ">Upload Driver's License Back View<br></label>
               
                    <input
                    class="text-xs"
                    type="file"
                    name="drivers_license_img2"
                    accept="image/*"
                    style="background-color: #ECEFF3; width: 14rem;"
                    @change="handleFileChange('driversLicenseImg2', $event)"
                    required>
                  
               </div>
            </div>
         </div>

         <!-- second row -->
         <div class="flex flex-row space-x-8 justify-center items-center mb-4">
            
            <div>

                <div class="text-left">
                   <label for="supporting_id" class="text-xs text-gray-600"> Supporting ID<br></label>
                   <select v-model="supportingID" id="supporting_id" name="supporting_id" class="p-2 px-20 border-0 outline-none text-sm py-2" style="background-color: #ECEFF3;">
                       <option value=""> </option>
                       <option value="SSS">SSS</option>
                       <option value="National ID">National ID</option>
                       <option value="Passport">Passport</option>
                       <option value="Philhealth ID">Philhealth ID</option>
                       <option value="Tin ID">Tin ID</option>
                       <option value="Postal ID">Postal ID</option>
                   </select>
   
                    </div>
            </div>

            <div>
                <div class="text-left">
                  <label for="supporting_id_number" class="text-xs text-gray-600 ">Supporting ID No.<br></label>
                  <input v-model="supportingIDNumber" id="supporting_id_number" name="supporting_id_number" type="text" class="p-2 border-0 outline-none text-sm px-6 py-2" style="background-color: #ECEFF3;" required>
               </div>
            </div>

            <div> 
                <div class="text-left">
                    <label for="supporting_id_img" class="text-xs text-gray-600">Upload supporting ID picture here<br></label>
                    <input
                    class="text-xs"
                    type="file"
                    name="supporting_id_img"
                    accept="image/*"
                    style="background-color: #ECEFF3; width: 14rem;"
                    @change="handleFileChange('supportingIDImg', $event)"
                    required>
                </div>
                </div>

        </div>

        <!-- third row -->
        <div class="flex flex-row space-x-8 justify-center items-center mb-4">
            <div> 
                <div class="text-left">
                  <label for="contactperson1" class="text-xs text-gray-600 ">Contact Person 1<br></label>
                  <input v-model="contactPerson1" id="contactperson1" name="contactperson1" type="text" class="p-2 border-0 outline-none text-sm px-6 py-2" style="background-color: #ECEFF3;" required>
               </div>


            </div>

            <div> 
                <div class="text-left">
                  <label for="contactperson1_number" class="text-xs text-gray-600 ">Contact Person 1 Phone No.<br></label>
                  <input v-model="contactPerson1Number" id="contactperson1_number" name="contactperson1_number" type="number" class="p-2 border-0 outline-none text-sm px-6 py-2" style="background-color: #ECEFF3;" required>
               </div>


            </div>


        </div>

        <div class="flex flex-row space-x-8 justify-center items-center mb-4">
            <div> 
                <div class="text-left">
                  <label for="contactperson2" class="text-xs text-gray-600 ">Contact Person 2<br></label>
                  <input v-model="contactPerson2" id="contactperson2" name="contactperson1" type="text" class="p-2 border-0 outline-none text-sm px-6 py-2" style="background-color: #ECEFF3;" required>
               </div>


            </div>

            <div> 
                <div class="text-left">
                  <label for="contactperson2_number" class="text-xs text-gray-600 ">Contact Person 2 Phone No.<br></label>
                  <input v-model="contactPerson2Number" id="contactperson2_number" name="contactperson2_number" type="number" class="p-2 border-0 outline-none text-sm px-6 py-2" style="background-color: #ECEFF3;" required>
               </div>


            </div>



        </div>
        <div class="flex flex-row justify-center space-x-8">
            <button type="button" @click="showPrev" class="mt-4 text-white text-xs font-montserrat block  px-10 py-2 rounded-sm" style="background-color: #FFB128;"> PREVIOUS</button>
            <button
            type="button"
            @click="showNext"
            :disabled="show1 && !isShow1FormValid || show2 && !isShow2FormValid"
            class="mt-4 text-white text-xs font-montserrat block mx-auto px-10 py-2 rounded-sm"
            :class="{'bg-blue-600': isFormValid, 'bg-gray-400': !isFormValid}">
            NEXT
            </button>
        </div>
        
    </div>

           <div v-if="show3" class="font-montserrat px-20 mt-5 sm:mx-auto sm:w-full  sm:max-w-1/2">

            <div class="flex justify-center items-center" style="padding-top: 2rem;">
             
       
             <div class="flex flex-row space-x-8">
              <div class="step" id="step-1">
                 <div class="border-b-4 w-52 mb-4" style="border-color: #EAEDF0;">
                    <div class="rounded-full text-left border-2 text-white font-bold px-2 text-xs flex justify-center items-center w-5 h-5" style="border-color: #FFB128; color: #FFB128;">1.</div>
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
                 <div class="border-b-4 w-52 mb-4" style="border-color: #FFB128;">
                    <div class="rounded-full text-left  text-white font-bold px-2 text-xs flex justify-center items-center w-5 h-5" style="background-color: #FFB128;">3.</div>
                 <h3 class="mt-4 text-sm text-left font-semibold mb-1 " style="color: #232628;"> USER ACCOUNT</h3>
                 <h3 class="text-xs text-left font-normal mb-2 text-gray-500 "> Add your details here</h3>
             </div>   
             </div>
         </div>         
         </div>

         <div class="flex flex-row space-x-8 justify-center items-center mb-4"> 
            <div class="text-left">
                  <label for="email" class="text-xs text-gray-600 ">Email<br></label>
                  <input id="email" name="email" type="email" class="p-2 border-0 outline-none text-sm px-6 py-2" style="background-color: #ECEFF3;" required>
               </div>

               <div class="text-left">
                  <label for="password" class="text-xs text-gray-600 ">Password<br></label>
                  <input id="password" name="password" type="password" class="p-2 border-0 outline-none text-sm px-6 py-2" style="background-color: #ECEFF3;" required>
               </div>

               <div class="text-left">
                  <label for="passwordconfirmation" class="text-xs text-gray-600 ">Confirm Password<br></label>
                  <input id="passwordconfirmation" name="passwordconfirmation" type="password" class="p-2 border-0 outline-none text-sm px-6 py-2" style="background-color: #ECEFF3;" required>
               </div>



         </div>
         <div class="flex flex-row justify-center space-x-8">
            <button type="button" @click="showPrev" class="mt-4 text-white text-xs font-montserrat block  px-10 py-2 rounded-sm" style="background-color: #FFB128;"> PREVIOUS</button>
            <button type="submit"  class="mt-4 text-white text-xs font-montserrat block px-10 py-2 rounded-sm" style="background-color: #4971FE;"> SIGN UP</button>
        
           
        </div>


           </div>
        
        </div>
        </div>
   </template>

   <style>
        .font-montserrat {
            font-family: 'Montserrat', sans-serif;
        }

    </style>

    <script>
       export default {
  data() {
    return {
      show1: true,
      show2: false,
      show3: false,
      firstName: '',
      lastName: '',
      middleInitial: '',
      gender: '',
      birthday: '',
      phoneNumber: '',
      houseNo: '',
      subdivision: '',
      city: '',
      province: '',
      zipcode: '',
      driversLicense: '',
      driversLicenseImg1: null,
      driversLicenseImg2: null,
      supportingID: '',
      supportingIDNumber: '',
      supportingIDImg: null,
      contactPerson1: '',
      contactPerson1Number: '',
      contactPerson2: '',
      contactPerson2Number: '',

    };
  },
  created() {
    // Retrieve the images from local storage
    this.driversLicenseImg1 = JSON.parse(localStorage.getItem('driversLicenseImg1'));
    this.driversLicenseImg2 = JSON.parse(localStorage.getItem('driversLicenseImg2'));
    this.supportingIDImg = JSON.parse(localStorage.getItem('supportingIDImg'));
  },

  computed: {
    isShow1FormValid() {
      return (
        this.firstName &&
        this.lastName &&
        this.middleInitial &&
        this.gender &&
        this.birthday &&
        this.phoneNumber &&
        this.houseNo &&
        this.subdivision &&
        this.city &&
        this.province &&
        this.zipcode
      );
    },
    isShow2FormValid() {
      return (
        this.driversLicense &&
        this.driversLicenseImg1 &&
        this.driversLicenseImg2 &&
        this.supportingID &&
        this.supportingIDNumber &&
        this.supportingIDImg &&
        this.contactPerson1 &&
        this.contactPerson1Number &&
        this.contactPerson2 &&
        this.contactPerson2Number
      );
    },
    isFormValid() {
        if (this.show1) {
            return this.isShow1FormValid;
        } else if (this.show2) {
            return this.isShow2FormValid;
        } else if (this.show3) {
            return (
            this.isShow1FormValid &&
            this.isShow2FormValid &&
            this.email &&
            this.password &&
            this.passwordconfirmation
            );
        }
        return false;
        },

  },
  methods: {
    handleFileChange(propName, event) {
        const file = event.target.files[0];
        this[propName] = file;

        // Save the file in local storage
        localStorage.setItem(propName, JSON.stringify(file));

      },

    showNext() {
      if (this.show1) {
        this.show1 = false;
        this.show2 = true;
      } else if (this.show2) {
        this.show2 = false;
        this.show3 = true;
      }
    },
    showPrev() {
      if (this.show2) {
        this.driversLicenseImg1 = JSON.parse(localStorage.getItem('driversLicenseImg1'));
        this.driversLicenseImg2 = JSON.parse(localStorage.getItem('driversLicenseImg2'));
        this.supportingIDImg = JSON.parse(localStorage.getItem('supportingIDImg'));
        this.show2 = false;
        this.show1 = true;


      } else if (this.show3) {
        this.show3 = false;
        this.show2 = true;

      }
    }
  }
};
            
    </script>
