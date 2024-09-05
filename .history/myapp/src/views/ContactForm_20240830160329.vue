<template>
    <div class="flex">
        <div class="flex justify-center items-center">
            <div class="flex flex-row justify-center items-center py-28 px-80">
                <form @submit.prevent="validateForm" class="flex justify-center items-center space-x-11">
                    <!-- <h1 class="text-dark text-2xl font-semibold lg:text-center">Welcome back to Pixel & Brands, 👏🏽</h1>
                    <p class="mt-2 text-charcoal lg:text-center">Log in to your dashboard to continue</p> -->
                    <div>

                    </div>
                    
                    
                    <!-- <p class="text-red-500 mt-4">{{errorMsg}}</p> -->
                    <!-- <div class="flex justify-between items-center">
                        <div class="flex space-x-3 text-balance text-dark">
                            <input type="checkbox"  v-model="user.checkbox" ref="checkbox" class="p-3" required>
                            <h1>Remember Password</h1>
        
                        </div>
                        <router-link to="/forgotpassword" class="text-violet mt-8 md:mt-0 text-sm">Forgot password?</router-link>
                    </div> -->
                    
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