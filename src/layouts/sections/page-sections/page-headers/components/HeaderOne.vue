<script setup>
//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";

// image
const bgImage =
  "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2022/12/26/realtime/19758719.jpg&x=0&y=0&sw=0&sh=0&sl=W&fw=800&exp=3600&w=930&nt=1";
</script>
<template>
  <header>
    <nav
      class="navbar navbar-expand-lg navbar-dark navbar-absolute bg-transparent shadow-none"
    >
      <div class="container">
        <a class="navbar-brand text-white" href="javascript:;"
          ></a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-header-2"
          aria-controls="navbar-header-2"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-header-2">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <RouterLink class="nav-link text-white" to="#"> 2023 </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link text-white" to="#">
                /08
              </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link text-white" to="#">
                /03
              </RouterLink>
            </li>
          </ul>

          <ul class="nav navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link text-white"
                href="https://twitter.com/"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-white mx-2"
                href="https://www.facebook.com/"
              >
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-white"
                href="https://www.instagram.com/"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div
      class="page-header min-vh-100"
      :style="{
        backgroundImage: `url(${bgImage})`
      }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-5"></span>
      <div class="container">
        <div class="row">
          <div
            class="col-lg-6 col-md-7 d-flex justify-content-center flex-column"
          >
            <h1 class="text-white mb-4">台灣特有貴重木出口新制</h1>
            <p class="text-white opacity-8 lead pe-5 me-5">
              本公司木材一律使用國外進口.
            </p>
            <div class="buttons">
              <MaterialButton color="white" class="mt-4"
                >Get Started</MaterialButton
              >
              <MaterialButton color="none" class="text-white shadow-none mt-4"
                >Read more</MaterialButton
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
