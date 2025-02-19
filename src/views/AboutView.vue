<template>
  <div>
    <h2>About View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="$router.push('/')">
      Home으로 이동
    </button>
    <h2>Store</h2>
    <p>counter : {{ counter }}</p>
    <p>doubleCounte : {{ doubleCount }}</p>
    <p>doubleCountPlusOne : {{ doubleCountPlusOne }}</p>
    <button @click="increment()">Click!!</button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const route = useRoute();
console.log('route.path', route.path);

const store = useCounterStore();
const { counter, doubleCount, doubleCountPlusOne } = storeToRefs(store);
const { increment } = store; // 가져오는 함수이기 때문에 이렇게 구성이 가능하다.
</script>

<style lang="scss" scoped></style>
