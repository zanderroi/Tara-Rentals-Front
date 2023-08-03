<template>
  <div id="app" class="font-montserrat">
    <div class="bg-cover bg-no-repeat w-full flex flex-col pt-4" :style="`background-image: url(${require('@/assets/bgimagehome.jpg')}); min-height: 95vh;`">
    <!-- Your content here --> 

    <div class="mt-4 w-1/2  mx-auto p-4 rounded-md" style="background-color: #232628; height: 9rem;">
      <div class="flex flex-row p-4">
        <img src="../assets/searchcaricon.png">
      <h3 class="ml-4 font-montserrat text-md text-white text-left">Looking for a Car to Rent</h3>
    
      </div>
      <div class="flex flex-row space-x-4 px-4 pt-2 font-montserrat"> 
        <select id="year" name="year" class="p-2 border-0 outline-none text-xs py-2 w-32" style="background-color: #ECEFF3;">
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

                   <input id="date" name="date" type="date" class="p-2 border-0 outline-none text-sm py-2" style="background-color: #ECEFF3;" placeholder="Date and Time">
                   <button type="button" class="border-2 border-yellow-500 rounded-sm px-8 text-white text-xs font-montserrat hover:bg-yellow-500"> Search</button>

                   
      </div>
 
    </div>
  </div>
  <div class="mt-6 p-6 " :style="`min-height: 100vh;`">
  <div class="pt-4 flex flex-row justify-center space-x-5">
    <div>
      <h1 class=" text-gray-800 font-bold text-5xl">RECENT</h1>
    </div>
    <div>
      <h1 class="font-bold text-5xl" style="color: #FFB128;">CARS AVAILABLE</h1>
    </div>
  </div>
  <p>
    <span class="highlighted-text text-2xl mt-4 font-semibold">Select the one that suits your preference</span>
  </p>
  <div class="p-4 flex flex-wrap justify-center items-center space-x-5 space-y-4 px-8">
    <div class="w-64 h-72 mt-4" style="background-color: #373C3F;">
          <div class="h-48 bg-cover border-b-4" :style="`background-image: url(${require('@/assets/carsimage/toyota3.jpg')}); border-color: #4971F1;`"></div>
        </div>
        <div class="w-64 h-72" style="background-color: #373C3F;">
          <div class="h-48 bg-cover border-b-4" :style="`background-image: url(${require('@/assets/carsimage/toyota3.jpg')}); border-color: #4971F1;`"></div>
        </div>
        <div class="w-64 h-72" style="background-color: #373C3F;">
          <div class="h-48 bg-cover border-b-4" :style="`background-image: url(${require('@/assets/carsimage/toyota3.jpg')}); border-color: #4971F1;`"></div>
        </div>
      </div>
      <div class="flex flex-wrap justify-center items-center space-x-5 space-y-4 px-8">
        <div class="w-64 h-72 mt-4" style="background-color: #373C3F;">
          <div class="h-48 bg-cover border-b-4" :style="`background-image: url(${require('@/assets/carsimage/toyota3.jpg')}); border-color: #4971F1;`"></div>
        </div>
        <div class="w-64 h-72" style="background-color: #373C3F;">
          <div class="h-48 bg-cover border-b-4" :style="`background-image: url(${require('@/assets/carsimage/toyota3.jpg')}); border-color: #4971F1;`"></div>
        </div>
        <div class="w-64 h-72" style="background-color: #373C3F;">
          <div class="h-48 bg-cover border-b-4" :style="`background-image: url(${require('@/assets/carsimage/toyota3.jpg')}); border-color: #4971F1;`"></div>
        </div>
      </div>
  
</div>
 
      

    <div class="bg-cover w-full" :style="`background-image: url(${require('@/assets/bg3.png')}); min-height: 24rem;`">
  <div class="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-32 pt-10 sm:flex">
    <div class="bg-white w-full sm:w-96 h-64 p-6 rounded-sm shadow-sm">
      <img class="mt-4 w-14 h-10" src="../assets/caricon.png">
      <h3 class="font-montserrat text-md font-bold text-left mt-2">LOOKING FOR A CAR TO RENT?</h3>
      <p class="text-left text-sm mt-4 font-montserrat">Our cars are delivered fully-registered with all requirements completed.</p>
      <button class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-sm text-white flex justify-start mt-4 text-xs font-montserrat">VIEW CARS</button>
    </div>
    <div class="bg-white w-full sm:w-96 h-64 p-6 rounded-sm shadow-sm">
      <img class="mt-4 w-14 h-10" src="../assets/caricon.png">
      <h3 class="font-montserrat text-md font-bold text-left mt-2">LOOKING FOR A TRUCKING SERVICE?</h3>
      <p class="text-left text-sm mt-4 font-montserrat">Our cars are delivered fully-registered with all requirements completed.</p>
      <button class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-sm text-white flex justify-start mt-4 text-xs font-montserrat">VIEW TRUCKS</button>
    </div>
  </div>
