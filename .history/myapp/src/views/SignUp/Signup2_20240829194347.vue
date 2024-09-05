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
                    <input type="text" placeholder="Enter Comapny Name" v-model="user.company_name" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-violet focus:border-transparent" required>
                    <p v-if="error.name" class="text-red-500 text-sm mt-2">Please enter a valid Company Name</p>
                  </div>
                <div class="mt-4 lg:mt-6">
                  <label class="text-dark font-semibold">Email Address *</label>
                  <input type="email" placeholder="Enter Email Address" v-model="user.email" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-violet focus:border-transparent" required>
                  <p v-if="error.email" class="text-red-500 text-sm mt-2">Please enter a valid Email Address</p>
                </div>
                <div class="mt-4 lg:mt-6">
                    <label class="text-dark font-semibold">Phone no  *</label>
                    <input type="text" placeholder="Enter Phone Number" v-model="user.phone" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-violet focus:border-transparent" required>
                    <p v-if="error.phone" class="text-red-500 text-sm mt-2">Please enter a valid phone number</p>
                </div>
                <div class="mt-4 lg:mt-6">
                  <label class="text-dark font-semibold">Create Password *</label>
                  <div class="mt-2 bg-white w-full rounded relative">
                    <input type="password" placeholder="Enter Password" v-model="user.password" ref="password" class="mt-2 w-full bg-white py-2 px-3 rounded outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-violet focus:border-transparent" required>
                    <font-awesome-icon icon="eye" v-if="showEye" class="absolute eye text-gray-500" @click="showPassword"/>
                    <font-awesome-icon icon="eye-slash" v-else class="absolute eye text-gray-500" @click="hidePassword"/>
                  </div>
                </div>
                <p v-if="error.password" class="text-red-500 text-sm mt-2">Please enter a valid password</p>
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
  
    <form @submit.prevent="validateForm" class="w-full">
        <div class="w-full">
            <p class="mt-6 text-sm cursor-pointer" @click="$emit('hideNext')"><font-awesome-icon class="mr-1" icon="arrow-left"/> Back</p>
            <div class="lg:mt-6">
            <label class="text-army font-bold">Password</label>
            <div class="mt-2 bg-white w-full rounded relative">
                <input type="password" v-model="user.password" ref="password" class="w-full py-2 px-3 rounded outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent focus:border-0" required>
                <font-awesome-icon icon="eye" v-if="showEye" class="absolute eye text-gray-500" @click="showPassword"/>
                <font-awesome-icon icon="eye-slash" v-else class="absolute eye text-gray-500" @click="hidePassword"/>
            </div>
            <p v-if="error.password" class="text-red-500 text-sm mt-2">Your password should contain at least 8 characters (at least one uppercase, one lowercase, one special character and one number)</p>
            <!-- <p class="text-xs mt-4 font-semibold">Password must contain an uppercase letter, a number, a special character and 8 characters long</p> -->
            </div>
            <div class="mt-4 lg:mt-6">
            <label class="text-army font-bold">Confirm Password</label>
            <input type="password" v-model="confirm" ref="confirm" class="mt-2 w-full py-2 px-3 rounded outline-none border border-gray-200 focus:outline-none focus:ring-1 focus:ring-army focus:border-transparent focus:border-0" required>
            <p v-if="error.confirm" class="text-red-500 text-sm mt-2">Your passwords don't match</p>
            </div>
            <button class="mt-10 outline-none py-2 rounded w-full text-white focus:outline-none" style="background-color: #00A859">Sign up</button>
        </div>
        <router-link to="/login" class="inline-block mt-6 text-center rounded focus:outline-none bg-gray-100 text-charcoal py-2 w-full text-white">Log in if you already have an account</router-link>
    </form>
</template>
<script>
export default {
    data(){
     return {
        showEye: true,
        user:{
            password: ""
        },
        confirm: "",
        error:{
            password: false,
            confirm: false,
        }
     }   
    },
    computed:{
        password(){
            return this.user.password
        }
    },
    watch:{
        password(){
            if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]{8,}$/.test(this.user.password)){
                this.error.password = false
            }else{
                this.error.password = true
            }
        },
        confirm(){
            if(this.confirm !== this.user.password){
                this.error.confirm = true
                
            }else{
                this.error.confirm = false
            }
        }
    },
    methods:{
        showPassword(){
            this.$refs.password.type = 'text'
            this.$refs.confirm.type = 'text'
            this.showEye = false
        },
        hidePassword(){
            this.$refs.password.type = 'password'
            this.$refs.confirm.type = 'password'
            this.showEye = true
        },
        validateForm(){
            if(Object.values(this.error).includes(true)){
                return
            }else{
                // console.log(this.user)
             this.$emit('updateUser', this.user)  
            }
        }
    }
}
</script>

<style scoped>
.greent{
  color: #2CB675
}
.blue-bg{
  background-color: #E2F5EC;
}
.eye{
  top: 0;
  bottom: 0;
  margin: auto 0;
  right: 5px;
  cursor: pointer;
}
</style>
