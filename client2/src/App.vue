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
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
//import APIList from './components/APIList.vue';

export default ({
  name: 'App',
//  components: {
//    APIList,
//  },
//  data: () => ({
//    //
//  }),
});
</script>
