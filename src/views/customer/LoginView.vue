<template>
    <div>
    <div class="flex flex-row justify-center" style="min-height: 100vh;">

        <div class="w-1/2 bg-cover" :style="`background-image: url(${require('@/assets/loginbg.png')});`">
        
        
        </div>

        <div class="w-1/2 text-center justify-center flex items-center h-screen" style="background-color: #C0BDBD; ">
            <div class="h-96 mx-auto text-center justify-center items-center" style="background-color: #232628; width: 500px;">
            <h1 class="text-lg font-semibold text-white p-4 mt-4">LOG IN TO YOUR ACCOUNT</h1>
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
             <router-link to="/customer/Register" class="text-xs text-gray-200 hover:underline p-4 ">New Member? Sign up
             </router-link>
                        

        </div>
        </div>


    </div>
    </div>
</template>