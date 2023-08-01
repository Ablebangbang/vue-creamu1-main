<template>
  <h2>Selected Component & Price</h2>
  <!-- <p>1231123{{ imgData }}</p>
  <img id="capturedImage2" src="" alt="Captured Screenshot" /> -->
  <v-table class="text-center">
    <thead>
      <tr>
        <th class=""></th>
        <th class="text-center"></th>
        <th class="text-center">Model</th>
        <th class="text-center"></th>
        <th class="text-center">+</th>
        <th class="text-center"></th>
        <th class="text-center">Material</th>
        <th class="text-center"></th>
        <th class="text-center">=</th>
        <th class="text-center" colspan="2">Component</th>
      </tr>
      <tr>
        <th class="text-right padding-right">Body Part</th>
        <th class="text-center">Id</th>
        <th class="text-center">Name</th>
        <th class="text-center">Price</th>
        <th class="text-center">+</th>
        <th class="text-center">Id</th>
        <th class="text-center">Name</th>
        <th class="text-center">Price</th>
        <th class="text-center">=</th>
        <th class="text-center">Id</th>
        <th class="text-center">SubTotal</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-right">Head</td>
        <td id="">{{ moId.headId }}</td>
        <td id="head"></td>
        <td id="">{{ head_mo_price }}</td>
        <td id="">+</td>
        <td id="">{{ maId.head_m_Id }}</td>
        <td id="head_M"></td>
        <td id="">{{ head_m_price }}</td>
        <td id="">=</td>
        <td id="">{{ comId.c_head_Id }}</td>
        <td id="">{{ head_mo_price + head_m_price }}</td>
      </tr>
      <tr>
        <td class="text-right">Body</td>
        <td id="">{{ bodyId }}</td>
        <td id="body"></td>
        <td id="">{{ body_mo_price }}</td>
        <td id="">+</td>
        <td id="">{{ body_m_Id }}</td>
        <td id="body_M"></td>
        <td id="">{{ body_m_price }}</td>
        <td id="">=</td>
        <td id="">{{ comId.c_body_Id }}</td>
        <td id="">{{ body_mo_price + body_m_price }}</td>
      </tr>
      <tr>
        <td class="text-right">Right Hand</td>
        <td id="">{{ rhandId }}</td>
        <td id="rhand"></td>
        <td id="">{{ rhand_mo_price }}</td>
        <td id="">+</td>
        <td id="">{{ rhand_m_Id }}</td>
        <td id="rhand_M"></td>
        <td id="">{{ rhand_m_price }}</td>
        <td id="">=</td>
        <td id="">{{ comId.c_rhand_Id }}</td>
        <td id="">{{ rhand_mo_price + rhand_m_price }}</td>
      </tr>
      <tr>
        <td class="text-right">Left Hand</td>
        <td id="">{{ lhandId }}</td>
        <td id="lhand"></td>
        <td id="">{{ lhand_mo_price }}</td>
        <td id="">+</td>
        <td id="">{{ lhand_m_Id }}</td>
        <td id="lhand_M"></td>
        <td id="">{{ lhand_m_price }}</td>
        <td id="">=</td>
        <td id="">{{ comId.c_lhand_Id }}</td>
        <td id="">{{ lhand_mo_price + lhand_m_price }}</td>
      </tr>
      <tr>
        <td class="text-right">Right Foot</td>
        <td id="">{{ rfootId }}</td>
        <td id="rfoot"></td>
        <td id="">{{ rfoot_mo_price }}</td>
        <td id="">+</td>
        <td id="">{{ rfoot_m_Id }}</td>
        <td id="rfoot_M"></td>
        <td id="">{{ rfoot_m_price }}</td>
        <td id="">=</td>
        <td id="">{{ comId.c_rfoot_Id }}</td>
        <td id="">{{ rfoot_mo_price + rfoot_m_price }}</td>
      </tr>
      <tr>
        <td class="text-right">Left Foot</td>
        <td id="">{{ lfootId }}</td>
        <td id="lfoot"></td>
        <td id="">{{ lfoot_mo_price }}</td>
        <td id="">+</td>
        <td id="">{{ lfoot_m_Id }}</td>
        <td id="lfoot_M"></td>
        <td id="">{{ lfoot_m_price }}</td>
        <td id="">=</td>
        <td id="">{{ comId.c_lfoot_Id }}</td>
        <td id="">{{ lfoot_mo_price + lfoot_m_price }}</td>
      </tr>
    </tbody>
  </v-table>
  <br />
  <p class="UnitP">Unit Price:{{ calculateSum() }}</p>
  <v-text-field
    v-model="amount"
    text-align="center"
    style="width: 200px; height: 40px"
  >
    <template v-slot:append>
      <v-btn @click="increment" variant="text" icon>
        <v-icon size="small">mdi-plus</v-icon>
      </v-btn>
    </template>
    <template v-slot:prepend>
      <v-btn @click="decrement" variant="text" icon>
        <v-icon size="small">mdi-minus</v-icon>
      </v-btn>
    </template>
  </v-text-field>

  <p class="TotalP">Total Price:{{ calculateSum() * amount }}</p>

  <br />
  <v-row>
    <v-col cols="9" align="end">
      <v-btn size="x-large" color="#e5d2ab" href="http://localhost:3000/Cart"
        >Go to Cart</v-btn
      >
    </v-col>
    <v-col cols="3" align="end">
      <v-btn size="x-large" color="#e5d2ab" @click="AddToCart">Buy Now</v-btn>
    </v-col>
  </v-row>

  <!-- <v-btn size="x-large" color="#e5d2ab" @click="Cclean">Delete</v-btn> -->
  <!-- <v-btn size="x-large" color="#e5d2ab" @click="ScreenShot">Test</v-btn> -->
