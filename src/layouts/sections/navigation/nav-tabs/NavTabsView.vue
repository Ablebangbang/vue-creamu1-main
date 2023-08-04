<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Nav tabs page components
import TabsSimple from "./components/TabsSimple.vue";

// Nav tabs page components codes
import { TabsSimpleCode } from "./components/Codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<script>
export default {
  data () {
    return {
      panel: [],
    }
  },
  methods: {
    all () {
      this.panel = ['foo', 'bar', 'baz']
    },
    none () {
      this.panel = []
    },
  },
}
</script>
<template>
  <BaseLayout
    title="常見問題"
    :breadcrumb="[{ label: 'CreamU', route: 'http://localhost:3000/' }, { label: '常見問題' }]"
  >
  </BaseLayout>
  <v-container width="100px">
    <div class="text-center d-flex pb-4">
      <v-btn class="ma-2" @click="all">
        展開
      </v-btn>
      <v-btn class="ma-2" @click="none">
        收回
      </v-btn>
    </div>

    <div class="pb-4">分類</div>

    <v-expansion-panels
      v-model="panel"
      multiple
    >
      <v-expansion-panel
        title="Q1購物流程問題："
        text="問題：如何訂購商品？
回答：選擇您喜歡的商品，點擊「加入購物車」，然後前往結帳頁面填寫送貨地址和付款方式完成訂單。"
        value="foo"
        align="center"
      ><v-col align="center">   問題：如何查詢訂單狀態？
回答：登入您的賬戶，前往「訂單狀態」或「訂單追蹤」頁面，您可以查看最新訂單狀態和配送進度。</v-col></v-expansion-panel>

      <v-expansion-panel
        title="Q2付款和退款問題："
        text="問題：有哪些付款方式可用？
回答：我們接受信用卡、借記卡、PayPal等多種付款方式，詳細信息請參考結帳頁面。"
        value="bar"
        align="center"
      ><v-col align="center">   問題：如何辦理退款？
回答：若需退貨和退款，請登入您的賬戶，前往「訂單」或「退款」頁面提交退貨申請，我們將盡快處理您的退款事宜。</v-col></v-expansion-panel>

      <v-expansion-panel
        title="Q3產品和配送問題："
        text="問題：商品是否有保固？
回答：我們的商品享有相應的保固服務，保固內損壞可提供維修或更換。詳細保固信息請參考商品頁面或購買後的郵件。"
        value="baz"
        align="center"
      ><v-col align="center">   問題：配送費用如何計算？
回答：配送費用根據商品重量和送貨地址計算。在結帳頁面，系統會自動計算出運費並顯示給您確認。</v-col></v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>
