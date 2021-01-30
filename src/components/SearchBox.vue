<template >
  <!-- 输入框-->
  <div class="w-full">
    <label for="add" class="block relative w-auto my-8">
      <input
        type="text"
        class="focus:outline-none h-15 px-4 w-full rounded-full shadow-2xl"
        v-model="newTodo"
      />
      <div
        class="flex justify-center items-center w-15 h-15 absolute right-0 top-0 bg-gradient-to-b from-purple-400 to-indigo-400 rounded-full duration-200 transform hover:scale-125"
        @click="addToList"
        ref="plusBtn"
      >
        <svg
          t="1611758145265"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1308"
          width="36"
          height="36"
        >
          <path
            d="M512 85.34016q17.67424 0 30.16704 12.4928t12.4928 30.16704l0 341.34016 341.34016 0q17.67424 0 30.16704 12.4928t12.4928 30.16704-12.4928 30.16704-30.16704 12.4928l-341.34016 0 0 341.34016q0 17.67424-12.4928 30.16704t-30.16704 12.4928-30.16704-12.4928-12.4928-30.16704l0-341.34016-341.34016 0q-17.67424 0-30.16704-12.4928t-12.4928-30.16704 12.4928-30.16704 30.16704-12.4928l341.34016 0 0-341.34016q0-17.67424 12.4928-30.16704t30.16704-12.4928z"
            p-id="1309"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "SearchBox",
  setup(props, ctx) {
    const newTodo = ref(null);
    const plusBtn = ref<HTMLDivElement | null>(null);
    const addToList = () => {
      ctx.emit("addToList", newTodo);
    };
    return {
      plusBtn,
      newTodo,
      addToList,
    };
  },
});
</script>

<style scoped>
</style>