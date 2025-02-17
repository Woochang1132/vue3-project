<template>
  <AppLoading v-if="loading"></AppLoading>
  <AppError v-else-if="error" :message="error.message"></AppError>
  <div v-else>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p class="text-muted">
      {{ $dayjs(post.createdAt).format('YYYY.MM.DD HH:mm:ss') }}
    </p>
    <hr class="my-4" />
    <AppError v-if="removeError" :message="removeError.message" />
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
        <button
          class="btn btn-outline-danger"
          @click="remove"
          :disabled="removeLoading"
        >
          <template v-if="removeLoading">
            <span
              class="spinner-grow spinner-grow-sm"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden" role="status">Loading...</span>
          </template>
          <template v-else> 삭제 </template>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { deletePost } from '@/api/posts';
import { ref } from 'vue';
import { useAxios } from '@/hooks/useAxios';

const props = defineProps({
  id: [String, Number],
});

const router = useRouter();

const { error, loading, data: post } = useAxios(`/posts/${props.id}`);

const removeError = ref(null);
const removeLoading = ref(false);

const remove = async () => {
  try {
    if (confirm('삭제 하시겠습니까?') === false) {
      return;
    }
    removeLoading.value = true;
    await deletePost(props.id);
    router.push({ name: 'PostList' });
  } catch (err) {
    removeError.value = err;
  } finally {
    removeLoading.value = false;
  }
};
const goListPage = () => router.push({ name: 'PostList' });
const goEditPage = () =>
  router.push({ name: 'PostEdit', params: { id: props.id } });
</script>

<style lang="scss" scoped></style>
