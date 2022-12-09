<template>
  <div class="home">
    <h1>.sync</h1>
    <!-- <TestCmp :num="count" @update:num="updateNum" /> -->
    <!-- <TestCmp :num.sync="count" @update:num="updateNum" /> -->
    <TestCmp :num.sync="count" />
  </div>
</template>

<script>
// @ is an alias to /src
import TestCmp from "@/components/TestCmp.vue";

export default {
  name: "HomeView",
  components: {
    TestCmp,
  },
  data() {
    return {
      count: 10,
    };
  },
  watch: {
    count(val) {
      console.log("count发生变化！", val);
    },
  },
  methods: {
    updateNum(val) {
      console.log("updateNum执行！", val + 1);
      this.count = val + 1;
    },
  },
};
</script>