</template>

<script>
//有setup就可以省掉return
import { ref } from "vue";

const components = [];

let routerport = "https://localhost:7098/";

export default {
  data() {
    //初始值
    return {
      datas: {},
      head_mo_price: 0,
      head_m_price: 0,
      body_mo_price: 0,
      body_m_price: 0,
      rhand_mo_price: 0,
      rhand_m_price: 0,

      lhand_mo_price: 0,
      lhand_m_price: 0,
      rfoot_mo_price: 0,
      rfoot_m_price: 0,
      lfoot_mo_price: 0,
      lfoot_m_price: 0,

      moId: {
        headId: 300006,
        bodyId: 300007,
        rhandId: 300008,
        lhandId: 300009,
        rfootId: 300010,
        lfootId: 300011,
      },

      maId: {
        head_m_Id: 200001,
        body_m_Id: 200001,
        rhand_m_Id: 200001,
        lhand_m_Id: 200001,
        rfoot_m_Id: 200001,
        lfoot_m_Id: 200001,
      },

      //com_head_Id: 0,
      comId: {
        c_head_Id: 0,
        c_body_Id: 0,
        c_rhand_Id: 0,
        c_lhand_Id: 0,
        c_rfoot_Id: 0,
        c_lfoot_Id: 0,
      },
      amount: 1,
      imgData: "",
    };
  },

  mounted() {
    //model+material=component的價格
    const sigh = async () => {
      try {
        //Model

        //找到標籤
        const headField = document.getElementById("head");
        if (!headField) return;

        const bodyField = document.getElementById("body");
        const rhField = document.getElementById("rhand");
        const lhField = document.getElementById("lhand");
        const rfField = document.getElementById("rfoot");
        const lfField = document.getElementById("lfoot");

        this.head_mo_price = this.datas[headField.innerText].price;
        this.body_mo_price = this.datas[bodyField.innerText].price;
        this.rhand_mo_price = this.datas[rhField.innerText].price;
        this.lhand_mo_price = this.datas[lhField.innerText].price;
        this.rfoot_mo_price = this.datas[rfField.innerText].price;
        this.lfoot_mo_price = this.datas[lfField.innerText].price;

        this.headId = this.datas[headField.innerText].modelId;
        this.bodyId = this.datas[bodyField.innerText].modelId;
        this.rhandId = this.datas[rhField.innerText].modelId;
        this.lhandId = this.datas[lhField.innerText].modelId;
        this.rfootId = this.datas[rfField.innerText].modelId;
        this.lfootId = this.datas[lfField.innerText].modelId;

        //Material
        const headMtrl = document.getElementById("head_M");
        const bodyMtrl = document.getElementById("body_M");
        const rhMtrl = document.getElementById("rhand_M");
        const lhMtrl = document.getElementById("lhand_M");
        const rfMtrl = document.getElementById("rfoot_M");
        const lfMtrl = document.getElementById("lfoot_M");

        this.head_m_price = this.datas[headMtrl.innerText].price;
        this.body_m_price = this.datas[bodyMtrl.innerText].price;
        this.rhand_m_price = this.datas[rhMtrl.innerText].price;
        this.lhand_m_price = this.datas[lhMtrl.innerText].price;
        this.rfoot_m_price = this.datas[rfMtrl.innerText].price;
        this.lfoot_m_price = this.datas[lfMtrl.innerText].price;

        this.head_m_Id = this.datas[headMtrl.innerText].materialId;
        this.body_m_Id = this.datas[bodyMtrl.innerText].materialId;
        this.rhand_m_Id = this.datas[rhMtrl.innerText].materialId;
        this.lhand_m_Id = this.datas[lhMtrl.innerText].materialId;
        this.rfoot_m_Id = this.datas[rfMtrl.innerText].materialId;
        this.lfoot_m_Id = this.datas[lfMtrl.innerText].materialId;
      } catch (error) {}
    };
    //API:載入model和material
    const loadDB = async () => {
      const res = await fetch(`${routerport}api/Models`);
      (await res.json()).forEach((element) => {
        this.datas[element.modelName] = element;
      });
      const res2 = await fetch(`${routerport}api/Materials`);
      (await res2.json()).forEach((element) => {
        this.datas[element.materialName] = element;
      });

      const intervalId = setInterval(() => {
        const headField = document.getElementById("head");

        if (!headField) return;
        sigh();
        // clearInterval(intervalId);
      }, 100);
    };
    loadDB();
  },
  updated() {
    // 將 Blob 轉換成臨時的 URL 並顯示
    // const blobUrl = URL.createObjectURL(localStorage.getIte("imgBlob"));

    //用來放圖片，之後把此功能移到告物車
    // const capturedImage2 = document.querySelector("#capturedImage2");
    // capturedImage2.src = localStorage.getItem("imgBlob");

    //查找Component
    const getComponent = async () => {
      try {
        // 通过 Promise.all 發起多個fetch
        const requests = [
          fetch(
            `${routerport}api/Components/model/${this.headId}/material/${this.head_m_Id}`
          ),
          fetch(
            `${routerport}api/Components/model/${this.bodyId}/material/${this.body_m_Id}`
          ),
          fetch(
            `${routerport}api/Components/model/${this.rhandId}/material/${this.rhand_m_Id}`
          ),
          fetch(
            `${routerport}api/Components/model/${this.lhandId}/material/${this.lhand_m_Id}`
          ),
          fetch(
            `${routerport}api/Components/model/${this.rfootId}/material/${this.rfoot_m_Id}`
          ),
          fetch(
            `${routerport}api/Components/model/${this.lfootId}/material/${this.lfoot_m_Id}`
          ),
        ];

        // 等待所有请求都完成
        const responses = await Promise.all(requests);

        // 解析API回傳的數據並更新comId對應的值
        const data = await Promise.all(
          responses.map((response) => response.json())
        );

        this.comId.c_head_Id = data[0][0].componentId;
        this.comId.c_body_Id = data[1][0].componentId;
        this.comId.c_rhand_Id = data[2][0].componentId;
        this.comId.c_lhand_Id = data[3][0].componentId;
        this.comId.c_rfoot_Id = data[4][0].componentId;
        this.comId.c_lfoot_Id = data[5][0].componentId;
        return data;
      } catch (error) {
        console.error(error);
        return null;
      }
    };
    getComponent();
  },
  //讓這邊可以抓到圖片路徑
  methods: {
    ScreenShot() {
      this.$emit("sendimg-event");
    },

    //算總數
    calculateSum() {
      let sum = 0;
      const variables = Object.keys(this.$data);
      for (let i = 0; i < 12; i++) {
        const variable = variables[i];
        if (typeof this.$data[variable] === "number") {
          sum += this.$data[variable];
        }
      }
      return sum;
    },
    AddToCart() {
      //console.log("在子組件中" + this.imgData);
      this.$emit("sendimg-event");
      //寫入
      //宣告List，如果localStorage已經有值就放入變數，若沒有就給一個空值。
      let ProdList = JSON.parse(localStorage.getItem("addItemList")) || [];
      //建立物件
      const Productdata = {
        Img: localStorage.getItem("imgBlob"), //客製畫面截圖
        Info: {
          unitprice: this.calculateSum(), //一組客製化的單價。用於填入CombindDetail的SubTotal欄位
          amount: this.amount, //同一組客製化買了幾隻
          type: 0, //屬於客製化還是固定式商品，此為客製化故選0。用於填入CombindDetail的Type欄位
        },
        ComDetail: [
          {
            type: "CHead", //下方資料屬於 資料庫資料表CombindDetail 的欄位名稱：CHead
            comId: this.comId.c_head_Id, //component的ID ex:400007。用於填入CombindDetail的CHead欄位
            comPrice: this.head_mo_price + this.head_m_price, //component的價格
            moId: this.moId.headId, //model的ID
            moPrice: this.head_mo_price, //model的Price
            maId: this.maId.head_m_Id, //material的ID
            maPrice: this.head_m_price, //material的價格
          },
          {
            type: "CBody", //下方資料屬於 資料庫資料表CombindDetail 的欄位名稱：CBody
            comId: this.comId.c_body_Id, //component的ID ex:400015。用於填入CombindDetail的CBody欄位
            comPrice: this.body_mo_price + this.body_m_price,
            moId: this.moId.bodyId,
            moPrice: this.body_mo_price,
            maId: this.maId.body_m_Id,
            maPrice: this.body_m_price,
          },
          {
            type: "CLhand",
            comId: this.comId.c_lhand_Id,
            comPrice: this.lhand_mo_price + this.lhand_m_price,
            moId: this.moId.lhandId,
            moPrice: this.lhand_mo_price,
            maId: this.maId.lhand_m_Id,
            maPrice: this.lhand_m_price,
          },
          {
            type: "CRhand",
            comId: this.comId.c_rhand_Id,
            comPrice: this.rhand_mo_price + this.rhand_m_price,
            moId: this.moId.rhandId,
            moPrice: this.rhand_mo_price,
            maId: this.maId.rhand_m_Id,
            maPrice: this.rhand_m_price,
          },
          {
            type: "CLFoot",
            comId: this.comId.c_lfoot_Id,
            comPrice: this.lfoot_mo_price + this.lfoot_m_price,
            moId: this.moId.lfootId,
            moPrice: this.lfoot_mo_price,
            maId: this.maId.lfoot_m_Id,
            maPrice: this.lfoot_m_price,
          },
          {
            type: "CRFoot",
            comId: this.comId.c_rfoot_Id,
            comPrice: this.rfoot_mo_price + this.rfoot_m_price,
            moId: this.moId.rfootId,
            moPrice: this.rfoot_mo_price,
            maId: this.maId.rfoot_m_Id,
            maPrice: this.rfoot_m_price,
          },
        ],
      };
      //把物件存到List
      ProdList.push(Productdata);
      //用setItem存到localStorage。("Key",value)
      localStorage.setItem("addItemList", JSON.stringify(ProdList)); //用於加入購物車的
      //用removeItem("key")移除localStorage
      localStorage.removeItem("imgBlob"); //用於暫存截圖的

      alert("已加入購物車");
    },
    props: ["imgData"],
    //清除localStorage
    Cclean() {
      localStorage.removeItem("addItemList");
      this.head_m_price = "";
      alert("已清除");
    },
    //控制購買數量
    increment() {
      this.amount++;
    },
    decrement() {
      if (this.amount > 1) {
        this.amount--;
      }
    },
  },
  created() {
    const sum = this.calculateSum();
    //console.log(sum);
  },
};
</script>

<style csope>
.UnitP {
  font-size: 25px;
  text-align: right;
}
.TotalP {
  font-size: 30px;
  text-align: right;
}
th:first-child {
  border-right: 1px solid #adadad;
  background-color: #dbdbdb;
}
td:first-child {
  border-right: 1px solid #adadad;
  background-color: #dbdbdb;
}
th {
  background-color: #e0dacc;
}
/* 添加自定義的class來改變文本的大小和粗細 */
</style>
