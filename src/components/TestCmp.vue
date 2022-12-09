<!--
 * @Author: QinJiu
 * @Date: 2022-12-09 17:00:01
 * @LastEditors: Qinjiu
 * @LastEditTime: 2022-12-09 17:11:24
 * @Description: -
-->
<template>
  <div>
    <el-button @click="decrease">减小</el-button>
    {{ num }}
    <el-button @click="increase">增加</el-button>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    num(val) {
      console.log("num发生变化！", val);
    },
  },
  methods: {
    decrease() {
      this.$emit("update:num", this.num - 1);
    },
    increase() {
      this.$emit("update:num", this.num + 1);
    },
  },
};
</script>

<style></style>
