<template >
  <div class="flex justify-between items-center w-48 my-6">
    <span
      class="font-bold text-gray-400 text-c1 cursor-pointer duration-100"
      v-for="(item, index) in tabName"
      :key="index"
      :class="{ active: index === tabIndex }"
      @click="tabIndex = index"
      >{{ item }}</span
    >
  </div>
  <!-- 列表 -->
  <transition-group name="list-complete">
    <label
      v-for="(item, index) in filterList(tabIndex)"
      :key="item"
      :for="index"
      class="flex items-center text-c1 w-full px-4 py-5 bg-white my-5 rounded-lg shadow-sm cursor-pointer transition duration-300"
      @click.prevent="addTodo(item)"
    >
      <input
        type="checkbox"
        :id="index"
        class="form-tick appearance-none h-7 w-7 border-purple-400 border-3 border-solid rounded-full checked:bg-purple-400 focus:outline-none mr-3"
        :checked="item.isDone"
      />
      <span class="checked-sibling:line-through">{{ item.value }}</span>
    </label>
  </transition-group>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
interface IntertodoList {
  value: string;
  isDone: boolean;
}
export default defineComponent({
  name: "List",
  props: ["todoList"],
  setup(props) {
    const tabIndex = ref(0);
    const tabName = ["全部", "已完成", "未完成"];
    const filterList = (index: number) => {
      if (index > 0) {
        return props.todoList.filter(
          (item: IntertodoList) => item.isDone === (index === 1 ? true : false)
        );
      }
      return props.todoList;
    };
    const addTodo = (item: IntertodoList) => {
      item.isDone = !item.isDone;
    };
    return {
      addTodo,
      filterList,
      tabName,
      tabIndex,
    };
  },
});
</script>

<style scoped>
.active {
  @apply transform scale-110 text-purple-300;
}

.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.list-complete-leave-active {
  position: absolute;
}
</style>