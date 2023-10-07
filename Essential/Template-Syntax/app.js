const app = Vue.createApp({
    data(){
        return{
            name: "Moniruzzaman",
        }
    }
})

app.mount('#app');



const rawHtml = Vue.createApp({
    data() {
        return {
            raw_url:'<h1>RawHTML</h1>',
        }
    }
})
rawHtml.mount('#rawHtml');

const  appToCounter = Vue.createApp({
    data(){
        return{
            counter:0,
            name: '',
        }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num){
            this.counter = this.counter - num;
        },
        setName(event){
            this.name = event.target.value.toUpperCase();
        },
        resetInput(){
            this.name = '';
        }
    }

})
appToCounter.mount('#events')