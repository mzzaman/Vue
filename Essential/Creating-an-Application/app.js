Vue.createApp({
    data(){
        return{
            message : "Hello World",
        }
    }
}).mount('#app');


// Create another Vue app Instance;
Vue.createApp({
    data() {
        return {
            title: "Started Larning Vue",
            description: "Vue Js is Awesome and Easy to Learn",
        }
    }
}).mount('#app2')


const count = Vue.createApp({
    data(){
        return{
            count:0
        }
    }
})
count.mount('#count')

const name = "Hello World";
console.log(name)