<template>
  <div class="flex justify-center items-center bg-purple-300 h-screen w-screen">
    <div class="w-c1 h-auto bg-gray-50 rounded-3xl shadow-2xl">
      <div class="mx-8 pb-10 relative">
        <h1 class="font-bold text-5xl text-purple-900 mt-24">Hi,KAKI</h1>
        <!-- 搜索框 -->
        <SearchBox @addToList="addToList"></SearchBox>
        <!-- 选项卡 -->
        <List :todoList="todoList"></List>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, reactive, Ref } from "vue";
import SearchBox from "./components/SearchBox.vue";
import List from "./components/List.vue";

interface IntertodoList {
  value: string;
  isDone: boolean;
}
export default defineComponent({
  name: "App",
  components: {
    SearchBox,
    List,
  },
  emits: ["addToList"],
  setup() {
    let localTodo = localStorage.getItem("todoList");
    if (!localTodo) {
      localTodo = "[]";
    }
    const todoList = reactive<IntertodoList[]>(JSON.parse(localTodo));
    const beforeunloadEvent = () => {
      if (Object.values(todoList).length) {
        localStorage.setItem("todoList", JSON.stringify(todoList));
      }
    };
    window.addEventListener("beforeunload", beforeunloadEvent);
    const addToList = (data: Ref) => {
      todoList.unshift({ value: data.value, isDone: false });
    };
    onUnmounted(() => {
      window.removeEventListener("beforeunload", beforeunloadEvent);
    });
    return {
      todoList,
      addToList,
    };
  },
});
</script>
