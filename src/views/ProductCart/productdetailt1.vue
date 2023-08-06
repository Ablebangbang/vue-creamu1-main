<template>
    <br>
    <br>
    <div class="container ">
        <!-- BACK TO PRODUCT LIST -->
        <div>
            <button class="btn btn-light" @click="backToPL" style="font-weight: bold; font-size: 36px;"><img
                    src="../../assets/img/productcart/goback.png" alt="back">Back</button>
        </div>
        <div class="row justify-content-center">
            <!-- image zone -->
            <div class="col-md-4 mb-6">
                <img :src=getImageUrl(props.va.productImage) class="card-img-top" alt="照片準備中">
            </div>
            <!-- info zone -->
            <div class="col-md-6 mb-6">
                <!-- text zone -->
                <div class="table">
                    <div class="row" style="font-size: 24px; font-weight: bold;">
                        {{ props.va.name }}
                    </div>
                    <div class="row" style="font-size: 20px;">
                        {{ props.va.descript }}
                    </div>
                    <br>
                    <div class="row" style="font-size: 24px; color: red;">
                        ${{ props.va.price }}
                    </div>
                </div>
                <!-- button zone -->
                <div class="col justify-content-center">
                    <div class="position-relative">
                        <!-- QTY選擇區 -->
                        <div class="bottom-0 start-0">
                            <div class="row bottom-0 row justify-content-start">
                                <div class="col-md-1">
                                    <button class="btn btn-primary position-relative" @click="qtyMinus">-</button>
                                </div>
                                <div class="col-md-1">
                                    <button class="btn btn-primary position-relative">{{ qtynumber }}</button>
                                </div>
                                <div class="col-md-1">
                                    <button class="btn btn-primary position-relative" @click="qtyPlus">+</button>
                                </div>
                            </div>
                        </div>
                        <!-- PURCHAS OR ADD TO CART SECTION -->
                        <div class="position-absolute bottom-0 end-0">
                            <div>
                                <button class="btn btn-success" @click="addToCart">add to cart</button>
                                <button class="btn btn-primary">Buy it now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
    
<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';
import { defineEmits, defineProps } from 'vue';

const apiurl = "https://localhost:7098/";
const getAll = "api/ProductsDisplayAPI/id";
const postToCartAPI = "api/ProductsDisplayAPI";
// 接收父组件传递过来的值
const props = defineProps(['va'])
// 接收父组件传递过来的方法
const emit = defineEmits(['func'])
//button zone variable
const qtynumber = ref(1);


function backToPL() {
    let outputbtpl = "backtopl"
    emit('func', outputbtpl)
}

//qty number minus or plus button function zone
//minus
function qtyMinus() {
    if (qtynumber.value > 1) {
        qtynumber.value = qtynumber.value - 1;
    }
}
//plus 
function qtyPlus() {
    qtynumber.value = qtynumber.value + 1;
}

//add product data To Cart
async function addToCart() {
    let message = '';
    const data = {
        MemberId: 1, // Replace with the MemberId value you want to send
        ProductId: props.va.id, // Replace with the ProductId value you want to send
        Qty: qtynumber.value, // Replace with the Qty value you want to send
    };
    try {
        const response = await axios.post(`${apiurl}${postToCartAPI}`, data);
        message = response.data;
    } catch (error) {
        console.error('Error:', error);
        message = 'An error occurred during the POST request.';
    }
    alert(message);
}

// 获取完整的图片路径
function getImageUrl(path) {
    if (path != undefined && path != null) {
        //let a = "3a5a5572-d77d-4ced-8f19-29aac735d462.jpg"
        //return apiurl + "imgs/" + path;
        return apiurl + "imgs/" + path;
    }
    else {
        return apiurl + "imgs/ProductPlanning.jpg";
    }
}
</script>
   
<style></style>