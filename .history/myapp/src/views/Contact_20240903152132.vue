<template>
    <div>
        <div class="w-full flex justify-between items-center bg-dark py-11 px-32 space-x-5">
            <div class="flex justify-center bg-dark">
                <h1 class="text-white text-3xl font-extrabold leading-4">Contact  <br><br> Questions</h1>
            </div>
            <div>
                <h1 class="text-white font-thin leading-2 w-96">Greetings from our FAQ section! We've put together ans</h1>
            </div>
        </div>
        <ContactForm/>
    </div>
   
</template>
<script>
import GetInTouch from './GetInTouch.vue';
import ContactForm from './ContactForm.vue'
export default{
    components:{
        GetInTouch,ContactForm
    }
}
</script>