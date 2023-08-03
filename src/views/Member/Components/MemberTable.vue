<template>
  <v-expansion-panels v-model="panel" disabled=true>
    <!-- 電子郵件 -->
    <v-expansion-panel>
      <v-expansion-panel-title color="#EDE7F6">
        <p style="color: black;margin: 0px;">電子郵件</p>
        <template v-slot:actions="{ expanded }">
          <v-icon color="teal" icon="mdi-check"></v-icon>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        {{ member.email }}
      </v-expansion-panel-text>
    </v-expansion-panel>
    <!-- 地址 -->
    <v-expansion-panel>
      <v-expansion-panel-title color="#EDE7F6">
        <p style="color: black;margin: 0px;">地址</p>
        <template v-slot:actions="{ expanded }">
          <v-icon color="teal" icon="mdi-check"></v-icon>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        {{ member.address }}
      </v-expansion-panel-text>
    </v-expansion-panel>

    <!-- 生日 -->
    <v-expansion-panel>
      <v-expansion-panel-title color="#EDE7F6">
        <p style="color: black;margin: 0px;">生日</p>
        <template v-slot:actions="{ expanded }">
          <v-icon color="teal" icon="mdi-check"></v-icon>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        {{ formattedDate(member.birthday) }}
      </v-expansion-panel-text>
    </v-expansion-panel>

    <!-- 加入日期 -->
    <v-expansion-panel>
      <v-expansion-panel-title color="#EDE7F6">
        <p style="color: black;margin: 0px;">加入日期</p>
        <template v-slot:actions="{ expanded }">
          <v-icon color="teal" icon="mdi-check"></v-icon>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        {{ formattedDate(member.joinDate) }}
      </v-expansion-panel-text>
    </v-expansion-panel>

    <!-- 電話 -->
    <v-expansion-panel>
      <v-expansion-panel-title color="#EDE7F6">
        <p style="color: black;margin: 0px;">電話</p>
        <template v-slot:actions="{ expanded }">
          <v-icon color="teal" icon="mdi-check"></v-icon>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        {{ member.telephone }}
      </v-expansion-panel-text>
    </v-expansion-panel>

    <!-- 備註 -->
    <v-expansion-panel>
      <v-expansion-panel-title color="#EDE7F6">
        <p style="color: black;margin: 0px;">備註</p>
        <template v-slot:actions="{ expanded }">
          <v-icon color="teal" icon="mdi-check"></v-icon>
        </template>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        {{ member.notes }}
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
    
<script setup>
import { ref, defineProps } from "vue";
const porps = defineProps({
  member: Object
});
const panel = ref([0, 1, 2, 3, 4, 5, 6])
const disabled = ref(false)
// 格式化日期為年月日格式
function formattedDate(dateString) {
  const date = new Date(dateString);
  return `${date.getFullYear()}年${(
    date.getMonth() + 1
  ).toString()}月${date.getDate().toString()}日`;
}
</script>
    
<style scoped>
table {
  margin-top: 10%;
  width: 100%;
  border-collapse: collapse;
  /* 合併邊框 */
}

table thead th,
table tbody th,
table tbody td {
  height: 50px;
  /* 調整表格行高 */
  text-align: center;
  /* 將文字水平置中 */
  vertical-align: middle;
  /* 將文字垂直置中 */
  padding: 10px;
  /* 添加內邊距 */
}

/* 隱藏 accordion-button 旁邊的箭頭符號 */
.accordion-button::after {
  display: none;
}
</style>