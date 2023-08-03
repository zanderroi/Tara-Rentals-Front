<template>
    <div id="app">
        <div class="h-72 bg-cover flex flex-col justify-end" :style="`background-image: url(${require('@/assets/aboutbg.png')});`">
            <div class=" w-1/2  flex justify-start p-12 ml-20">
            <h1 class="text-white font-bold text-4xl">ABOUT US</h1>
            </div>
        </div>

        <div class="p-8 bg-gray-200">


    <div class="flex flex-row p-4 justify-center">
        <div class="bg-cover w-96 h-64" :style="`background-image: url(${require('@/assets/carsimage/about1.jpg')});`">
    
        </div>

        <div>
            <div class="flex flex-row p-4">       
                <h2 class="text-2xl font-bold " style="color: #FFB128;">WELCOME TO </h2>
                <h2 class="text-2xl font-bold " >&nbsp; TARA </h2>
                </div>
                <p class="px-4 font-bold text-xs text-left">Before we get ahead of ourselves, we want to welcome you to Loeber
                Motors. <br> While nothing can replace thing on-the-lot experience.</p>
                <p class="px-4 mt-2 text-xs text-left">"We appreciate you taking the time today to visit our web site. <br> Our goal
                is to give you an interactive tour of our new and used inventory,<br> as well
                as allow you to conveniently get a quote, schedule a service
                appointment,<br> or apply for financing. The search for a luxury car is filled
                with high expectations.<br> Undoubtedly, that has a lot to do with the
                vehicles you are considering, but at Motors,<br> we think you should also
                have pretty high expectations for your dealership."</p>
                <p class="p-4 italic text-sm">- NAME, President of Tara</p>
        </div>
    </div>

    <div class="flex flex-row p-4 justify-center">
        <div class="p-4">
            <h2 class="font-bold text-2xl mb-2 text-left border-b-2 border-gray-300">CORE VALUES</h2>
     
            <p class="text-xs text-left">We go through extensive factory training so that we may provide you with the knowledge</p>
            <p class="text-xs text-left">you need to make an educated decision in choosing the vehicle that is right for your</p>
            <p class="text-xs text-left">lifestyle.</p>
            <div class="mt-4 space-y-2">
                <p class="text-xs text-left"> ✔ Stress-free finance department.</p>
                <p class="text-xs text-left"> ✔ Robust selection of popular vehicles.</p>
                <p class="text-xs text-left"> ✔ 350 offers on site, trusted by a community.</p>
                <p class="text-xs text-left"> ✔ Maintain your car to stay safe on the road</p>
                <p class="text-xs text-left"> ✔ We know how to handle a wide range of car services.</p>
            </div>

    

        </div>

        <div class="bg-cover w-96 h-64" :style="`background-image: url(${require('@/assets/carsimage/about2.jpg')});`">
    
        </div>
    </div>

</div>

<div class="w-full p-4" style="background-color: #232628; min-height: 20rem;">
    <h2 class="text-white font-bold text-3xl mt-4"> MEDIA GALLERY</h2>
    <img class="mx-auto mt-2" src="../assets/icons/separator.png">

    <AutoplayCarousel :images="carouselImages" />

</div>

    </div>
</template>


<script>
import AutoplayCarousel from '@/components/AutoplayCarousel.vue';

export default {
  components: {
    AutoplayCarousel,
  },
  data() {
    return {
      carouselImages: [
        { url: '/assets/samplecar.png' },
        { url: '/assets/sample2.png' },
        { url: '/assets/sample8.png' },
        { url: '/assets/sample3.png' },
        { url: '/assets/sample4.png' },
        { url: '/assets/sample5.png' },
        { url: '/assets/sample6.png' },
        { url: '/assets/sample7.png' },
        // Add more images here as needed
      ],
    };
  },
};
</script>