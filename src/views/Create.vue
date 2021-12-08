<script>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const question = ref('');
    const answer = ref('');
    const API_URL = 'http://localhost:5000/api/v1/dbrequest/';
    async function createFAQ() {
      console.log('the functino is called');
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
      console.log(json, 'this is the answer');
      const redirectPath = route.query.redirect || '/';
      if (response.ok) {
        router.push(redirectPath);
      } else {
        // show the error
      }
    }
    return {
      question,
      answer,
      createFAQ,
    };
  },
};
</script>

<template lang="">
  <form>
    <div class="field">
      <label class="label">question</label>
      <div class="control">
        <input
          v-model="question"
          class="input"
          name="question"
          type="text"
          placeholder="e.g how to blah blah"
        />
      </div>
    </div>
    <div class="field">
      <label class="label">Answer</label>
      <div class="control">
        <textarea
          v-model="answer"
          class="textarea"
          rows="4"
          name="answer"
          type="email"
          placeholder="e.g. because..."
        ></textarea>
      </div>
    </div>
    <div class="field">
      <button type="submit" @click.prevent="createFAQ" class="button is-success">Create</button>
    </div>
  </form>
</template>

<style lang=""></style>
