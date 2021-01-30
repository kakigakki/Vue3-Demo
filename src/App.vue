<template>
  <div class="flex justify-center items-center bg-purple-300 h-screen w-screen">
    <div class="w-c1 h-auto bg-gray-50 rounded-3xl shadow-2xl">
      <div class="mx-8 pb-10">
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
import { defineComponent, reactive, Ref } from "vue";
import SearchBox from "./components/SearchBox.vue";
import List from "./components/List.vue";

interface IntertodoList {
  all: string[];
  done: string[];
  noDone: string[];
}
export default defineComponent({
  name: "App",
  components: {
    SearchBox,
    List,
  },
  emits: ["addToList"],
  setup() {
    const todoList = reactive<IntertodoList>({
      all: [],
      done: [],
      noDone: [],
    });
    const addToList = (data: Ref) => {
      todoList.all.unshift(data.value);
      todoList.noDone.unshift(data.value);
    };
    return {
      todoList,
      addToList,
    };
  },
});
</script>
