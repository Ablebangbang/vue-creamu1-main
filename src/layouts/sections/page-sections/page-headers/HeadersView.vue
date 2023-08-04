<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Headers page components
import HeaderOne from "./components/HeaderOne.vue";

// Headers page components codes
// import { header1Code } from "./components/codes";

// nav-pills
import setNavPills from "@/assets/js/nav-pills.js";

// hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="最新資訊專區"
    :breadcrumb="[
      { label: '台灣特有貴重木出口新制',route: 'https://udn.com/news/story/7266/6865649' },
      { label: '周年慶全館下殺75折', route: '/sections/page-sections/page-headers' },
      { label: '全台頂尖設計團隊帶刀投靠',route: 'https://udn.com/news/story/7266/6865649' },
      { label: '木偶奇遇記',route: 'https://udn.com/news/story/7266/6865649' },
      { label: '木偶地獄梗集中營',route: 'https://udn.com/news/story/7266/6865649' },
    ]"
  >
    <View title="NEWS" :code="header1" id="header-1">
      <HeaderOne />
    </View>
  </BaseLayout>
</template>
