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
    const faq = ref({});
    const API_URL = 'http://localhost:5000/api/v1/dbrequest/';
    async function createFAQ() {
      const response = await fetch(API_URL, {
        method: 'POST',
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
        console.log(response)
      }
    }
    return {
      faq,
      createFAQ,
    };
  },
};
</script>

<template lang="">
  <FAQForm :faq.answer="faq" :submitForm="createFAQ" />
</template>

<style lang=""></style>
