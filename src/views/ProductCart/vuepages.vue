<template>
    <br><br><br><br><br>
    <div class="d-flex justify-content-center mb-4">
        <h1 style="font-weight: bolder;">成品選購</h1>
    </div>
    <div>
        <!-- <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="關鍵字" aria-label="關鍵字" >
                        <div class="input-group-append">
                            <button @click="" class="btn btn-primary" type="submit">
                                <img src="../img/whitesearch-24.png"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="input-group mb-3">
                        <input v-model="searchText" type="text" class="form-control" placeholder="關鍵字" aria-label="關鍵字">
                        <div class="input-group-append">
                            <button @click="searchProducts" class="btn btn-primary" style="margin-left: 5px;" type="submit">
                                <img src="../../assets/img/productcart/whitesearch-24.png">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-auto mb-4">

                </div>
            </div>
        </div>

        <!-- 
        <button @click="tButton">testchangeprod</button>
        <button @click="clearprod">clearprod</button> -->
        <!-- 使用 v-if 進行條件渲染 -->
        <div v-if="products != null && products.length > 0">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-auto mb-4">
                        <button class="btn btn-outline-primary" @click="prevPage" :disabled="currentPage === 0"
                            v-if="totalPages != null">Prev</button>
                        <button class="btn btn-outline-primary" v-for="page in totalPages" :key="page"
                            @click="goToPage(page)" v-if="totalPages">{{ page
                            }}</button>
                        <button class="btn btn-outline-primary" @click="nextPage" :disabled="currentPage === totalPages - 1"
                            v-if="totalPages">Next</button>
                    </div>
                </div>
            </div>

            <!-- <p>t{{ products[1].id }}</p> -->
            <!-- <p>{{ currentPage[0].id }}</p> -->

            <!-- <router-link :to="{ path: `/productList/detail/${2}` }">1</router-link> -->
            <!-- text variable -->
            <!-- <p>{{ products.length }}</p> -->
            <!-- <router-view></router-view>  -->
            <!-- 這裡顯示 ProductDetailPage 的內容 -->

            <div class="container">
                <div class="row">
                    <div v-for="i in currentPageData" class="col-md-3 mb-4">
                        <!-- <p>{{ currentPageData[0].id }}</p> -->
                        <button @click="goToProductDetail(i)">
                            <div class="card">
                                <img :src=getImageUrl(i.productImage) class="card-img-top" alt="照片準備中">
                                <p style="font-size: 24px;">{{ i.name }}</p>
                                <p style="color: orange; font-size: 24px;">$ {{ i.price }}</p>
                                <button type="button" class="btn btn-primary">購買商品</button>
                            </div>
                        </button>
                    </div>

                </div>

                <!-- <p>t{{ products[1].id }}</p> -->
            </div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-auto mb-4">
                        <button class="btn btn-outline-primary" @click="prevPage" :disabled="currentPage === 0"
                            v-if="totalPages">Prev</button>
                        <button class="btn btn-outline-primary" v-for="page in totalPages" :key="page"
                            @click="goToPage(page)" v-if="totalPages">{{ page
                            }}</button>
                        <button class="btn btn-outline-primary" @click="nextPage" :disabled="currentPage === totalPages - 1"
                            v-if="totalPages">Next</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="container">
                <div class="row justify-content-center">
                    <div style="background-color: yellow;" class="col-md-3 mb-4">
                        <h1>查詢無任何結果</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { defineProps, defineEmits } from 'vue'

const apiurl = "https://localhost:7098/";
const getAll = "api/ProductsDisplayAPI";


let products = ref([]);

