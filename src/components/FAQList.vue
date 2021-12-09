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
        <button @click.prevent="deleteFAQ(faq._id)" class="button is-danger">
          Delete
        </button>
        <button
          @click.prevent="editFAQ(faq._id)"
          class="button is-warning mx-2"
        >
          Edit
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const faqs = ref([]);
    const API_URL = 'http://localhost:5000/api/v1/dbrequest/';

    function editFAQ(_id) {
      router.push(route.query.redirect || '/update/' + _id);
    }

    async function deleteFAQ(id) {
      const response = await fetch(`${API_URL}${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
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
      editFAQ,
    };
  },
};
</script>
<style lang=""></style>
