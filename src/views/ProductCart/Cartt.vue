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
          <span class="progress-icon" style="background-color: #e5d2ab">1</span>
          <span class="progressbar-text" style="background-color: #e5d2ab"
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
    <v-row justify="center">
      <v-col cols="10">
        <h3>Normal Product List</h3>
      </v-col>
      <div v-if="todData.length == 0">
        <v-col cols="10" align="center">
          <br />
          <br />
          <br />
          <v-btn
            href="http://localhost:3000/productList"
            prepend-icon="mdi-cart-arrow-down"
            size="x-large"
            color="#B7582A"
            >Buy Now</v-btn
          >
        </v-col>
        <v-col cols="10" align="center">
          <h3>Opps! No Normal Product In Shopping Cart!</h3>
        </v-col>
      </div>
      <div v-else>
        <v-col cols="12" align-self="center">
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
      </div>
    </v-row>
    <v-row justify="end">
      <v-col cols="10" align="end">
        <h5>Normal Product List Total: {{ totalPrice }}</h5>
      </v-col>
    </v-row>
    <v-row justify="end">
      <v-col cols="10" align="end">
        <div v-if="todData.length != 0">
          <v-btn
            href="http://localhost:3000/productList"
            size="x-large"
            color="#B7582A"
            >Buy More Normal Product</v-btn
          >
        </div>
      </v-col>
    </v-row>
    <v-divider
      :thickness="2"
      color="#B7582A"
      class="border-opacity-25"
    ></v-divider>

    <!-- 商品總價與次要選項 -->

    <CtmizedPTable @sendCPrice="childHandler" ref="childRef"></CtmizedPTable>
    <v-divider
      :thickness="2"
      color="#B7582A"
      class="border-opacity-100"
    ></v-divider>
    <v-card class="mx-auto" variant="tonal" color="#422e13">
      <v-card-item>
        <div>
          <div class="text-h7 text-right mb-1">
            Normal Product List Total: {{ totalPrice }}
          </div>
          <div class="text-h7 text-right mb-1">
            Customized Product List Total: {{ CtotalPrice }}
          </div>
          <div class="text-h6 text-right mb-1">
            Final Price:{{ totalPrice + CtotalPrice }}
          </div>
        </div>
      </v-card-item>

      <v-card-actions>
        <v-spacer></v-spacer>
        <div v-if="totalPrice != 0 || CtotalPrice != 0">
          <v-btn
            variant="elevated"
            @click="comfirmPurchase"
            size="x-large"
            color="#B7582A"
          >
            Check Out
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
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
import { useRouter } from "vue-router";
import axios from "axios";
import CtmizedPTable from "../../components/CtmizedPTableInCart.vue"; //../../components/CtmizedPTableInCart.vue

const apiurl = "https://localhost:7098/";
const getAll = "api/TempOrderDetailsAPI";
const deleteById = "api/TempOrderDetailsAPI";
const postById = "api/TempOrderDetailsAPI";
const router = useRouter();
let memberIdTosql = 1;
const employeeId = 1;

const Address = "https://localhost:7098";
//temporderdata
const todData = ref([]);

const totalPrice = ref(0);
const CtotalPrice = ref(0);

//由父組件呼叫子組建的function()
const childRef = ref(null);

//由子元件來呼叫，並把資料傳過來
const childHandler = (CPrice) => {
  CtotalPrice.value = CPrice;
};

//由父組件呼叫子組建的function()
function customizedPCheckOut() {
  if (childRef.value) {
    childRef.value.SaveToCombineDetail();
  }
}

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
  const products = JSON.parse(localStorage.getItem("addItemList")) || [];
  //const imagesFormData = products.map((p) => dataURLtoFormData(p.Img));
  // alert("Sent cart order to database");
  try {
    const res = await axios.post(`${apiurl}${postById}`, {
      id: memberIdTosql,
      totalp: totalPrice.value + CtotalPrice.value,
    });

    customizedPCheckOut();
    if (res.data === "None Data") {
      return "None Data";
    } else {
      initV();
      //go next payment page
      alert(res.data);
      router.push("/OrderSuccess");
      return res.data;
    }
  } catch (ex) {
    alert(ex + memberIdTosql + totalPrice.value);
  }
}

initV();
</script>

<style>
.custom-container {
  width: 80%;
  /* 調整container寬度 */
}
</style>
