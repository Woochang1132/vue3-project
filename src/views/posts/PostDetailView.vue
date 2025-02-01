<template>
  <div>
    <h2>{{ form.title }}</h2>
    <p>{{ form.content }}</p>
    <p class="text-muted">{{ form.createdAt }}</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getPostById } from '@/api/posts';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();
const id = route.params.id;
const form = ref({});

/* 
  ref
  장) 객체 할당이 가능하다
  장) primitive, reference 타입 선언이 다 가능하기 때문에 일관성 유지 가능
  단) from.value.title, form.value.content

  reactive -> 객체, 배열 reference 타입 선언만 가능하다
  장) from.title, form.content
  단) 객체 할당 불가능

*/

const fetchPost = () => {
  const data = getPostById(id);
  form.value = { ...data };
};

fetchPost();

const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () => router.push({ name: 'PostEdit', params: { id } });
</script>

<style lang="scss" scoped></style>
