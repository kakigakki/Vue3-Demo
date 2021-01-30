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
  <transition name="slide-fade" v-for="(item, index) in lists" :key="index">
    <div v-show="tabIndex === index">
      <transition-group name="list-complete">
        <label
          v-for="(item2, indey) in lists[index]"
          :key="item2"
          :for="indey"
          class="flex items-center text-c1 w-full px-4 py-5 bg-white my-5 rounded-lg shadow-sm cursor-pointer transition-transform duration-500"
        >
          <input
            type="checkbox"
            :id="indey"
            class="form-tick appearance-none h-7 w-7 border-purple-400 border-3 border-solid rounded-full checked:bg-purple-400 focus:outline-none mr-3"
          />
          <span class="checked-sibling:line-through">{{ item2 }}</span>
        </label>
      </transition-group>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "List",
  props: ["todoList"],
  setup(props) {
    const tabIndex = ref(0);
    const tabName = ["全部", "已完成", "未完成"];
    const lists = Object.values(props.todoList);
    return {
      lists,
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

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-active {
  transition-delay: 0.4s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
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