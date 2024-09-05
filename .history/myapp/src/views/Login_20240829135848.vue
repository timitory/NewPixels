<template>
    <div class="w-full px-96 py-11">
        <div class="flex w-full  shadow-lg rounded-lg bg-white p-8">
             <div class="flex flex-col text-center justify-start text-balance">
                  <p class="text-lg font-semibold text-dark">Welcome back to</p>
                  <p class="text-lg font-semibold text-violet">Pixels & Brands </p>
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
