<template>
  <div id="app">
    {{ counter }}
    <button @click="increment">+1</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import useCounterStore from '@/store';

export default {
  name: 'App',
  computed: {
    ...mapState({
      counter: state => state.counter
    })
  },
  methods: {
    ...mapActions({
      increment: 'increment'
    })
  }
};
</script>

