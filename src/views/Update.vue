<script>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import FAQForm from '../components/FAQForm.vue';

export default {
  components: {
    FAQForm,
  },

  setup() {
    const route = useRoute();
    const router = useRouter();
    const question = ref('');
    const answer = ref('');
    const faq = ref({
      question: '',
      answer: '',
      _id:''
    });
    const API_URL = 'http://localhost:5000/api/v1/dbrequest/';
    async function updateFAQ() {
      const {id} = route.params
      const response = await fetch(API_URL+'/'+id, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          question: faq.value.question,
          answer: faq.value.answer,
        }),
      });
      const json = await response.json();
      const redirectPath = route.query.redirect || '/';
      if (response.ok) {
        router.push(redirectPath);
      } else {
        console.log(response);
      }
    }
    async function getCurrentFAQ(){
      const {id} = route.params
      const response = await fetch(API_URL+'/'+id)
      const json = await response.json()
      faq.value = json
    }
    getCurrentFAQ()
    return {
      faq,
      updateFAQ,
    };
  },
};
</script>

<template lang="">
  <FAQForm :faq="faq" :submitForm="updateFAQ" />
</template>

<style lang=""></style>
