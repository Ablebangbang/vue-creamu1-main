<template>
  <!-- <v-container> -->
  <div>
    <v-row justify="center">
      <v-col cols="10" align="start">
        <h3>Customized Product List</h3>
        <hr />
      </v-col>
      <div v-if="products.length == 0">
        <v-col cols="10" align="center">
          <br />
          <br />
          <br />
          <v-btn
            href="http://localhost:3000/customized"
            prepend-icon="mdi-cart-arrow-down"
            size="x-large"
            color="#B7582A"
            >Buy Now</v-btn
          >
        </v-col>
        <v-col cols="10" align="center">
          <h3>Opps! No Customized Product In Shopping Cart!</h3>
        </v-col>
      </div>
    </v-row>
    <v-row justify="center">
      <v-col cols="10">
        <v-expansion-panels>
          <!-- 動態新增-起始 -->
          <v-expansion-panel v-for="(product, index) in products" :key="index">
            <v-expansion-panel-title v-slot="{ open }">
              <v-row no-gutters align="center">
                <v-col cols="1" class="d-flex justify-center">
                  #{{ index + 1 }}
                </v-col>
                <v-col cols="3" justify="center">
                  <v-img
                    :src="product.Img"
                    width="100%"
                    class="bg-grey-lighten-2"
                  ></v-img>
                </v-col>
                <v-col cols="3" class="d-flex justify-start justify-center">
                  單價:{{ product.Info.unitprice }}元
                </v-col>
                <v-col cols="2" class="d-flex justify-start justify-center">
                  數量:{{ foramount[index].Info.amount }}
                </v-col>
                <v-col cols="3" class="d-flex justify-start justify-center">
                  小計:{{ product.Info.unitprice * product.Info.amount }}元
                </v-col>
              </v-row>
            </v-expansion-panel-title>

            <v-expansion-panel-text>
              <v-container>
                <v-row no-gutters align="auto">
                  <v-col>
                    <v-table class="text-center">
                      <thead>
                        <tr>
                          <th class="text-right padding-right">Body Part</th>
                          <th class="text-center">ComponentId</th>
                          <th class="text-center">SubTotal</th>
                          <th class="text-center">=</th>
                          <th class="text-center">Model</th>
                          <th class="text-center">Model-Price</th>
                          <th class="text-center">+</th>
                          <th class="text-center">Material</th>
                          <th class="text-center">Material-Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="index in 6" :key="index">
                          <td class="text-right">
                            {{ product.ComDetail[index - 1].type }}
                          </td>
                          <!--部位名稱-->
                          <td>{{ product.ComDetail[index - 1].comId }}</td>
                          <!--該部位的componentId-->
                          <td>{{ product.ComDetail[index - 1].comPrice }}</td>
                          <!--該部位的component的價格-->
                          <td>=</td>
                          <td>{{ product.ComDetail[index - 1].moId }}</td>
                          <!--該部位的modelId-->
                          <td>{{ product.ComDetail[index - 1].moPrice }}</td>
                          <!--該部位的model的價格-->
                          <td>+</td>
                          <td>{{ product.ComDetail[index - 1].maId }}</td>
                          <!--該部位的materilaId-->
                          <td>{{ product.ComDetail[index - 1].maPrice }}</td>
                          <!--該部位的materila的價格-->
                        </tr>
                      </tbody>
                    </v-table>
                  </v-col>
                </v-row>
                <v-row no-gutters align="center">
                  <v-spacer></v-spacer>

                  <v-col cols="3"> </v-col>

                  <v-divider vertical class="mx-4"></v-divider>

                  <v-col cols="1">
                    <p class="text-field-custom">數量：</p>
                  </v-col>
                  <v-col cols="3">
                    <v-text-field
                      v-model="foramount[index].Info.amount"
                      readonly
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
                  </v-col>
                </v-row>
              </v-container>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  :id="index"
                  variant="text"
                  color="#B7582A"
                  @click="deleteItem(index)"
                >
                  Delete
                </v-btn>
              </v-card-actions>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
  <!-- 動態新增-結束 -->
  <hr />
  <v-row justify="end">
    <v-col cols="10" align="end">
      <br />
      <h5>Customized Product List Total:{{ TotalPrice() }}</h5>
    </v-col>
  </v-row>
  <v-row justify="end">
    <v-col cols="6" align="end">
      <v-btn
        v-if="products.length != 0"
        size="x-large"
        color="#e5d2ab"
        @click="SaveToCombineDetail"
        hidden
        >Check out</v-btn
      >
    </v-col>
    <v-col cols="6" align="end">
      <v-btn
        v-if="products.length != 0"
        href="http://localhost:3000/customized"
        size="x-large"
        color="#B7582A"
        >Buy More Customized Product</v-btn
      >
    </v-col>
  </v-row>
  <!-- </v-container> -->
