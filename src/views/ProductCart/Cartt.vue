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
          <span class="progressbar-text" style="background-color: #e5d2ab">確認購物車</span>
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
    <v-row justify="center">
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
                <v-btn :id="index" variant="text" color="#B7582A" @click="delTOD(i.id)">
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
        <v-btn href="http://localhost:3000/productList" size="x-large" color="#B7582A">Buy More Normal Product</v-btn>
      </v-col>
    </v-row>

    <v-divider :thickness="2" color="#B7582A" class="border-opacity-25"></v-divider>
    <!-- 商品總價與次要選項 -->

    <CtmizedPTable @sendCPrice="childHandler" ref="childRef"></CtmizedPTable>
    <v-divider :thickness="2" color="#B7582A" class="border-opacity-100"></v-divider>
    <v-card class="mx-auto" variant="tonal" color="#422e13">
      <v-card-item>
        <div>
          <div class="text-overline text-right mb-1">
            Normal Product List Total: {{ totalPrice }}
          </div>
          <div class="text-overline text-right mb-1">
            Customized Product List Total: {{ CtotalPrice }}
          </div>
          <div class="text-h6 text-right mb-1">
            Final Price:{{ totalPrice + CtotalPrice }}
          </div>
        </div>
      </v-card-item>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="elevated" @click="comfirmPurchase" size="x-large" color="#B7582A">
          Check Out
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-card>
      <form id="form" name="form" method="POST" action="https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5">
        <div v-for="(value, key) in ecpaypaymentinfo" :key="key">
          <input :type="Text" :id="key" v-model="ecpaypaymentinfo[key]" hidden />
        </div>
        <button type="submit">ToECpay</button>
      </form>
    </v-card>

    <!-- <form id="form" name="form" method="POST" action="https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5"> -->
    <!--step2 : 收到後端的值印出來-->
    <!-- <div v-for="i in ecpaypaymentinfo">
        <input type="text" :name=ik value={{ i.value }} hidden/>

      </div>
      <input type="text" name="MerchantTradeDate" value={{ ecpaypaymentinfo.MerchantTradeDate }} /><br />
      <input type="text" name="PaymentType" value={{ ecpaypaymentinfo.PaymentType }} /><br />
      <input type="text" name="TotalAmount" value={{ ecpaypaymentinfo.TotalAmount }} /><br />
      <input type="text" name="TradeDesc" value={{ ecpaypaymentinfo.MerchantTradeNo }} /><br />
      <input type="text" name="MerchantTradeNo" value={{ ecpaypaymentinfo.MerchantTradeNo }} /><br />
      <input type="text" name="MerchantTradeNo" value={{ ecpaypaymentinfo.MerchantTradeNo }} /><br />
      <input type="text" name="MerchantTradeNo" value={{ ecpaypaymentinfo.MerchantTradeNo }} /><br />
      <input type="text" name="MerchantTradeNo" value={{ ecpaypaymentinfo.MerchantTradeNo }} /><br />
      <input type="text" name="MerchantTradeNo" value={{ ecpaypaymentinfo.MerchantTradeNo }} /><br />
      <input type="text" name="MerchantTradeNo" value={{ ecpaypaymentinfo.MerchantTradeNo }} /><br />
      <input type="text" name="MerchantTradeNo" value={{ ecpaypaymentinfo.MerchantTradeNo }} /><br />
      <button type="submit" id="checkoutBtn">送出</button>
    </form> -->


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
import CtmizedPTable from "../../components/CtmizedPTableInCart.vue"; //../../components/CtmizedPTableInCart.vue

// const { createHash } = require('crypto');

const apiurl = "https://localhost:7098/";
const getAll = "api/TempOrderDetailsAPI";
const deleteById = "api/TempOrderDetailsAPI";
const postById = "api/TempOrderDetailsAPI";
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

//ecpay attribute
const ecpaypaymentinfo = ref([]);

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

    //sent customized product data
    customizedPCheckOut();


    //ecpay process
    const toecpay = totalPrice.value + CtotalPrice.value;
    ecpayactive(toecpay);

    //error process
    if (res.data === "None Data") {
      return "None Data";
    } else {
      initV();
      //go next payment page
      alert(res.data);
      return res.data;
    }
  } catch (ex) {
    alert(ex + memberIdTosql + totalPrice.value);
  }
}

//ECPAY
async function ecpayactive(ecpaytotalprice) {
  // alert("ecactive")
  let purchaseOrderId = _uuid().replace("-", "");
  alert("sent _uuid");
  purchaseOrderId = purchaseOrderId.substring(0, 20);
  alert("cut uuid to 20")
  // let myapi = "https://localhost:7098/";

  ecpaypaymentinfo.value = {
    MerchantTradeNo: purchaseOrderId,
    MerchantTradeDate: forEcpayGetDate(),
    //aio
    PaymentType: "aio",

    TotalAmount: ecpaytotalprice,
    TradeDesc: "無",
    ItemName: "CreamU Product",
    ExpireDate: "3",
    CustomField1: "",
    CustomField2: "",
    CustomField3: "",
    CustomField4: "",
    ReturnURL: "https://www.youtube.com/",
    //use new merchant id or old id    new 3002607    old 2000132
    MerchantID: "3002607",
    EncryptType: 1,
    //aio
    ClientBackURL: "https://www.youtube.com/",
    //not necessary
    //IgnorePayment: "GooglePay#WebATM#CVS#BARCODE",
    ChoosePayment: "ALL",
    CheckMacValue: ""
  };
  //check
  alert("post yet");

  //add cryto
  ecpaypaymentinfo.value.CheckMacValue = await getCheckMacValue(ecpaypaymentinfo);
  alert("get checkmac cryto")
  //got to ecpay page
  // const ecres = await axios.post(`https://cors-anywhere.herokuapp.com/https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5`,
  //   ecpaypaymentinfo, {
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded'
  //   }
  // });
  alert("post finish");
}


//ecpay machin number
function _uuid() {
  var d = Date.now();
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now(); //use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

//add date format
function forEcpayGetDate() {

  // Create a new Date object (current date and time)
  const currentDate = new Date();

  // Get individual components of the date
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(currentDate.getDate()).padStart(2, '0');
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');

  // Format the date as "yyyy/MM/dd HH:mm:ss"
  const formattedDate = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
  alert("im date" + formattedDate);
  return formattedDate;
}

//hash cryto
async function getCheckMacValue(order) {

  const orderedKeys = Object.keys(order).sort();
  const param = orderedKeys.map(key => `${key}=${order[key]}`);
  const checkValue = param.join('&');
  //use new hash key or iv
  //new key pwFHCqoQZGmho4w6 iv EkRm7iFT261dpevs
  //old key 5294y06JbISpM5x9 iv v77hoKGq4kWxNNIS
  const hashKey = "pwFHCqoQZGmho4w6";
  const hashIV = "EkRm7iFT261dpevs";
  let combinedValue = `HashKey=${hashKey}&${checkValue}&HashIV=${hashIV}`;
  combinedValue = encodeURIComponent(combinedValue).toLowerCase();
  const sha256Value = await getSHA256(combinedValue);
  alert(sha256Value.toUpperCase());
  return sha256Value.toUpperCase();
}

//sha256 crypto solution
async function getSHA256(value) {
  alert("in 256")
  const encoder = new TextEncoder();
  const data = encoder.encode(value);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
  alert("crypto finish");
  return hashHex;
}



initV();
</script>

<style>
.custom-container {
  width: 80%;
  /* 調整container寬度 */
}
</style>
