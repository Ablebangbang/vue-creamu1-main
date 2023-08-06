<script setup>
import { onMounted, onUnmounted } from "vue";

//example components

import Header from "../../examples/Header.vue";
// import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";

//Vue Material Kit 2 components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";

// sections
import PresentationCounter from "./Sections/PresentationCounter.vue";
import PresentationPages from "./Sections/PresentationPages.vue";
import PresentationExample from "./Sections/PresentationExample.vue";
import data from "./Sections/Data/designBlocksData";
// import BuiltByDevelopers from "./Components/BuiltByDevelopers.vue";
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
import PresentationInformation from "./Sections/PresentationInformation.vue";

//images
import vueMkHeader from "@/assets/img/header1.jpg";
// import wavesWhite from "@/assets/img/waves-white.svg";
import logoBootstrap from "../../assets/img/1 (1).jpg";
import logoTailwind from "../../assets/img/1 (2).jpg";
import logoVue from "../../assets/img/1 (3).jpg";
import logoAngular from "../../assets/img/1 (4).jpg";
import logoReact from "../../assets/img/1 (5).jpg";
import logoSketch from "../../assets/img/1 (6).jpg";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
//旋轉木馬

        const colors= [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ]
        const slides=[
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ]

        //
        const item= [
          {
            src: '../../../public/cycle/head1.png',
          },
          {
            src: '../../../src/assets/img/cycle/head2.png',
          },
          {
            src: '../../../src/assets/img/cycle/head3.png',
          },
          {
            src: '../../../public/cycle/head1.png',
          },
        ]
        const items= [
          {
            src: '../../../public/cycle/body1.png',
          },
          {
            src: '../../../src/assets/img/cycle/body2.png',
          },
          {
            src: '../../../src/assets/img/cycle/body3.png',
          },
          {
            src: '../../../src/assets/img/cycle/body3.png',
          },
        ]
        
      
    
  
</script>

<template>
  
  <Header>
    <div
      class="page-header min-vh-75"
      :style="`background-image: url(${vueMkHeader})`"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1 
              class="text-white pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block ' }" 
            >
              CreamU
            </h1>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
             Create for you ,Create from us.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <PresentationCounter />
    <PresentationInformation />
    <PresentationExample :data="data" />
    <PresentationPages />

    <!-- <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <FilledInfoCard
            class="p-4"
            :color="{ text: 'white', background: 'bg-gradient-success' }"
            :icon="{ component: 'flag', color: 'white' }"
            title="Getting Started"
            description="Check the possible ways of working with our product and the necessary files for building your own project."
            :action="{
              route:
                'https://www.creative-tim.com/learning-lab/vue/overview/material-kit/',
              label: { text: 'Let\'s start', color: 'white' },
            }"
          />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard
            class="px-lg-1 mt-lg-0 mt-4 p-4"
            height="h-100"
            :icon="{ component: 'precision_manufacturing', color: 'success' }"
            title="Plugins"
            description="Get inspiration and have an overview about the plugins that we
                used to create the Material Kit."
            :action="{
              route:
                'https://www.creative-tim.com/learning-lab/vue/input/material-kit/',
              label: { text: 'Read more' }
            }"
          />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard
            class="px-lg-1 mt-lg-0 mt-4 p-4"
            :icon="{ component: 'receipt_long', color: 'success' }"
            title="Utility Classes"
            description="Material Kit is giving you a lot of pre-made elements. For those
                who want flexibility, we included many utility classes."
            :action="{
              route:
                'https://www.creative-tim.com/learning-lab/vue/utilities/material-kit/',
              label: { text: 'Read more' }
            }"
          />
        </div>
      </div>
    </div> -->
    <PresentationTestimonials /><!--這是留言版的原件-->

    <!-- <div
      class="container-fluid mt-sm-5 border-radius-xl"
      :style="{
        background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))'
      }"
    >
      <div
        class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl"
        :style="{
          backgroundImage: `url(${wavesWhite})`
        }"
        loading="lazy"
      >
        <span class="mask bg-gradient-dark"></span>
        <div class="container">
          <div class="row">
            <div class="d-flex justify-content-center p-5">
              <div class="col-lg-8 ms-lg-5 text-center">
                <h3 class="text-white">
                  Do you love this awesome UI Kit from Vuejs & Bootstrap?
                </h3>
                <p class="text-white text-md">
                  Cause if you do, it can be yours for FREE. Hit the button
                  below to navigate to Creative Tim where you can <br />
                  find the Design System in HTML. Start a new project or give an
                  old Bootstrap project a new look!
                </p>

                <a
                  href="https://www.creative-tim.com/product/vue-material-kit"
                  class="btn btn-sm mb-0 bg-gradient-success px-5 py-3 mt-4"
                  >Download Now</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- first -->
    <!-- <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>  -->
    <!-- ---------------------------------------------first-->
  <v-carousel show-arrows="hover"
  cycle
  vertical-delimiters="left"
  interval="2000"
  height="600"
  reverse
  progress="true"
  >
    <v-carousel-item
      v-for="(item,i) in item"
      :key="i"
      :src="item.src"
      cover
      
    ></v-carousel-item>
  </v-carousel>
    <!-- --------------------------------------------- second-->
  <v-carousel show-arrows="hover"
  cycle
  vertical-delimiters="left"
  interval="2000"
  height="400"
  progress="true"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
      
    ></v-carousel-item>
  </v-carousel>
<!-- --------------------------------------------- -->
    <div class="container">
      <div class="row">
        <div class="d-flex flex-column w-100 text-center p-5 mb-8">
          <h3>本網站僅供資展協會133期作業展示使用，如有任何侵權問題，歡迎告知以下任意人員</h3>
          <div class="d-flex justify-content-center mt-3 flex-wrap">
            <a
              href="http://localhost:3000/"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="1號"
            >
              <img
                :src="logoBootstrap"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
            <a
              class="opacity-5 ms-3"
              href="#"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="2號已離職"
            >
              <img
                :src="logoTailwind"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
            <a
              href="http://localhost:3000/"
              class="mx-3"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="3號"
            >
              <img
                :src="logoVue"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
            <a
              class="opacity-5"
              href="#"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="4號已殉職"
            >
              <img
                :src="logoAngular"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
            <a
              href="http://localhost:3000/"
              class="mx-3"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="5號"
            >
              <img
                :src="logoReact"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
            <a
              class="http://localhost:3000/"
              href="#"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title="6號已失蹤，仍可幫本公司連絡"
            >
              <img
                :src="logoSketch"
                alt="title"
                loading="lazy"
                :style="{ height: '90px' }"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 ms-auto">
            <h4 class="mb-1">感謝您的瀏覽</h4>
            <p class="lead mb-0">如果您覺得不錯的話，歡迎分享本網站</p>
          </div>
          <div class="col-lg-5 me-lg-auto my-lg-auto text-lg-end mt-5">
            <MaterialSocialButton
              route="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23bootstrap5&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-design-system-pro"
              component="twitter"
              color="twitter"
              label="Tweet"
            />
            <MaterialSocialButton
              route="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-design-system-pro"
              component="facebook-square"
              color="facebook"
              label="Share"
            />
            <MaterialSocialButton
              route=""
              component="pinterest"
              color="pinterest"
              label="Pin it"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
