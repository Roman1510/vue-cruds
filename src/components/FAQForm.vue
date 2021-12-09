<script>
export default {
  props: ['submitForm', 'faq']
};
</script>

<template lang="">
  <form @submit.prevent="submitForm">
    <div class="field">
      <label class="label">question</label>
      <div class="control">
        <input
          v-model="faq.question"
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
          v-model="faq.answer"
          class="textarea"
          rows="4"
          name="answer"
          type="email"
          placeholder="e.g. because..."
        ></textarea>
      </div>
    </div>
    <div class="field">
      <button type="submit" class="button is-success">Create</button>
    </div>
  </form>
</template>

<style lang=""></style>
