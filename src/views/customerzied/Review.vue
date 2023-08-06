<template>
  <h2>Product Review</h2>
  <v-container>
    <v-card class="d-flex flex-column mx-auto py-8" elevation="10" height="500" width="360">
      <div class="d-flex justify-center mt-auto text-h5">Rating overview</div>

      <div class="d-flex align-center flex-column my-auto">
        <div class="text-h2 mt-5">
          3.5
          <span class="text-h6 ml-n3">/5</span>
        </div>

        <v-rating :model-value="3.5" color="yellow-darken-3" half-increments></v-rating>
        <div class="px-3">3,360 ratings</div>
      </div>

      <v-list bg-color="transparent" class="d-flex flex-column-reverse" density="compact">
        <v-list-item v-for="(rating, i) in 5" :key="i">
          <v-progress-linear :model-value="rating * 15" class="mx-n5" color="yellow-darken-3" height="20"
            rounded></v-progress-linear>

          <template v-slot:prepend>
            <span>{{ rating }}</span>
            <v-icon icon="mdi-star" class="mx-3"></v-icon>
          </template>

          <template v-slot:append>
            <div class="rating-values">
              <span class="d-flex justify-end"> {{ rating * 224 }} </span>
            </div>
          </template>
        </v-list-item>
      </v-list>
    </v-card>
    <div class="d-flex align-center flex-column">
      <!--排序按鈕-->
      <v-row justify="center">
        <v-col cols="auto">
          <v-btn block rounded="xl">Highest rating</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn block rounded="xl">Lowest rating</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn block rounded="xl">Newest</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn block rounded="xl">Oldest</v-btn>
        </v-col>
      </v-row>

      <!--留言-->
      <br />
      <v-card width="75%">
        <v-card-item>
          <div class="text-right">#1</div>
          <v-img src="https://creamuapit2.azurewebsites.net/imgs/messageImg/04.jpg" height="200px"></v-img>
          <v-card-title>User comment 使用者1號</v-card-title>
          <v-card-text>留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言留言</v-card-text>

          <v-card-text class="text-right"> 2023-07-13 14:06:00 </v-card-text>

          <v-card-title>Reply</v-card-title>
          <v-card-text>回復回復回復</v-card-text>
          <v-card-text class="text-right"> 2023-07-13 14:06:00 </v-card-text>
        </v-card-item>
      </v-card>
    </div>
  </v-container>
</template>

<script setup></script>

<style scoped></style>
