<template>
  <v-container>
                <v-card
                    class="mx-auto"
                    max-width="400"
                    tile
                >
                    <v-list-item 
                        v-for="api in apis"
                        v-bind:key="api.id"
                    >
                        <v-list-item-content>
                            <v-list-item-title>
                                {{api.id}}
                            </v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-icon>
                            <v-btn
                                fab
                                dark
                                small
                                color="green"
                                router
                                :to="{ name: 'api', params: {id: api.id}}"
                            >
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </v-list-item-icon>
                        <v-list-item-icon>
                            <v-btn
                                fab
                                dark
                                small
                                color="red"
                                @click="dAPI(api.id)"
                            >
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </v-list-item-icon>
                    </v-list-item>
                    <v-btn
                        fab
                        dark
                        small
                        color="indigo"
                        router
                        :to="{ name: 'napi'}"
                    >
                        <v-icon>mdi-plus</v-icon>
                    </v-btn>
                </v-card>

  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

const baseUrl = "http://127.0.0.1:20002/api/crudrtne/";

export default Vue.extend({
    name: 'APIList',
    data() {
      return {
        apis: [],
        api: []
      }
    },
    mounted() {
        this.getAPIs();
    },
    methods: {
        getAPIs() {
            axios.get(baseUrl).then(response => {
                if(response.data.status=="ok"){
                    this.apis = response.data.results;
                    console.log(this.apis);
                }else{
                    alert(response.data.statusmsg);
                }
            }).catch(error => {
                console.log(error);
            })
        },
        dAPI(id){
            axios({
                method: 'delete',
                url: baseUrl + id
            }).then(response =>{
                    this.api = response.data.statusmsg;
                    console.log(this.api);
                    alert(this.api);
                    this.$router.push('/');
            }).catch(error => {
                    console.log(error);
            })
        }
    }
});
</script>
