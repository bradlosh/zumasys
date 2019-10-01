<template>
    <v-container>
        <v-card
            class="mx-auto"
            max-width="400"
            tile
            >
            <v-form 
                v-on:submit.prevent="uAPI"
                ref="form"
                id="apiform"
                name="apiform"
                >
                <v-text-field
                    label="API ID"
                    id="apiid"
                    name="apiid"
                    v-model="api.id"
                    v-bind:readonly="api.pageid!='/new'"
                    required
                    lazy
                    >
                </v-text-field>
                <v-text-field
                    label="Description"
                    id="description"
                    name="description"
                    v-model="api.desc"
                    required
                    lazy
                    >
                </v-text-field>
                <v-text-field
                    label="Program"
                    id="program"
                    name="program"
                    v-model="api.program"
                    required
                    lazy
                    >
                </v-text-field>
                <v-checkbox
                    id="debug"
                    name="debug"
                    v-model="api.debug"
                    :label="`Debug`"
                    true-value="1"
                    false-value=""
                    >
                </v-checkbox>                                                                                                      
                <v-btn
                    fab
                    dark
                    small
                    color="green"
                    @click="uAPI"
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
                    :to="{ name: 'home'}"
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

export default Vue.extend({
    name: 'APIEdit',
    data() { 
        return {   
            api: []
        }
    },
    created: function() {
        this.getAPI();
    },
    methods: {
        getAPI() {
            var id = this.$route.params.id;
            this.api.pageid = this.$router.currentRoute.path;
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
        uAPI() {
            var httpmethod;
            if (this.api.pageid!='/new'){httpmethod="put";}else{httpmethod="post";}
            axios({
                method: httpmethod,
                url: baseUrl,
                data: {
                    id: this.api.id.toUpperCase(),
                    desc: this.api.desc,
                    program: this.api.program.toUpperCase(),
                    debug: this.api.debug
                },
                config: {headers: {"Content-Type": "application/json"}}
            }).then(response => {
                this.api = response.data.statusmsg;
                alert(this.api);
                console.log(this.api);
                this.$router.push({name:'home'});
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
                this.$router.push({name:'home'});
            }).catch(error => {
                console.log(error);
            })
            }
        }
    },
});
</script>