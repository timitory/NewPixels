<template>
    <div class="flex">
        <div class="flex justify-center items-center">
            <div class="flex flex-row justify-center items-center py-28 px-80">
                <form @submit.prevent="validateForm" class="flex flex-col justify-center items-center space-y-7">
                    <!-- <h1 class="text-dark text-2xl font-semibold lg:text-center">Welcome back to Pixel & Brands, 👏🏽</h1>
                    <p class="mt-2 text-charcoal lg:text-center">Log in to your dashboard to continue</p> -->
                    <div class="flex flex-row justify-center items-center space-x-6">
                        <div class="mt-4 lg:mt-6">
                            <label class="text-dark font-semibold">First Name *</label>
                            <input type="email" placeholder="Enter Email Address" v-model="user.email" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-slate focus:outline-none focus:ring-1 focus:ring-violet focus:border-transparent focus:border-0" required>
                            <p v-if="error.email" class="text-danger text-sm mt-2">Please enter a valid Email Address</p>
                          </div>
                          <div class="mt-4 lg:mt-6">
                              <label class="text-dark font-semibold">Last Name *</label>
                              <input type="email" placeholder="Enter Email Address" v-model="user.email" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-slate focus:outline-none focus:ring-1 focus:ring-violet focus:border-transparent focus:border-0" required>
                              <p v-if="error.email" class="text-danger text-sm mt-2">Please enter a valid Email Address</p>
                            </div>
                    </div>
                    <div class="flex flex-row justify-center items-center space-x-6">
                        <div class="mt-4">
                            <label class="text-dark font-semibold">First Name *</label>
                            <input type="email" placeholder="Enter Email Address" v-model="user.email" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-slate focus:outline-none focus:ring-1 focus:ring-violet focus:border-transparent focus:border-0" required>
                            <p v-if="error.email" class="text-danger text-sm mt-2">Please enter a valid Email Address</p>
                          </div>
                          <div class="mt-4">
                              <label class="text-dark font-semibold">Last Name *</label>
                              <input type="email" placeholder="Enter Email Address" v-model="user.email" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-slate focus:outline-none focus:ring-1 focus:ring-violet focus:border-transparent focus:border-0" required>
                              <p v-if="error.email" class="text-danger text-sm mt-2">Please enter a valid Email Address</p>
                            </div>
                    </div>
                    <div class="w-full">
                        <div class="mt-4">
                            <label class="text-dark font-semibold">Last Name *</label>
                            <input type="email" placeholder="Enter Email Address" v-model="user.email" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-slate focus:outline-none focus:ring-1 focus:ring-violet focus:border-transparent focus:border-0" required>
                            <p v-if="error.email" class="text-danger text-sm mt-2">Please enter a valid Email Address</p>
                          </div>
                    </div>
                    
                    
                    <!-- <p class="text-red-500 mt-4">{{errorMsg}}</p> -->
                    <div class="flex justify-between items-center">
                        <div class="flex space-x-3 text-balance text-dark">
                            <div>
                                <input t ype="checkbox"  v-model="user.checkbox" ref="checkbox" class="p-3" required>
                                <label class="text-dark font-semibold">Last Name *</label>
                            </div>
                            
                            
        
                        </div>
                        <router-link to="/forgotpassword" class="text-violet mt-8 md:mt-0 text-sm">Forgot password?</router-link>
                    </div>
                    
                    <!-- <button class="mt-6 rounded focus:outline-none bg-dark py-2 text-center w-full text-white">Proceed</button>
                   <h1 class="inline-block mt-6 text-center rounded focus:outline-none text-sm py-2 w-full text-dark">Don't have an account? <router-link to="/signup" class="text-violet">Sign Up</router-link></h1>  -->
                  </form>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return {
      showEye: true,
      user: {
        email: "",
        password: "",
      },
      error:{
            password: false,
            email: false,
        }
    }
}
}
</script>