</template>

<script>
let routerport = "http://localhost:7098/";
import { defineEmits } from "vue";

export default {
  emits: ["sendCPrice"],
  data() {
    return {
      //先在此宣告要存放的變數位置
      products: JSON.parse(localStorage.getItem("addItemList")) || [], //此用來取整個localStorate
      foramount: JSON.parse(localStorage.getItem("addItemList")) || 1, //此用來取購買數量用，會另外取是因為想要在購物車裡可以動態更改數量
      value: 1,
      //products: ProdList,
      imgs: [],
    };
  },
  methods: {
    increment() {
      this.value++;
      //foramount[index].Info.amount++;
    },
    decrement() {
      if (this.value /*foramount[index].Info.amount*/ > 1) {
        this.value--;
        //foramount[index].Info.amount--;
      }
    },
    deleteItem(e) {
      console.log("刪掉了" + e);
      //從list刪掉該項目
      this.products.splice(e, 1);
      //更新localStorage
      localStorage.setItem("addItemList", JSON.stringify(this.products));
    },
    TotalPrice() {
      let sum = 0;
      console.log(this.products.length);

      for (let i = 0; i < this.products.length; i++) {
        let unitP = this.products[i].Info.unitprice;
        let amount = this.products[i].Info.amount;
        sum += unitP * amount;
      }
      this.$emit("sendCPrice", sum);
      return sum;
    },
    //轉換截圖的檔案類型
    dataURLtoFormData(dataurl, filename) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      this.imgs = [];

      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      //儲存圖片Name
      this.imgs.push(filename);
      return new File([u8arr], filename, { type: mime });
    },
    //保存圖片
    async uploadPhoto(file) {
      const id = 1;
      const PhotoImage = new FormData();
      PhotoImage.append("photo", file);
      try {
        const res = await fetch(`${routerport}api/Orderimgs/${id}/upload`, {
          method: "POST",
          body: PhotoImage,
        });

        if (res.ok) {
          console.log("upload product images ok");
        } else {
          console.error("upload product images fail", res.error);
        }
      } catch (error) {
        console.error("上傳照片時發生錯誤：", error);
      }
    },
    //存到CombineDetail
    async SaveToCombineDetail() {
      if (this.products.length == 0) {
        return "None C data";
      } else {
        const data = this.products.map((product) => {
          return {
            Chead: product.ComDetail[0].comId,
            Cbody: product.ComDetail[1].comId,
            Clhand: product.ComDetail[2].comId,
            Crhand: product.ComDetail[3].comId,
            Clfoot: product.ComDetail[4].comId,
            Crfoot: product.ComDetail[5].comId,
            SubTotal: product.Info.unitprice,
            Type: product.Info.type,
          };
        });
        console.log(data);
        // const imgdata = this.imgs.map((img) => {
        //   return{
        //     OrderID:img.value,
        //     fPath:img.value,
        //   }
        // });

        const imagesFormData = this.products.map((p) =>
          this.dataURLtoFormData(p.Img)
        );
        imagesFormData.forEach(async (formData) => {
          await this.uploadPhoto(formData);
        });
        //await this.uploadPhoto(imagesFormData[0]);

        //fetch儲存到CombineDetail的API
        const response = await fetch(
          `${routerport}api/saveCombineDetail?combineDetail=${JSON.stringify(
            data
          )}`
        );
        //response return的值
        const result = await response.text();
        //清除LocalStorage裡的客製化商品清單
        localStorage.removeItem("addItemList");
        console.log(result);

        // const response2 = await fetch(
        //   `${routerport}api/saveOrderimgs?orderimgs=${JSON.stringify(imgdata)}`
        // );
        // const result2 = await response2.text();
        // console.log(result2);
      }
    },
  },
  mounted() {
    this.products = JSON.parse(localStorage.getItem("addItemList")) || [];
  },
};
</script>

<style scoped>
/* 添加自定義的class來改變文本的大小和粗細 */
.text-field-custom {
  font-size: 20px; /* 更改文本大小 */
  font-weight: bold; /* 更改文本粗細 */
}
</style>
