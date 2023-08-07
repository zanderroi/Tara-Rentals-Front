<template>
    <div id="app">
    <div class="flex flex-col mx-auto py-12 sm:px-6 lg:px-8" style="min-height: 100vh;">
        <div class=" p-2 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="flex flex-row font-montserrat">
                <div><h2 class="text-center text-3xl font-bold text-gray-900">REGISTER AS&nbsp;    </h2></div>
                <div><h2 class="text-center text-3xl font-bold text-gray-900" style="color: #FFB128;"> TRUCKER</h2></div>
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
              <label for="first_name" class="text-xs text-gray-600">First name <span class="text-red-600">*</span> <br></label>
              <input v-model="firstName" ref="firstNameInput" id="first_name" name="first_name" type="text"  class=" outline-none text-sm px-6 py-2" style="background-color: #ECEFF3; border: 1px solid transparent;" required>
            </div>
          </div>

   
               <div> 
                   <div>
                   <div class="text-left">
                  <label for="last_name" class="text-xs text-gray-600 ">Last name <span class="text-red-600">*</span> <br></label>
                  <input v-model="lastName" ref="lastNameInput" id="last_name" name="last_name" type="text"  class="p-2  outline-none text-sm px-6 py-2" style="background-color: #ECEFF3; border: 1px solid transparent; " required>
               </div>
               </div>
   
               </div>
   
               <div> 
                   <div>
                   <div class="text-left">
                  <label for="middle_initial" class="text-xs text-gray-600 ">Middle Initial <br></label>
                  <input v-model="middleInitial" id="middle_initial" name="middle_initial" type="text" class=" p-2  outline-none text-sm px-6 py-2" style="background-color: #ECEFF3; border: 1px solid transparent; ">
               </div>
               </div>
   
               </div>
           </div>
           <div class="flex flex-row space-x-8 justify-center items-center mb-4">
            <div> 
                   <div class="text-left">
                   <label for="ext_name" class="text-xs text-gray-600"> Extension Name<br></label>
                   <select v-model="ext_name" id="ext_name" name="ext_name" class=" p-2 w-52 outline-none text-sm py-2" style="background-color: #ECEFF3; border: 1px solid transparent; ">
                      <option value="" disabled selected>if applicable</option>
                      <option value=" "> </option>
                       <option value="Jr">Jr.</option>
                       <option value="Sr">Sr.</option>
                       <option value="III">III</option>
                       <option value="IV">IV</option>
                   </select>
   
                    </div>
               </div>
            
   
               <div> 
                   <div class="text-left">
                   <label for="gender" class="text-xs text-gray-600"> Gender <span class="text-red-600">*</span><br></label>
                   <select v-model="gender" id="gender" ref="genderInput" name="gender" class=" p-2 px-20  outline-none text-sm py-2" style="background-color: #ECEFF3; border: 1px solid transparent; " required>
                       <option value=""> </option>
                       <option value="customer">Male</option>
                       <option value="car_owner">Female</option>
                       <option value="car_owner">Rather not say</option>
                   </select>
   
                    </div>
               </div>
   
               <div> 
                   <div class="text-left">
                    <label for="birthday" class="text-xs text-gray-600"> Birthday <span class="text-red-600">*</span><br></label>
                    <input v-model="birthday" id="birthday" ref="birthdayInput" name="birthday" type="date" class="px-10  outline-none text-sm py-2" style="background-color: #ECEFF3; border: 1px solid transparent; "   required>
                   </div>
               </div>
   

   
   
           </div>
           <div class="flex flex-row space-x-8 justify-center items-center mb-4">
            <div> 
                <div class="text-left">
                    <label for="phone_number" class="text-xs text-gray-600"> Phone Number <span class="text-red-600">*</span><br></label>
                    <input v-model="phoneNumber" ref="phoneNumberInput" id="phone_number" name="phone_number" type="number" class="p-2 outline-none text-sm px-6 py-2" style="background-color: #ECEFF3; border: 1px solid transparent;" maxlength="12" required>

              </div>
   
               </div>
               <div>
                   <div class="text-left">
                  <label for="house_no" class="text-xs text-gray-600 ">House Number <span class="text-red-600">*</span><br></label>
                  <input v-model="houseNo" id="house_no" ref="houseNoInput" name="house_no" type="number" class="p-2  outline-none text-sm px-6 py-2" style="background-color: #ECEFF3; border: 1px solid transparent;" required>
               </div>
               </div>
   
               <div> 
                   <div>
                   <div class="text-left">
                  <label for="subdivision" class="text-xs text-gray-600 ">Subdivision/Village <span class="text-red-600">*</span><br></label>
                  <input v-model="subdivision" ref="subdivisionInput" id="subdivision" name="subdivision" type="text" class="p-2  outline-none text-sm px-6 py-2" style="background-color: #ECEFF3; border: 1px solid transparent;" required>
               </div>
               </div>
   
               </div>
   
         
           </div>
           <div class="flex flex-row space-x-8 justify-center items-center mb-4">
            <div> 
                   <div>
                   <div class="text-left">
                  <label for="city" class="text-xs text-gray-600 ">City <span class="text-red-600">*</span><br></label>
                  <input v-model="city" ref="cityInput" id="city" name="city" type="text" class="p-2  outline-none text-sm px-6 py-2" style="background-color: #ECEFF3;border: 1px solid transparent;" required>
               </div>
               </div>
   
               </div>
               <div>
                   <div class="text-left">
                  <label for="province" class="text-xs text-gray-600 ">Province <span class="text-red-600">*</span><br></label>
                  <input v-model="province" ref="provinceInput" id="province" name="province" type="text" class="p-2  outline-none text-sm px-6 py-2" style="background-color: #ECEFF3; border: 1px solid transparent;" required>
               </div>
               </div>
   
               <div> 
                   <div>
                   <div class="text-left">
                  <label for="zipcode" class="text-xs text-gray-600 ">Zip Code <span class="text-red-600">*</span><br></label>
                  <input v-model="zipcode" ref="zipcodeInput" id="zipcode" name="zipcode" type="number" class="p-2 outline-none text-sm px-6 py-2" style="background-color: #ECEFF3; border: 1px solid transparent;" required>
               </div>
               </div>
   
               </div>
           </div>

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
                  <input v-model="driversLicense" ref="driversLicenseInput" id="drivers_license" name="drivers_license" type="text" class="p-2 outline-none text-sm px-6 py-2" style="background-color: #ECEFF3; border-color: #ECEFF3;" required>
               </div>
            </div>

            <div>
      <div class="text-left">
        <label for="drivers_license_img1" class="text-xs text-gray-600">Upload Driver's License Front View<br></label>
        <input
          class="text-xs"
          type="file"
          name="drivers_license_img1"

          style="background-color: #ECEFF3; width: 14rem;"
          @change="handleDriversLicenseImg1Change($event)"
          ref="driversLicenseImg1Input"
          :required="show2"
        />

      </div>
    </div>

    <div>
      <div class="text-left">
        <label for="drivers_license_img2" class="text-xs text-gray-600">Upload Driver's License Back View<br></label>
        <input
          class="text-xs"
          type="file"
          name="drivers_license_img2"

          style="background-color: #ECEFF3; width: 14rem;"
          @change="handleDriversLicenseImg2Change($event)"
          ref="driversLicenseImg2Input"
          :required="show2"
        />

      </div>
    </div>
         </div>

         <!-- second row -->
         <div class="flex flex-row space-x-8 justify-center items-center mb-4">
            
            <div>

              <div class="text-left">
                <select v-model="supportingID" ref="supportingIDInput" id="supporting_id" name="supporting_id" class="focus:border-transparent  outline-none text-xs custom-select" style="border-color: #ECEFF3; border: 1px solid transparent;" required>
                <option value="" disabled selected>Select supporting ID</option>
                <option value="SSS" class="text-xs">SSS</option>
                <option value="National ID" class="text-xs">National ID</option>
                <option value="Passport" class="text-xs">Passport</option>
                <option value="Philhealth ID" class="text-xs">Philhealth ID</option>
                <option value="Tin ID" class="text-xs">Tin ID</option>
                <option value="Postal ID" class="text-xs">Postal ID</option>
              </select>

                <br>
                <input v-model="supportingIDNumber" ref="supportingIDNumberInput" id="supporting_id_number" name="supporting_id_number" type="text" class="p-1  outline-none text-xs px-10 py-1 h-10" style="background-color: #ECEFF3; border-color: #ECEFF3;" placeholder="Supporting ID Number" required>
              </div>

            </div>

            <div>
      <div class="text-left">
        <label for="supporting_id_img1" class="text-xs text-gray-600 mb-2">Supporting ID front view<br></label>
        <input
          class="text-xs mt-2"
          type="file"
          name="supporting_id_img1"

          style="background-color: #ECEFF3; width: 14rem;"
          @change="handleSupportingIDImg1Change($event)"
          ref="supportingIDImg1Input"
          :required="show2"
        />

      </div>
    </div>
    <div>
      <div class="text-left">
        <label for="supporting_id_img2" class="text-xs text-gray-600 mb-2">Supporting ID back view<br></label>
        <input
          class="text-xs mt-2"
          type="file"
          name="supporting_id_img2"
          style="background-color: #ECEFF3; width: 14rem;"
          @change="handleSupportingIDImg2Change($event)"
          ref="supportingIDImg2Input"
          :required="show2"
        />

      </div>
    </div>

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
                  <input id="email" name="email" type="email" class="p-2  outline-none text-sm px-6 py-2" style="background-color: #ECEFF3; border-color: #ECEFF3;" required>
               </div>

               <div class="text-left">
                  <label for="password" class="text-xs text-gray-600 ">Password<br></label>
                  <input id="password" name="password" type="password" class="p-2  outline-none text-sm px-6 py-2" style="background-color: #ECEFF3; border-color: #ECEFF3;" required>
               </div>

               <div class="text-left">
                  <label for="passwordconfirmation" class="text-xs text-gray-600 ">Confirm Password<br></label>
                  <input id="passwordconfirmation" name="passwordconfirmation" type="password" class="p-2  outline-none text-sm px-6 py-2" style="background-color: #ECEFF3; border-color: #ECEFF3;" required>
               </div>



         </div>
         <!-- <div class="flex flex-row justify-center space-x-8">
            <button type="button" @click="showPrev" class="mt-4 text-white text-xs font-montserrat block  px-10 py-2 rounded-sm" style="background-color: #FFB128;"> PREVIOUS</button>
            <button type="submit"  class="mt-4 text-white text-xs font-montserrat block px-10 py-2 rounded-sm" style="background-color: #4971FE;"> SIGN UP</button>
        
           
        </div> -->


           </div>
           <div class="w-1/2 mx-auto">
            <p class="text-xs text-gray-500 text-left font-montserrat"><span class="text-red-600">*</span>&nbsp; fields are required</p>
           </div>
          
           <div class="flex flex-row justify-center space-x-8">
            <button
              type="button"
              @click="showPrev"
              v-show="show2 || show3"
              class="mt-4 text-white text-xs font-montserrat block px-10 py-2 rounded-sm"
              style="background-color: #FFB128;"
            >
              PREVIOUS
            </button>
            <button
            type="button"
            @click="showNext"
            class="mt-4 text-white text-xs font-montserrat block mx-auto px-10 py-2 rounded-sm bg-blue-600"
            
          >
            NEXT
          </button>

          </div>
        </div>
        </div>
   </template>

   <style>
        .font-montserrat {
            font-family: 'Montserrat', sans-serif;
        }
        .custom-select:focus {
          outline: none;
          box-shadow: none;
        }
        .border-red-600 {
          border-color: #EF4444 !important; 
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
      phoneNumber: '639',
      houseNo: '',
      subdivision: '',
      city: '',
      province: '',
      zipcode: '',
      driversLicense: '',
      supportingID: '',
      supportingIDNumber: '',
      isNextClicked: false,
      supportingIDImg1File: null,
      supportingIDImg2File: null,
      driversLicenseImg1File: null,
      driversLicenseImg2File: null,
      tempSupportingIDImg1File: null,
      tempSupportingIDImg2File: null,
      tempDriversLicenseImg1File: null,
      tempDriversLicenseImg2File: null,
    };
  },
  computed: {

    isPhoneNumberInvalid() {
      const phoneNumberLength = this.phoneNumber.toString().length;
      return phoneNumberLength !== 12;
    },
    isShow1FormValid() {
      return (
        this.firstName.trim() !== '' &&
        this.firstName.length <= 20 &&
        this.lastName.trim() !== '' &&
        this.lastName.length <= 20 &&
        this.middleInitial.trim() !== '' &&
        this.middleInitial.length <= 2 &&
        this.gender.trim() !== '' &&
        this.birthday.trim() !== '' &&
        this.isEighteenYearsOld(this.birthday.trim()) &&
        !this.isPhoneNumberInvalid &&
        this.houseNo !== '' &&
        !isNaN(Number(this.houseNo)) &&
        Number(this.houseNo) >= 0 &&
        this.subdivision.trim() !== '' &&
        this.city.trim() !== '' &&
        this.province.trim() !== '' &&
        this.zipcode !== ''
      );
    },
    isShow2FormValid() {
      const hasDriversLicenseFiles =
      this.driversLicenseImg1File !== null && this.driversLicenseImg2File !== null;
      const hasSupportingIDFiles =
      this.supportingIDImg1File !== null && this.supportingIDImg2File !== null;
      return (
        this.driversLicense.trim() !== '' &&
        this.supportingID.trim() !== '' &&
        this.supportingIDNumber.trim() !== '' &&
        hasDriversLicenseFiles &&
        hasSupportingIDFiles
      );
    },
    isFormValid() {
      return this.isShow1FormValid && this.isShow2FormValid && this.show3;
    },
  },
  methods: {
    handleSupportingIDImg1Change(event) {
      this.supportingIDImg1File = event.target.files[0];
    },
    handleSupportingIDImg2Change(event) {
      this.supportingIDImg2File = event.target.files[0];
    },
    handleDriversLicenseImg1Change(event) {
      this.driversLicenseImg1File = event.target.files[0];
    },
    handleDriversLicenseImg2Change(event) {
      this.driversLicenseImg2File = event.target.files[0];
    },

    showNext() {
      this.isNextClicked = true;
      const currentStep = this.getCurrentStep();
      let isValid = true;

      if (currentStep === 1) {
        isValid = this.isShow1FormValid;
        if (!isValid) {
          // Validation code
          if (this.firstName.trim() === '') {
        this.$nextTick(() => {
          this.$refs.firstNameInput.classList.add('border-red-600');
        });
      } else {
        this.$refs.firstNameInput.classList.remove('border-red-600');
      }
      if (this.lastName.trim() === '') {
        this.$nextTick(() => {
          this.$refs.lastNameInput.classList.add('border-red-600');
        });
      } else {
        this.$refs.lastNameInput.classList.remove('border-red-600');
      }
      if (this.gender.trim() === '') {
        this.$nextTick(() => {
          this.$refs.genderInput.classList.add('border-red-600');
        });
      } else {
        this.$refs.genderInput.classList.remove('border-red-600');
      }
      if (this.birthday.trim() === '') {
        this.$nextTick(() => {
          this.$refs.birthdayInput.classList.add('border-red-600');
        });
      } else {
        this.$refs.birthdayInput.classList.remove('border-red-600');
      }
      if (!this.isEighteenYearsOld(this.birthday.trim())) {
        alert("You must be 18 years old or above to register.");
        this.$nextTick(() => {
          this.$refs.birthdayInput.classList.add('border-red-600');
        });
      } else {
        this.$refs.birthdayInput.classList.remove('border-red-600');
      }

      if (this.subdivision.trim() === '') {
        this.$nextTick(() => {
          this.$refs.subdivisionInput.classList.add('border-red-600');
        });
      } else {
        this.$refs.subdivisionInput.classList.remove('border-red-600');
      }
      if (this.city.trim() === '') {
        this.$nextTick(() => {
          this.$refs.cityInput.classList.add('border-red-600');
        });
      } else {
        this.$refs.cityInput.classList.remove('border-red-600');
      }
      if (this.province.trim() === '') {
        this.$nextTick(() => {
          this.$refs.provinceInput.classList.add('border-red-600');
        });
      } else {
        this.$refs.provinceInput.classList.remove('border-red-600');
      }
      if (this.houseNo === '' || isNaN(Number(this.houseNo)) || Number(this.houseNo) < 0) {
        this.$nextTick(() => {
          this.$refs.houseNoInput.classList.add('border-red-600');
        });
      } else {
        this.$refs.houseNoInput.classList.remove('border-red-600');
      }
      if (this.houseNo < 0) {
      this.$nextTick(() => {
        this.$refs.houseNoInput.classList.add('border-red-600');
      });
    } else {
      this.$refs.houseNoInput.classList.remove('border-red-600');
    }


      if (this.zipcode === '') {
        this.$nextTick(() => {
          this.$refs.zipcodeInput.classList.add('border-red-600');
        });
      } else {
        this.$refs.zipcodeInput.classList.remove('border-red-600');
      }
      if (this.phoneNumber.length !== 12) {
        this.$nextTick(() => {
          this.$refs.phoneNumberInput.classList.add('border-red-600');
        });
      } else {
        this.$refs.phoneNumberInput.classList.remove('border-red-600');
      }
     
    }
        
      } else if (currentStep === 2) {
        isValid = this.isShow2FormValid;
           
          const driversLicenseImg1Input = this.$refs.driversLicenseImg1Input;
          const driversLicenseImg2Input = this.$refs.driversLicenseImg2Input;
          const supportingIDImg1Input = this.$refs.supportingIDImg1Input;
          const supportingIDImg2Input = this.$refs.supportingIDImg2Input;

          // Update the temporary properties with the selected files
          this.tempDriversLicenseImg1File = driversLicenseImg1Input.files[0];
          this.tempDriversLicenseImg2File = driversLicenseImg2Input.files[0];
          this.tempSupportingIDImg1File = supportingIDImg1Input.files[0];
          this.tempSupportingIDImg2File = supportingIDImg2Input.files[0];
     

        if (!isValid) {
          // Validation code
          if (this.driversLicense.trim() === '') {
          this.$nextTick(() => {
            this.$refs.driversLicenseInput.classList.add('border-red-600');
          });
        } else {
          this.$refs.driversLicenseInput.classList.remove('border-red-600');
        }
        if (this.supportingID.trim() === '') {
          this.$nextTick(() => {
            this.$refs.supportingIDInput.classList.add('border-red-600');
          });
        } else {
          this.$refs.supportingIDInput.classList.remove('border-red-600');
        }
        if (this.supportingIDNumber.trim() === '') {
          this.$nextTick(() => {
            this.$refs.supportingIDNumberInput.classList.add('border-red-600');
          });
        } else {
          this.$refs.supportingIDNumberInput.classList.remove('border-red-600');
        }

        }


      }

      if (isValid) {

        if (this.show1) {
          this.show1 = false;
          this.show2 = true;
        } else if (this.show2) {
          this.show2 = false;
          this.show3 = true;
        }
      }

    },
    showPrev() {
      if (this.show2) {
        // Store the selected files temporarily
        this.tempDriversLicenseImg1File = this.$refs.driversLicenseImg1Input.files[0];
        this.tempDriversLicenseImg2File = this.$refs.driversLicenseImg2Input.files[0];
        this.tempSupportingIDImg1File = this.$refs.supportingIDImg1Input.files[0];
        this.tempSupportingIDImg2File = this.$refs.supportingIDImg2Input.files[0];

        this.show2 = false;
        this.show1 = true;
      } else if (this.show3) {
        // Assign the temporary files back to the original file properties
        this.driversLicenseImg1File = this.tempDriversLicenseImg1File;
        this.driversLicenseImg2File = this.tempDriversLicenseImg2File;
        this.supportingIDImg1File = this.tempSupportingIDImg1File;
        this.supportingIDImg2File = this.tempSupportingIDImg2File;

        this.tempDriversLicenseImg1File = null;
        this.tempDriversLicenseImg2File = null;
        this.tempSupportingIDImg1File = null;
        this.tempSupportingIDImg2File = null;


        this.show3 = false;
        this.show2 = true;
      }
    },
    validateStep(step) {
      if (step === 1) {
        return this.isShow1FormValid;
      } else if (step === 2) {
        return this.isShow2FormValid;
      } else if (step === 3) {
        return this.isFormValid;
      }
      return false; // Invalid step
    },
    getCurrentStep() {
      if (this.show1) {
        return 1;
      } else if (this.show2) {
        return 2;
      } else if (this.show3) {
        return 3;
      }
      return 1;
    },
    isEighteenYearsOld(dateString) {
      const today = new Date();
      const birthDate = new Date(dateString);
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        return age - 1 >= 18;
      }
      return age >= 18;
    },

  },
};
</script>
