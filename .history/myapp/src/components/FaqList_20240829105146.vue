<template>
  <div class="faq-list">
    <Faq
      v-for="(faq, index) in faqs"
      :key="index"
      :question="faq.question"
      :answer="faq.answer"
      class=""
    />
  </div>
</template>

<script>
import Faq from '../components/Faq.vue';

export default {
  components: {
    Faq
  },
  data() {
    return {
      faqs: [
        { question: 'What is Vue.js?', answer: 'Vue.js is a progressive JavaScript framework for building user interfaces.' },
        { question: 'How to use Vue components?', answer: 'Vue components are reusable instances with a name and template.' },
        // Add more FAQs here

      ]
    };
  },
  mounted(){
    console.log('FAQ',this.faqs)
  }
};
</script>

<style scoped>
.faq-list {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  
}
</style>
