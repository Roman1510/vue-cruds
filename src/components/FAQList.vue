<template lang="">
  <div>
    <div class="card my-2" v-for="faq in faqs" :key="faq._id">
      <div class="card-image"></div>
      <div class="card-content">
        <div class="media">
          <div class="media-left"></div>
          <div class="media-content">
            <p class="title is-4">{{ faq.question }}</p>
          </div>
        </div>
        <div class="content">
          {{ faq.answer }}
        </div>
        <button
          @click.prevent="deleteFAQ(faq._id)"
          class="button is-danger my-2"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const faqs = ref([]);
    const API_URL = 'http://localhost:5000/api/v1/dbrequest/';

    async function deleteFAQ(id) {
      const response = await fetch(`${API_URL}${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      getFAQS();
    }

    async function getFAQS() {
      const response = await fetch(API_URL);
      const json = await response.json();
      faqs.value = json;
    }
    getFAQS();
    return {
      faqs,
      deleteFAQ,
    };
  },
};
</script>
<style lang=""></style>
