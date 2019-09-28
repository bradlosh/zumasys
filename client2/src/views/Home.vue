<template>
  <APIList />
</template>

<script lang="ts">
import Vue from 'vue';
import APIList from '../components/APIList.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    APIList
  },
});
</script>
