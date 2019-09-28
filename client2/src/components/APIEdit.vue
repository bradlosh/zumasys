<template>
  <v-container>
                <v-card
                class="mx-auto"
                max-width="400"
                tile
                >
                    <v-form 
                    method="post"
                    ref="form"
                    id="apiform"
                    name="apiform"
                    >
                        <v-text-field
                            label="API ID"
                            id="apiid"
                            name="apiid"
                            required
                            lazy
                        ></v-text-field>
                        <v-text-field
                            label="Description"
                            id="description"
                            name="description"
                            required
                            lazy
                        ></v-text-field>
                        <v-text-field
                            label="Program"
                            id="program"  
                            name="program"
                            required
                            lazy
                        ></v-text-field>
                        <v-checkbox
                            true-value="1"
                            id="debug"
                            name="debug"
                            :label="`Debug`"
                        ></v-checkbox>                                                                                                      
                        <v-btn
                        fab
                        dark
                        small
                        color="green"
                        @click="uAPI(this.apiform,api.id)"
                    >
                        <v-icon>mdi-check</v-icon>
                    </v-btn>
                    <v-btn
                        fab
                        dark
                        small
                        color="red"
                        @click="dAPI(api.id)"
                    >
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <v-btn
                        fab
                        dark
                        small
                        color="purple"
                        :to="{ name: 'home'}"
                    >
                        <v-icon>mdi-undo</v-icon>
                    </v-btn>
                    </v-form>
                    
                </v-card>
</v-container>
</template>

<script lang="ts">
import Vue from 'vue';

const baseUrl = "http://127.0.0.1:20002/api/crudrtne/";
const api;

export default ({
    name: 'APIEdit',
    data() {
        return{
            api: []
        }
    },
    mounted() {
        this.getAPI();
    },
    methods: {
        getAPI() {
            console.log('editvue');
            var id = this.$route.params.id;
            if (id) {
            axios.get(baseUrl + id).then(response => {
                if(response.data.status=="ok"){
                    this.api = response.data.results[0];
                    console.log(this.api);
                }else{
                    alert(response.data.statusmsg);
                }
            }).catch(error => {
                console.log(error);
            })
        }
        },
        uAPI(apiform,newflg) {
            if (!newflg){httpmethod="post";}else{httpmethod="put";}
            axios({
                method: httpmethod,
                url: baseUrl,
                data: {
                    id: apiform.apiid.value.toUpperCase(),
                    desc: apiform.description.value,
                    program: apiform.program.value.toUpperCase(),
                    debug: apiform.debug.checked
                },
                config: {headers: {"Content-Type": "application/json"}}
            }).then(response => {
                this.api = response.data.statusmsg;
                alert(this.api);
                console.log(this.api);
            }).catch(error => {
                console.log(error);
            })
        },
        dAPI(id){
            if (id){
            axios({
                method: 'delete',
                url: baseUrl + id
            }).then(response =>{
                this.api = response.data.statusmsg;
                console.log(this.api);
                alert(this.api);
            }).catch(error => {
                console.log(error);
            })
            }
            this.$router.push('/');
        }
    }
});