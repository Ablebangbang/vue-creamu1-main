<template>
  <v-container>
    <h1>Customized Your Model</h1>
    <v-card variant="" class="mx-auto">
      <v-container>
        <v-row justify="center">
          <v-col cols="10">
            <v-img cover margin-right="50" margin-left="50">
              <div padding="50">
                <br />
                <p class="text-center">
                  You have the power to customize your model right here in the
                  canvas. Simply click on the combobox and choose the model for
                  each body part. Take full control of the look and feel of your
                  model.
                </p>

                <p class="text-center">
                  Not only that, but you can also select the material that you
                  absolutely adore. Let your creativity shine as you explore
                  different materials to give your model that perfect touch.
                </p>

                <p class="text-center">
                  Unleash your imagination and create a truly unique and
                  personalized model. The possibilities are endless, so go ahead
                  and make your masterpiece come to life.
                </p>
              </div>
            </v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <br />
    <v-row justify="center">
      <v-col cols="auto">
        <div style="display: grid; place-items: center">
          <!--class="webgl-content"-->
          <div id="unityContainer" style="width: 960px; height: 540px"></div>
        </div>
        <!-- <v-btn
          id="screenshot"
          type="button"
          size="x-large"
          color="#e5d2ab"
          @click="captureScreenshot"
          >Save</v-btn
        > -->
        <!-- <img id="capturedImage" src="" alt="Captured Screenshot" /> -->
        <br />
        <CalculateTable
          @sendimg-event="captureScreenshot"
          :imgData="bblob"
        ></CalculateTable
        ><!--:bblob="bblob"用來傳給子組件-->
        <!-- <CalculateTable2></CalculateTable2> -->

        <br />
        <!-- <Info></Info> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// 用於啟動Unity
export default {
  components: {
    CalculateTable,
    //Info,
  },
  data() {
    return {
      bblob: "default",
    };
  },
  beforeCreate() {
    let script1 = document.createElement("script");
    script1.setAttribute("src", "Build/UnityLoader.js");
    document.head.appendChild(script1);
    let script2 = document.createElement("script");
    script2.setAttribute("src", "TemplateData/UnityProgress.js");
    document.head.appendChild(script2);
  },
  mounted() {
    const loadUnity = () => {
      const unityInstance = UnityLoader.instantiate(
        "unityContainer",
        "Build/WebGL0619.json", //Unity有換檔案要改這裡，還有public裡的檔案
        {
          onProgress: UnityProgress,
          Module: {
            webglContextAttributes: { preserveDrawingBuffer: true }, //用於截圖的設定
          },
        }
      );
      const recaptureInputAndFocus = () => {
        var canvas = document.getElementById("canvas");

        if (canvas) {
          canvas.setAttribute("tabindex", "1");
          canvas.focus();
        } else {
          setTimeout(this.recaptureInputAndFocus, 100);
        }
      };
      recaptureInputAndFocus();
    };
    const checkIntervalId = setInterval(() => {
      if (UnityLoader) {
        loadUnity();
        clearInterval(checkIntervalId);
      }
    }, 500);
  },
  methods: {
    //截圖功能
    captureScreenshot() {
      //宣告與找到button
      //const elem = document.querySelector("#screenshot");
      // 获取 WebGL 渲染的 <canvas> 元素
      const canvas = document.getElementById("canvas");
      //不觸發跨域安全性問題，因此才可繪製圖片
      canvas.crossOrigin = "Anonymous";
      //const capturedImage = document.querySelector("#capturedImage");
      //let capturedBlob = null; // 變數用於儲存截圖的 Blob 對象
      //點擊事件觸發截圖
      localStorage.setItem("imgBlob", canvas.toDataURL()); //將圖像轉化成DataURL(Base64編碼)，並存到localStorage中
      this.bblob = canvas.toDataURL();
      //console.log(this.bblob);
      canvas.toBlob((blob) => {
        //capturedBlob = blob; // 將截圖的 Blob 儲存到 capturedBlob 中
        //object才可以傳出去
        //僅在此頁面中顯示
        // 將 Blob 轉換成臨時的 URL 並顯示
        //const blobUrl = URL.createObjectURL(capturedBlob);
        //capturedImage.src = blobUrl;
        //});
      });
    },

    sendImg() {},
  },
};
</script>

<script setup>
import CalculateTable from "../../components/CalculateTable.vue";
//import CalculateTable2 from "../assets/components/CalculateTable2.vue";
//import Info from "../../components/Info.vue";
//#B7582A
</script>

<style>
p {
  color: #000000;
}
</style>
