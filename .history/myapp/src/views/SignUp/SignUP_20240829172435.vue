<template>
    <div>
        <Signup v-if="!shownext" v-on:setUser="setUser" v-bind:user="user" />
        <Signup2 v-else v-on:hideNext="shownext = false"  v-on:updateUser="updateUser"/>
    </div>
</template>
<script>
import Signup from '../Signup.vue';
import Signup from '../Signup2.vue';
export default{
    name:'SIGNUP',
    components:{
        Signup,Signup2
    },
    data(){
    return {
      shownext: false,
      user: {
        company_name: "",
        // lastname: "",
        email: "",
        phone: "",
        password:''
        // address: "",
        // customer_type: 1
      },
    }
  },
  computed: {
    
  },
  watch:{
    
  },
  methods:{
    setUser(obj){
      this.user = obj
      this.shownext = true
    },
    updateUser(obj){
      this.user = {...this.user, ...obj}
      this.register()
    },
    register(){
        const {firstname, lastname, email, phone, password, address, customer_type} = this.user
        this.$store.dispatch('registerUser', {firstname, lastname, email, phone, password, address, customer_type})
        .then((res)=>{
            this.$router.push(`/verifyotp?email=${this.user.email}`)
            this.$store.commit('setSuccess', {status: true, msg: res.data.message})
        })
        .catch((err)=>{
          if(err.data.message == 'Email exists already'){
            this.$router.push('/login')
            this.$store.commit('setError', {status: true, msg: 'That email is registered on our platform already'})
          }else{
            this.$store.commit('setError', {status: true, msg: err.data.message})
          }
        })
    },
    showPassword(){
      this.$refs.password.type = 'text'
      this.$refs.confirm.type = 'text'
      this.showEye = false
    },
    hidePassword(){
      this.$refs.password.type = 'password'
      this.$refs.confirm.type = 'password'
      this.showEye = true
    }
  },
  created(){

    if(this.$store.state.homeCollapse == true){
      this.$store.commit('setHomeCollapse', false)
    }
  }
}

</script>