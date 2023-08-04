<script setup>
import AboutUsOption from "@/views/LandingPages/components/AboutUsOption.vue";
</script>
<template>
  <section class="py-9">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 my-auto">
          <h3>Read More About Us</h3>
          <p class="pe-5">
            The best team of the world.
          </p>
          <a href="javascript:;" class="text-success icon-move-right"
            >More about us
            <i class="fas fa-arrow-right text-sm ms-1"></i>
          </a>
        </div>
        <div class="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
          <AboutUsOption
            icon="mediation"
            content="1號"
          />
          <AboutUsOption
            icon="settings_overscan"
            content="2號"
          />

          <AboutUsOption
            icon="token"
            content="3號"
          />
        </div>
      </div>
    </div>
  </section>
</template>
