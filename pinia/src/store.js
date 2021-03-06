import { defineStore } from 'pinia';

export default defineStore('counterStore', {
    state: () => ({
        counter: 0,
    }),
    actions: {
        increment () {
            this.counter++;
        },
    },
})