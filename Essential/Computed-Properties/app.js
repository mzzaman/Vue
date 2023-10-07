const app = Vue.createApp({
    data(){
        return {
            fname:'',
            lname:''
        }
    },
    // methods: {
    //     fullName(){
    //         if (this.fname && this.lname == '') {
    //             return '';
    //         }
    //         return this.fname +' ' +this.lname;
    //     }
    // }
    computed:{
        fullName(){
            if(this.fname && this.lname == ''){
                return '';
            }else{
                return this.fname +' ' +this.lname;
            }
        }
    }
})
app.mount('#computed');