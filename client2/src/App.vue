<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>API Reader</span>
        <span class="font-weight-light">from WDB.RESOURCE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        :to="{ name: 'home'}"
      >
        <span class="mr-2">API List</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view :key="$route.fullPath"></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Home from './views/Home.vue';
import APIE from './views/API.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Home,
    APIE
  },
});
</script>
