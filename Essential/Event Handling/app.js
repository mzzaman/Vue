const app = Vue.createApp({
    data(){
        return{
            count:0,
        }
    },
    methods:{
        add(num){
            this.count =this.count + num;
            
        },
        remove(num){
            this.count =this.count - num;
        }
    }
})
app.mount('#event')