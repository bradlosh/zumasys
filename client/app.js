Vue.use(VueRouter)
// base Url of the API
const baseUrl = "http://127.0.0.1:20002/api";

    // List component
const List = {
    template: '#list-template',
    data: () => ({
        apis: []
    }),
    mounted() {
        this.getAPIs();
    },
    methods: {
        getAPIs() {
            axios.get(baseUrl + `/crudrtne/`).then(response => {
                this.apis = response.data;
                console.log(this.apis);
            }).catch(error => {
                console.log(error);
            })
        },
        dAPI(id){
            axios({
                method: 'delete',
                url: baseUrl + '/crudrtne/' + id
            }).then(response =>{
                this.api = response.data.msg;
                console.log(this.api);
                alert(this.api);
                location.reload();
            }).catch(error => {
                console.log(error);
            })
        }
    }
};

// get component
const API = {
    template: '#api-template',
    data: () => ({
        api: null
    }),
    mounted() {
        this.getAPI();
    },
    methods: {
        getAPI() {
            var id = this.$route.params.id;
            axios.get(baseUrl + `/crudrtne/` + id).then(response => {
                this.api = response.data[0]
                console.log(this.api);
            }).catch(error => {
                console.log(error);
            })
        },
        uAPI(apiform,newflg) {
            if (!newflg){httpmethod="post";}else{httpmethod="put";}
            axios({
                method: httpmethod,
                url: baseUrl + `/crudrtne/` + apiid,
                data: {
                    id: apiform.apiid.value.toUpperCase(),
                    desc: apiform.description.value,
                    program: apiform.program.value.toUpperCase(),
                    debug: apiform.debug.checked
                },
                config: {headers: {"Content-Type": "application/json"}}
            }).then(response => {
                this.api = response.data.msg;
                alert(this.api);
                console.log(this.api);
                this.$router.push('/');
            }).catch(error => {
                console.log(error);
            })
        },
        dAPI(id){
            axios({
                method: 'delete',
                url: baseUrl + '/crudrtne/' + id
            }).then(response =>{
                this.api = response.data.msg;
                console.log(this.api);
                alert(this.api);
                this.$router.push('/');
            }).catch(error => {
                console.log(error);
            })
        }
    }
};

    // Create vue router
let router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'homepage',
            path: '/',
            component: List
        }, 
        { 
            name: 'api',
            path: '/:id',
            component: API
        },
        {
            name: 'napi',
            path: '/new',
            component: API
        },
        { 
            path: '*', 
            redirect: '/' 
        }
    ]
});

    // Create vue instance with our router, and mount onto #app
new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify()
})