<template>
    <div>
        <Signup v-if="!shownext" v-on:setUser="setUser" v-bind:user="user" />
        <Signup2/>
    </div>
</template>
<script>
import Signup from '../Signup.vue';
import Signup from '../Signup2.vue';
export default{
    name:'SIGNUP',
    components:{
        Signup,Signup2
    }
}

</script>