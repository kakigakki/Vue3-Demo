<template>
  <div class="flex justify-center items-center bg-purple-300 h-screen w-screen">
    <div class="w-c1 h-auto bg-gray-50 rounded-3xl">
      <h1 class="text-center font-bold text-5xl text-purple-900">Hi,KAKI</h1>
      <!-- 输入框-->
      <div>
        <label for="add">
          <input type="text" />
          <span> + </span>
        </label>
      </div>

      <!-- 选项卡 -->
      <div>
        <span>全部</span>
        <span> 已完成 </span>
        <span>未完成</span>
      </div>
      <!-- 列表 -->
      <div>
        <!-- 列表中的一项 -->
        <div>
          <span>⚪</span>
          <span>代办事项1</span>
        </div>
        <!-- 列表中的一项 -->
        <div>
          <span>⚪</span>
          <span>代办事项2</span>
        </div>
        <div>
          <span>⚪</span>
          <span>代办事项2</span>
        </div>
        <div>
          <span>⚪</span>
          <span>代办事项2</span>
        </div>
        <div>
          <span>⚪</span>
          <span>代办事项2</span>
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
