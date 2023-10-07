const app = Vue.createApp({
    data(){
        return{
            fName: '',
            lName:'',
           
       }
    },
    methods:{

        
        setlName(event){
            this.lName = event.target.value.toUpperCase();
        },
        setfName(event){
            this.fName = event.target.value.toUpperCase();
        }
    }
})

app.mount('#binding');