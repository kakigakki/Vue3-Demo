<template >
  <h1>{{ childMsg + y + x }}</h1>
  <hr />
  <p v-if="loading">{{ loading }}</p>
  <p v-else-if="errMsg">{{ errMsg }}</p>
  <ul v-else>
    <li v-for="(item, index) in data" :key="index">
      {{ item }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import useMousePosition from "../hooks/useMousePosition";
import useRequest from "../hooks/useRequest";

interface InterCity {
  name: string;
  location: string;
}

interface InterPrice {
  name: string;
  price: string;
}

export default defineComponent({
  name: "child",
  setup() {
    const childMsg = ref("childMsg哈哈哈");
    const { x, y } = useMousePosition();
    // const { loading, data, errMsg } = useRequest<InterPrice>(
    //   "/data/price.json"
    // );
    const { loading, data, errMsg } = useRequest<InterCity[]>(
      "/data/city.json"
    );
    watch(data, () => {
      if (data.value) {
        console.log(data.value.length);
      }
    });
    return {
      childMsg,
      x,
      y,
      loading,
      data,
      errMsg,
    };
  },
});
</script>

<style scoped>
</style>