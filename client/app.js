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
        }
    }
};

// Post component
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
        }
    }
};

const nAPI = {
    template: '#api-template',
    data: () => ({
        api: null
    }),
    mounted() {
        this.getAPI();
    },
    methods: {
        getAPI() {
            this.api = ''
        }
    }

}

const dAPI = {
    template: '#api-template',
    data: () => ({
        api: null
    }),
    mounted() {
        this.delAPI();
    },
    methods: {
        delAPI() {
            var id = this.$route.params.id;
            axios.get(baseUrl + `/crudrtne/` + id).then(response => {
                this.api = response.data[0]
                console.log(this.api);
            }).catch(error => {
                console.log(error);
            })
        }
    }

}

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
            path: 'new',
            component: nAPI
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