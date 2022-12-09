<!--
 * @Author: QinJiu
 * @Date: 2022-12-09 15:03:57
 * @LastEditors: Qinjiu
 * @LastEditTime: 2022-12-09 16:54:24
 * @Description: -
-->
<template>
  <section class="wrapper">
    <!-- 头部 -->
    <header class="header-container">Header</header>
    <!-- 主要区域 -->
    <section class="main-container">
      <!-- 侧边栏 -->
      <aside class="aside-container">
        <BaseAside />
      </aside>
      <!-- 主内容区 -->
      <main class="content-container">
        <router-view />
      </main>
    </section>
  </section>
</template>

<script>
import BaseAside from "@/components/BaseAside.vue";

export default {
  name: "HomeView",
  components: {
    BaseAside,
  },
};
</script>

<style lang="less" scoped>
// 布局
.wrapper {
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  // 头部
  .header-container {
    flex-shrink: 0;
    overflow: auto;
    height: 60px;
    // todo
    background-color: rgba(0, 0, 0, 0.1);
  }
  // 主要区域
  .main-container {
    height: 100%;
    overflow: auto;
    display: flex;
    // 侧边栏
    .aside-container {
      flex-shrink: 0;
      // width: 200px;
      overflow: auto;
      // todo
      background-color: #f5f5f5;
    }
    // 主内容区
    .content-container {
      flex: 1;
      overflow: auto;
    }
  }
}
</style>
