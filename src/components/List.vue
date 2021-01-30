<template >
  <div class="flex justify-between items-center w-48 my-6">
    <span class="font-bold text-gray-400 text-c1 cursor-pointer">全部</span>
    <span class="font-bold text-gray-400 text-c1 cursor-pointer"> 已完成 </span>
    <span class="font-bold text-gray-400 text-c1 cursor-pointer">未完成</span>
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
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
export default defineComponent({
  name: "List",
  props: ["todoList"],
  setup(props) {
    watch(props.todoList, (nVal, oVal) => {
      console.log(nVal, oVal);
    });
  },
});
</script>

<style scoped>
</style>