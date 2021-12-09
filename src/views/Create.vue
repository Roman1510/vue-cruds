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
    const API_URL = 'http://localhost:5000/api/v1/dbrequest/';
    async function createFAQ() {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          question: question.value,
          answer: answer.value,
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
    return {
      faq: {
        question,
        answer,
      },
      createFAQ,
    };
  },
};
</script>

<template lang="">
  <FAQForm :faq="faq" :submitForm="createFAQ" />
</template>

<style lang=""></style>
