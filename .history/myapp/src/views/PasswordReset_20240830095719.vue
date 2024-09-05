<template>
    <div class="w-full px-96 py-11">
        <div class="flex flex-col w-full  shadow-lg rounded-lg bg-white p-8">
             <div class="flex flex-col text-left justify-start text-balance">
                  <p class="text-2xl font-bold text-dark">Sign Up With</p>
                  <p class="text-2xl font-bold text-violet">Pixels & Brands👏🏽 </p>
                  
             </div>
             <form @submit.prevent="showNext" class="w-full">
                <!-- <h1 class="text-dark text-2xl font-semibold lg:text-center">Welcome back to Pixel & Brands, 👏🏽</h1>
                <p class="mt-2 text-charcoal lg:text-center">Log in to your dashboard to continue</p> -->
                <div class="mt-4 lg:mt-6">
                    <label class="text-dark font-semibold">Company Name *</label>
                    <input type="text" placeholder="Enter Comapny Name" v-model="user.company_name" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-slate focus:outline-none focus:ring-1 focus:ring-violet focus:border-transparent" required>
                    <p v-if="error.name" class="text-red-500 text-sm mt-2">Please enter a valid Company Name</p>
                  </div>
                <div class="mt-4 lg:mt-6">
                  <label class="text-dark font-semibold">Email Address *</label>
                  <input type="email" placeholder="Enter Email Address" v-model="user.email" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-slate focus:outline-none focus:ring-1 focus:ring-violet focus:border-transparent" required>
                  <p v-if="error.email" class="text-red-500 text-sm mt-2">Please enter a valid Email Address</p>
                </div>
                <div class="mt-4 lg:mt-6">
                    <label class="text-dark font-semibold">Phone no  *</label>
                    <input type="text" placeholder="Enter Phone Number" v-model="user.phone" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-slate focus:outline-none focus:ring-1 focus:ring-violet focus:border-transparent" required>
                    <p v-if="error.phone" class="text-red-500 text-sm mt-2">Please enter a valid phone number</p>
                </div>
                <div class="mt-4 lg:mt-6">
                  <label class="text-dark font-semibold">Contact Address *</label>
                  <div class="mt-2 bg-white w-full rounded relative">
                    <input type="text" placeholder="Enter Contact Address" v-model="user.address" ref="" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-slate focus:outline-none focus:ring-1 focus:ring-violet focus:border-transparent" required>
                  </div>
                </div>
                <p v-if="error.password" class="text-red-500 text-sm mt-2">Please Enter Your Contact Address</p>
                <p class="text-red-500 mt-4">{{errorMsg}}</p>
                <div class="flex justify-between items-center">
                    <div class="flex space-x-3 text-balance text-dark">
                        <input type="checkbox"  v-model="user.checkbox" ref="checkbox" class="p-3" required>
                        <h6 class="text-sm">By signing up, I agree with the Terms of Service and Privacy Policy</h6>
    
                    </div>
                    <router-link to="/forgotpassword" class="text-violet mt-8 md:mt-0 text-sm">Forgot password?</router-link>
                </div>
                
                <button class="mt-6 rounded focus:outline-none bg-dark py-2 text-center w-full text-white">Proceed</button>
               <h1 class="inline-block mt-6 text-center rounded focus:outline-none text-sm py-2 w-full text-dark">Don't have an account? <router-link to="/signup" class="text-violet">Sign In</router-link></h1> 
              </form>
        </div>
     </div>
   </template>