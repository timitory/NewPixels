<template>
    <div class="w-full px-96 py-11">
        <div class="flex flex-col w-full  shadow-lg rounded-lg bg-white p-8">
             <div class="flex flex-col text-left justify-start text-balance">
                  <p class="text-2xl font-bold text-dark">Sign Up With</p>
                  <p class="text-2xl font-bold text-violet">Pixels & Brands👏🏽 </p>
                  
             </div>
            
        </div>
     </div>
  
    
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
