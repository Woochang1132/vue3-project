<template>
  <div>
    <h2>Home View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
    <hr class="my-4" />
    <AppGrid :items="items" v-slot="{ item }" col-class="col-6">
      <AppCard>{{ item }}</AppCard>
    </AppGrid>
    <hr class="my-4" />
    <h2>{{ position }}</h2>
    <h2>x: {{ x }}, y: {{ y }}</h2>
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$person.name);
    // this.$person.say();
  },
};
</script>

<script setup>
import { useRouter } from 'vue-router';
// import AppGrid from '@/components/app/AppGrid.vue';
// import AppCard from '@/components/app/AppCard.vue';
import { reactive, ref, toRefs } from 'vue';

const router = useRouter();
const goAboutPage = () => {
  router.push('/about');
};

const items = ref(['사과', '딸기', '포도', '바나나']);

const position = reactive({
  x: 100,
  y: 1000,
});

//const x = position.x; 이렇게 할당하면 x에 담긴 건 단순히 Number이고 반응형을 잃는다.
//const x = ref(position.x) // 초기 값 100을 ref 함수에 할당한 것이지 reactive의 x와 동기화 된 것을 의미하지 않는다.
/* 
const { x, y } = position;
console.log('x : ', typeof x);
console.log('y : ', typeof y); 
*/
// const x = toRef(position, 'x');
// const y = toRef(position, 'y');

const { x, y } = toRefs(position);
</script>

<style lang="scss" scoped></style>