//text data
const productstt = ref([
    { id: 1, name: 'Product A', price: 10.99, category: 'Category A' },
    { id: 2, name: 'Product B', price: 5.99, category: 'Category B' },
    { id: 3, name: 'Product C', price: 15.99, category: 'Category A' },
    { id: 4, name: 'Product D', price: 8.49, category: 'Category C' },
    { id: 5, name: 'Product E', price: 12.99, category: 'Category A' },
    { id: 6, name: 'Product E', price: 12.99, category: 'Category A' },
    { id: 7, name: 'Product E', price: 12.99, category: 'Category A' },
    { id: 8, name: 'Product E', price: 12.99, category: 'Category A' },
    { id: 9, name: 'Product E', price: 12.99, category: 'Category A' },
    { id: 10, name: 'Product E', price: 12.99, category: 'Category A' },
    { id: 11, name: 'Product E', price: 12.99, category: 'Category A' },
    { id: 12, name: 'Product 12', price: 12.99, category: 'Category A' },
    { id: 13, name: 'Product E', price: 12.99, category: 'Category A' },
    { id: 14, name: 'Product E', price: 12.99, category: 'Category A' },
    { id: 15, name: 'Product E', price: 12.99, category: 'Category A' },
    { id: 16, name: 'Product E', price: 12.99, category: 'Category A' },
    { id: 17, name: 'Product E', price: 12.99, category: 'Category A' },
    { id: 18, name: 'Product E', price: 12.99, category: 'Category A' },
    { id: 19, name: 'Product E', price: 12.99, category: 'Category A' },
    { id: 20, name: 'Product E', price: 12.99, category: 'Category A' },
    { id: 21, name: 'Product E', price: 12.99, category: 'Category A' },
    { id: 22, name: 'Product E', price: 12.99, category: 'Category A' },
    { id: 23, name: 'Product E', price: 12.99, category: 'Category A' },
    { id: 24, name: 'Product 24', price: 12.99, category: 'Category A' },
    { id: 25, name: 'Product E', price: 12.99, category: 'Category A' },
    { id: 26, name: 'Product E', price: 12.99, category: 'Category A' },
    { id: 27, name: 'Product E', price: 12.99, category: 'Category A' },
    { id: 28, name: 'Product E', price: 12.99, category: 'Category A' },
    { id: 29, name: 'Product 29', price: 12.99, category: 'Category A' },
]);
// 每页展示的商品数量
let itemsPerPage = 12;

// 最多几页
const totalPages = computed(() => Math.ceil(products.value.length / itemsPerPage));

// 目前显示的页数
const currentPage = ref(0);
// 目前分页的数据
const currentPageData = ref([]);

// 初始化数据
async function initV() {
    try {
        const response = await axios.get(`${apiurl}${getAll}`);
        products.value = response.data;
        currentPage.value = 0;
        calCurrentData(currentPage.value);
    } catch (error) {
        console.error(error);
    }
}


// 计算当前页的商品数据
function calCurrentData(page) {
    if (products === null) {
        currentPageData.value = [];
    }
    else {

        currentPageData.value = [];
        if (page * itemsPerPage > products.length) {
            currentPageData.value = products.value.slice((page * itemsPerPage), products.length);
        } else {
            currentPageData.value = products.value.slice((page * itemsPerPage), page * itemsPerPage + itemsPerPage);
        }
    }
}

// 接收父组件传递过来的值
const props = defineProps(['va'])
// 接收父组件传递过来的方法
const emit = defineEmits(['func'])

function goToProductDetail(productIdToPD) {
    emit('func', productIdToPD)
}

const searchText = ref('');

// search function
async function searchTextInApi() {
    try {
        // console.log(searchText.value === "");
        console.log(searchText.value);

        if (searchText.value == "") {
            initV();
        }
        else {
            let response = await axios.get(`${apiurl}${getAll}/text/${searchText.value}`);
            if (response === null) {
                products.value = [];
                totalPages.value = [];
            }
            else {
                products.value = [];
                products.value = response.data;
                currentPage.value = 0;
                calCurrentData(currentPage.value);
            }
        }
    } catch (error) {
        currentPage.value = [];
        console.error("錯誤");
    }
}

// function to be called when the button is clicked
function searchProducts() {
    searchTextInApi();
}


// 获取完整的图片路径
function getImageUrl(path) {
    try {
        return apiurl + "imgs/" + path;
    }
    catch {
        return apiurl + "imgs/ProductPlanning.jpg";
    }
}


// 前往上一页
function prevPage() {
    if (currentPage.value > 0) {
        currentPage.value--;
        calCurrentData(currentPage.value);
    }
}

// 前往下一页
function nextPage() {
    if (currentPage.value < totalPages.value - 1) {
        currentPage.value++;
        calCurrentData(currentPage.value);
    }
}

// 前往指定页
function goToPage(page) {
    currentPage.value = page - 1;
    calCurrentData(currentPage.value);
}

//text products add []
function tButton() {
    products.value = productstt.value;
}

//text products add []
function clearprod() {
    products.value = [];
}

initV();
</script>
    
<style></style>