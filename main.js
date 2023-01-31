const vm = {
    data() {
        return {
            result: '',
            numbers: [1,2,3,4,5,6,7,8,9,0],
            operations: ['+','-','*','/']
        }
    },
    methods: {
        inp(char) {
            this.result = this.result.toString();
            this.result += char
        },
        clear() {
            this.result = '';
        },
        calc() {
            this.result = eval(this.result);
        }
    }
}

Vue.createApp(vm).mount('#app')