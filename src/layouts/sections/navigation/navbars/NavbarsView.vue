<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Navbars page components
import NavbarDark from "./components/NavbarDark.vue";

// Navbars page components codes
import { navbarDarkCode } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="智慧財產宣告"
    :breadcrumb="[{ label: 'CreamU', route: 'http://localhost:3000/' }, { label: '智慧財產宣告' }]"
  >
    <View
      title="Navbar dark"
      :code="navbarDarkCode"
      id="navbar-dark"
      height="300  position-relative"
    >
      <NavbarDark />
    </View>
  </BaseLayout>
  <!-- 111 -->
  <v-sheet
    border="md"
    class="pa-6 text-white mx-auto"
    color="#e5d2ab"
    max-width="400"
  >
    <h4 class="text-h5 font-weight-bold mb-4">Your Privacy</h4>

    <p class="mb-8">
      CreamU公司保護所有「CreamU」品牌智慧財產權，未經授權不得使用或侵犯。如有問題，請聯繫我們。謝謝支持。

      <br>
      <br>

      本網站僅供<a href="https://www.facebook.com/ispan.kaohsiung/" class="text-red-accent-2">資展協會</a> 133期展示使用，如有任何侵權問題歡迎聯繫我們。
    </p>

    <v-btn
      block
      class="text-none text-black mb-4"
      color="red-accent-2"
      size="x-large"
      variant="flat"
      href="http://localhost:3000/"
    >
      了解
    </v-btn>

    <v-btn
      block
      class="text-none text-black"
      color="red-accent-2"
      size="x-large"
      variant="outlined"
      href="https://www.facebook.com/ispan.kaohsiung/"
    >
      馬上提出問題
    </v-btn>
  </v-sheet>
</template>
