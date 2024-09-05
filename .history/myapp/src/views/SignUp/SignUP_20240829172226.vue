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
    }
}

</script>