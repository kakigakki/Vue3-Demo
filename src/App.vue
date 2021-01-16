<template>
  <h1>今天天气不错</h1>
  <hr />
  <child></child>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import child from "./components/Child.vue";

export default defineComponent({
  name: "App",
  components: { child },
});
</script>
