<template>
  <div class="home">
    <router-link :to="{ name: 'Create' }" class="button is-success my-5 mx-5">Create</router-link>
    <FAQList />
  </div>
</template>

<script>
import FAQList from '@/components/FAQList.vue';

export default {
  name: 'Home',
  components: {
    FAQList,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
};
</script>
