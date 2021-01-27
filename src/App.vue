<template>
  <div class="flex justify-center items-center bg-purple-300 h-screen w-screen">
    <div class="w-c1 h-auto bg-gray-50 rounded-3xl shadow-2xl">
      <div class="mx-8 pb-10">
        <h1 class="font-bold text-5xl text-purple-900 mt-24">Hi,KAKI</h1>
        <!-- 输入框-->
        <div class="w-full">
          <label for="add" class="block relative w-auto my-8">
            <input
              type="text"
              class="focus:outline-none h-15 px-4 w-full rounded-full shadow-2xl"
            />
            <div
              class="flex justify-center items-center w-15 h-15 absolute right-0 top-0 bg-gradient-to-b from-purple-400 to-indigo-400 rounded-full"
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

        <!-- 选项卡 -->
        <div class="flex justify-between items-center w-48 my-6">
          <span class="font-bold text-gray-400 text-c1 cursor-pointer"
            >全部</span
          >
          <span class="font-bold text-gray-400 text-c1 cursor-pointer">
            已完成
          </span>
          <span class="font-bold text-gray-400 text-c1 cursor-pointer"
            >未完成</span
          >
        </div>
        <!-- 列表 -->
        <div>
          <label
            for="check2"
            class="flex items-center text-c1 w-full px-4 py-5 bg-white my-5 rounded-lg shadow-sm cursor-pointer"
          >
            <input
              type="checkbox"
              name="check2"
              id="check2"
              class="form-tick appearance-none h-7 w-7 border-purple-400 border-3 border-solid rounded-full checked:bg-purple-400 focus:outline-none mr-3"
            />
            <span class="checked-sibling:line-through">代办事项1</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
