<template>
    <div class="w-full">
        <div class="flex w-full m">
             <div class="flex flex-col text-center justify-start">
                  <p class="text-2xl font-semibold text-gray-800 mt-4 mb-4 mb-lg-5">Welcome back to</p>
                  <p class="text-2xl font-semibold text-gray-800 mt-4 mb-4 mb-lg-5">Pixels & Brands </p>
                  <div class="text-red-700 text-lg font-bold" v-if="error">{{ error }}</div>
                  
             </div>
        </div>
     </div>
   </template>
   <script>
import { mapActions, mapMutations } from 'vuex'
// import SignupValidation from '../Services/SignupValidation'
// import {CHANGE_LOADER, LOGIN_ACTION} from '../store/storeconstants'
export default {
  name:'HelloWorld',
  data(){
    return{
      email:'',
      password:'',
      errors:[],
      error:''
    }
  },
//   methods:{
//     ...mapMutations({
//       LoadSpinner:CHANGE_LOADER
//     }),
// ...mapActions('auth',{
//   signup: LOGIN_ACTION,
// }),
//   async Onlogin(){
//       let Validations = new SignupValidation(
//         this.email,
//         this.password,
//       )
//       this.errors=Validations.checkValidations();
//       if('email' in this.errors || 'password' in this.errors){
//         return false
//       }
//       this.error=''
//       this.LoadSpinner(true)
//       try {
//      await this.signup({email:this.email,password:this.password})
//   } catch(error){
//     this.error=error.message
//     this.LoadSpinner(false)
//   }
      
//       this.LoadSpinner(false)
//       if(this.error){
//         return false
//       }
//       else{
//       return this.$router.push('/home')
//       }
//     } 
//   }
  
}
</script>
