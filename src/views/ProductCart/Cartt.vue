<template>
  <br />
  <br />
  <br />
  <br />
  <br />
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-10 mb-4">
        <div style="font-size: 32px">
          <span
            class="progress-icon"
            style="background-color: rgb(255, 204, 133)"
            >1</span
          >
          <span
            class="progressbar-text"
            style="background-color: rgb(255, 204, 133)"
            >確認購物車</span
          >
          <span class="progressbar-text"> > </span>
          <span class="progress-icon">2</span>
          <span class="progressbar-text">選擇取貨方式</span>
          <span class="progressbar-text"> > </span>
          <span class="progress-icon">3</span>
          <span class="progressbar-text">選擇付款方式</span>
          <span class="progressbar-text"> > </span>
          <span class="progress-icon">4</span>
          <span class="progressbar-text">訂單完成</span>
        </div>
      </div>
    </div>
  </div>
  <br />
  <!-- 商品明細區這裡要串接資料庫並且會讀資料庫有多少筆資料跟著變長 -->

  <!-- 商品title -->

  <!-- 商品細節 -->
  <v-container class="custom-container">
    <h3>Normal Product List</h3>
    <v-row>
      <v-col>
        <v-table class="table">
          <thead>
            <tr>
              <th scope="col">名稱</th>
              <th scope="col">商品描述</th>
              <th scope="col">單價</th>
              <th scope="col">數量</th>
              <th scope="col">小計</th>
              <th scope="col">修改</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in todData">
              <td>{{ i.pName }}</td>
              <td>{{ i.descript }}</td>
              <td>{{ i.unitPrice }}</td>
              <td>{{ i.qty }}</td>
              <td style="color: rgb(218, 120, 0)">
                {{ i.subtotal }}
              </td>
              <td>
                <v-btn
                  :id="index"
                  variant="text"
                  color="#B7582A"
                  @click="delTOD(i.id)"
                >
                  Delete
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
    <v-row justify="end">
      <v-col cols="auto">
        <h5>Normal Product List Total: {{ totalPrice }}</h5>
      </v-col>
    </v-row>
    <v-row justify="end">
      <v-col cols="12" align="end">
        <v-btn href="" size="x-large" color="#B7582A"
          >Buy More Customized Product</v-btn
        >
      </v-col>
    </v-row>

    <v-divider :thickness="3"></v-divider>
    <!-- 商品總價與次要選項 -->

    <CtmizedPTable> </CtmizedPTable>

    <!-- 下方按鈕取消與確認按鈕 -->

    <div class="container d-flex mb-3">
      <button class="btn btn-primary p-2" style="font-size: 36px">取消</button>
      <button
        class="btn btn-success ms-auto p-2"
        style="font-size: 36px"
        @click="comfirmPurchase"
      >
        確認結帳
      </button>
    </div>

    <!-- 購買規範說明 -->
    <div>
      <br />
      <br />
      <br />
    </div>
  </v-container>

  <!-- footer -->
</template>

<script setup>
import { ref, computed } from "vue";
import axios from "axios";
import CustomizedCart from "../customerzied/Cart.vue";
import CtmizedPTable from "../../components/CtmizedPTableInCart.vue"; //../../components/CtmizedPTableInCart.vue

const apiurl = "https://localhost:7098/";
const getAll = "api/TempOrderDetailsAPI";
const deleteById = "api/TempOrderDetailsAPI";
const postById = "api/TempOrderDetailsAPI";
let memberIdTosql = 1;
const employeeId = 1;

//temporderdata
const todData = ref([]);

const totalPrice = ref(0);

function initV() {
  //checkMemberLogin();
  searchTODData();
}

//check member login
/*function checkMemberLogin() {
  let loginmemberId = 1;
  memberIdTosql = loginmemberId;
  if (memberIdTosql == -1) {
    return "please sign in";
  }
}*/

//search data
async function searchTODData() {
  let response = await axios.get(`${apiurl}${getAll}/${memberIdTosql}`);

  if (response === null) {
    todData.value = [];
  } else {
    todData.value = [];
    todData.value = response.data;
    totalPrice.value = 0;
    todData.value.forEach((element) => {
      totalPrice.value = totalPrice.value + element.subtotal;
    });
  }
}

//delete cart ,temporderdetail
async function delTOD(id) {
  try {
    const response = await axios.delete(`${apiurl}${deleteById}/${id}`);
    alert(response.data);
  } catch (error) {
    return "process error";
  }
  initV();
}

//comfirm purchase
async function comfirmPurchase() {
  // let response = await axios.get(`${apiurl}${postById}${memberIdTosql}`);

  const res = await axios.get(`${apiurl}${getAll}`);
  if (res.data === "None Data") {
    return "None Data";
  } else {
    initV();
    //go next payment page
    alert(res.data);
    return res.data;
  }
}

initV();
</script>

<style>
.custom-container {
  max-width: 1200px; /* 您可以根據需要調整數值 */
}
</style>