</div>

    <div class="w-full h-72 flex flex-row justify-center items-center space-x-6" style="background-color: #C0BDBD;">

      <div class="border-2 border-white w-72 rounded-sm flex flex-row" style="min-height: 10rem;">

        <div class="ml-6 mt-6 w-24">
          <img class="mt-4 w-8 h-8" src="../assets/icons/brands.png">
        </div>
        <div class="p-4 mt-6">
          <h3 class="font-montserrat font-bold text-xs text-left"> WIDE RANGE OF BRANDS</h3>
          <p class="text-xs text-left font-montserrat mt-2">With a robust selection of
          popular vehicles on hand, as
          well as leading vehicles from
          BMW.</p>
        </div>


      </div>
      <div class="border-2 border-white w-72 rounded-sm flex flex-row" style="min-height: 10rem;">

      <div class="ml-6 mt-6 w-32">
        <img class="mt-4 w-10 h-8" src="../assets/icons/trust.png">
      </div>
      <div class="p-4 mt-6">
        <h3 class="font-montserrat font-bold text-xs text-left"> TRUSTED BY THOUSANDS</h3>
        <p class="text-xs text-left font-montserrat mt-2">10 new offers every day. 350
        offers on site, trusted by a
        community of thousands of
        users.</p>
      </div>


      </div>
      <div class="border-2 border-white w-72 rounded-sm flex flex-row" style="min-height: 10rem;">

      <div class="ml-6 mt-6 w-32">
        <img class="mt-4 w-7 h-8" src="../assets/icons/service.png">
      </div>
      <div class="p-4 mt-6">
        <h3 class="font-montserrat font-bold text-xs text-left"> SERVICE & MAINTENANCE</h3>
        <p class="text-xs text-left font-montserrat mt-2">Our service department
        maintain your car to stay safe
        on the road for many more
        years.</p>
      </div>
      </div>

    </div>

    <div class="bg-cover w-full" :style="`background-image: url(${require('@/assets/reviewbg.png')}); min-height: 24rem;`">

      <div class="p-4 flex justify-center">
        <img class="mt-8 w-20 h-20 rounded-full border-4 border-white" src="../assets/samplecustomer.png">

      </div>
      <h3 class="font-normal font-montserrat text-white">LESLIE ALEXANDER</h3>
      <h3 class="font-normal font-montserrat text-gray-400 text-sm">Customer</h3>

      <p class="text-white font-montserrat w-1/2 mx-auto mt-6">“Awesome theme and customer service is beyond helpful! They are
      very patient and supportive to walk you through everything.”</p>

      <h1 class="font-bold text-blue-600 text-9xl font-montserrat">"</h1>


    </div>

    <div class="bg-white " style="min-height: 30rem;">
      <div class="bg-cover
       mx-auto" :style="`background-image: url(${require('@/assets/bg5.png')}); width: 60rem; min-height: 35rem;`">
      </div> 
    
    </div>

    <div class="p-4 mx-auto" style="background-color: #F2F2F2; min-height: 20rem;">
      <div class="flex flex-row items-center justify-center mt-6">
        <h1 class="font-bold text-4xl text-black">WELCOME TO</h1>
        <h1 class="font-bold text-4xl " style="color: #FFB128">&nbsp;TARA</h1>
      </div>

      <p class="text-md font-montserrat font-normal mt-8 w-1/2 mx-auto">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      <img class="mx-auto mt-4" src="../assets/icons/play.png">
    
    
    </div>

    <div class="mt-4 p-4" >

      <h1 class="text-5xl highlighted-text mt-4 mb-4"> Frequently Asked Questions</h1>

      <div class="flex flex-row justify-center p-6 mt-4 space-x-12">

        <div class=" text-left" style="width: 40%;"> 
          <div class="faq-section">
    <div v-for="(item, index) in faqs" :key="index">
        <div
          class="question flex justify-between items-center cursor-pointer p-4 border-t-2 border-gray-100"
          @click="toggleAnswer(index, 'faqs' , $event)">
          <span class="text-md font-semibold">{{ item.question }}</span>
          <i :class="['fa', isOpen.faqs === index ? 'fa-chevron-up' : 'fa-chevron-down', 'text-lg']"></i>
        </div>
        <div class="answer p-4" :class="{ 'hidden': isOpen.faqs !== index, 'block': isOpen.faqs === index }">
          <p>{{ item.answer }}</p>
        </div>
    </div>
  </div>

        </div>

        <div class=" text-left" style="width: 40%;"> 
          <div class="faq-section">
    <div v-for="(item, index) in faqs2" :key="index">
        <div
          class="question flex justify-between items-center cursor-pointer p-4 border-t-2 border-gray-100"
          @click="toggleAnswer(index, 'faqs2', $event)">
          <span class="text-md font-semibold">{{ item.question }}</span>
          <i :class="['fa', isOpen.faqs2 === index ? 'fa-chevron-up' : 'fa-chevron-down', 'text-lg']"></i>
        </div>
        <div class="answer p-4" :class="{ 'hidden': isOpen.faqs2 !== index, 'block': isOpen.faqs2 === index }">
          <p>{{ item.answer }}</p>
        </div>
    </div>
  </div>

        </div>
      
      </div>
    </div>

  </div>

  </template>
  <script>
    export default {
  data() {
    return {
      faqs: [
        {
          question: 'What do I need to book a car on Tara? ',
          answer: 'To book a car on Tara, you must create a Tara account, be 18 years old or older in the Philippines, have a valid driver’s license, and get approved to drive on Turo. When you’re booking your first trip, you’ll go through a quick approval process by entering your driver’s license and some other information. In most cases, you’ll get approved immediately, and you’ll be set for all future road trips, day trips, and business trips!',
        },
        {
          question: 'Do I need my own insurance?',
          answer: 'No, you don’t need personal insurance coverage to book a car on Tara.',
        },
        {
          question: 'Can other people drive a car that I booked?',
          answer: 'No, only the registered user can drive the car',
        },
        {
          question: 'What is the cancellation policy on Tara?',
          answer: 'You can cancel and get a full refund up to 24 hours before your trip starts. If you book a trip with less than 24 hours’ notice, you have one hour after booking to cancel free of charge. If you cancel after the free cancellation period ends, you will be charged a small cancellation fee.r',
        },
        
        // Add more FAQ items here
      ],

      faqs2: [
        {
          question: 'What happens if I have an accident?',
          answer: 'If there’s an emergency or an issue with the car, call our emergency roadside assistance provider, available 24/7. We’ll make sure you’re safe, then help you get back on your way.',
        },
        {
          question: 'Can I get my car delivered to me?',
          answer: 'No, you can only get your booked car in the location provided',
        },
        {
          question: 'What are the cleaning and safety policies on Tara?',
          answer: 'Under the enhanced cleaning policy, hosts are required to clean and disinfect their vehicles thoroughly before every trip, so you can feel safe and comfortable behind the wheel. Turo hosts have access to training materials on enhanced safety measures and cleaning practices to help prevent the spread of COVID-19 or other viruses.',
        },

        
        // Add more FAQ items here
      ],
      isOpen: {
        faqs: null,
        faqs2: null,
      },
    };
  },
  methods: {
    toggleAnswer(index, section, event) {
      if (this.isOpen[section]=== index) {
        this.isOpen[section] = null; // Close the answer if clicked again
      } else {
        this.isOpen[section] = index; // Open the clicked answer
      }
      event.stopPropagation();
    },
  },
};
  </script>

  <style scoped>
  
  /* .font-montserrat {
    font-family:  'Montserrat', sans-serif;
  } */

  h1 {
    font-family: Darker Grotesque;
    font-weight: bolder;
  }

  p {
    font-family: Montserrat;

  }

  span {
    font-family: Montserrat;
  }

  .highlighted-text {
  position: relative;
  display: inline-block;
}

.highlighted-text::before {
  content: "";
  position: absolute;
  top: 60%; /* Adjust this value to control the vertical position of the highlight */
  left: 0;
  width: 100%; /* Adjust this value to control the width of the highlight */
  height: .7em;
  background-color: rgb(255, 198, 42, .4); /* Change the background color here */
  z-index: -1;
}


  </style>
  