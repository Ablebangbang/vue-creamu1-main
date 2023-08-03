<template>
    <div class="page-header align-items-start min-vh-100 d-flex justify-content-center" :style="{
        backgroundImage:
            'url(https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80)'
    }" loading="lazy">
        <div class="" style="margin-top: 13%;">
            <div class="box ">
                <span class=" borderLine"></span>
                <form>
                    <h2>帳號註冊</h2>
                    <div class="inputBox">
                        <input type="text" required="required" v-model="email">
                        <span>Email</span>
                        <i></i>
                    </div>
                    <h6 style="color: brown;" v-if="!isEmailValid" class="error-message">請輸入有效的電子郵件地址</h6>
                    <div class="inputBox">
                        <input type="password" required="required" v-model="Password"
                            :class="{ 'is-invalid': !isPasswordValid }">
                        <span>Password</span>
                        <i></i>
                    </div>
                    <h6 style="color: brown;" v-if="!isPasswordValid" class="error-message">密碼必須包含8至12個字元，且只能使用字母和數字</h6>
                    <div class="inputBox">
                        <input type="password" required="required" v-model="ConfirmPassword"
                            :class="{ 'is-invalid': !isPasswordValid }">
                        <span>Confirm Password</span>
                        <i></i>
                    </div>
                    <h6 style="color: brown;" v-if="Password !== ConfirmPassword" class="error-message">確認密碼不一致</h6>
                    <div class="links">
                        <a href="#" hidden>Forgot Password</a>
                        <a href="http://localhost:3000/pages/landing-pages/basic"
                            :class="{ 'is-invalid': !isPasswordValid || Password !== ConfirmPassword }">登入</a>
                    </div>
                    <input type="button" value="註冊" @click.prevent="createMember">
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const email = ref('')
const Password = ref('')
const ConfirmPassword = ref('')
const Address = "https://localhost:7098";

const isEmailValid = ref(true)
const isPasswordValid = ref(true)

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const validatePassword = (password) => {
    const passwordRegex = /^[a-zA-Z0-9]{8,12}$/;
    return passwordRegex.test(password);
}

const isFormValid = ref(false);

watch(email, (newVal) => {
    isEmailValid.value = validateEmail(newVal);
    updateFormValidity();
});

watch(Password, (newVal) => {
    isPasswordValid.value = validatePassword(newVal);
    updateFormValidity();
});

watch(ConfirmPassword, (newVal) => {
    updateFormValidity();
});

const updateFormValidity = () => {
    isFormValid.value = isEmailValid.value && isPasswordValid.value && Password.value === ConfirmPassword.value;
}

</script>
    
<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap'); */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #e5d2ab;

}

.box {
    position: relative;
    width: 450px;
    height: 550px;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
}

.box::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 380px;
    height: 420px;
    background: linear-gradient(0deg, transparent, transparent, aqua, aqua, aqua);
    z-index: 1;
    transform-origin: bottom right;
    animation: animate 6s linear infinite;
}

.box::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 380px;
    height: 420px;
    background: linear-gradient(0deg, transparent, transparent, aqua, aqua, aqua);
    z-index: 1;
    transform-origin: bottom right;
    animation: animate 6s linear infinite;
    animation-delay: -3s;
}

.borderLine {
    position: absolute;
    top: 0;
    inset: 0;
}

.borderLine::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 380px;
    height: 420px;
    background: linear-gradient(0deg, transparent, transparent, red, red, red);
    z-index: 1;
    transform-origin: bottom right;
    animation: animate 6s linear infinite;
    animation-delay: -1.5s;
}

.borderLine::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 380px;
    height: 420px;
    background: linear-gradient(0deg, transparent, transparent, red, red, red);
    z-index: 1;
    transform-origin: bottom right;
    animation: animate 6s linear infinite;
    animation-delay: -4.5s;
}

@keyframes animate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.box form {
    position: absolute;
    inset: 4px;
    background: #e5d2ab;
    padding: 50px 40px;
    border-radius: 8px;
    z-index: 2;
    display: flex;
    flex-direction: column;
}

.box form h2 {
    color: #000;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.1em;
}

.box form .inputBox {
    position: relative;
    width: 300px;
    margin-top: 35px;
}

.box form .inputBox input {
    position: relative;
    width: 100%;
    padding: 20px 10px 10px;
    background: transparent;
    outline: none;
    border: none;
    box-shadow: none;
    color: aquamarine;
    font-size: 1em;
    letter-spacing: 0.05em;
    transition: 0.5s;
    z-index: 10;
}

.box form .inputBox span {
    position: absolute;
    left: 0;
    padding: 20px 10px 10px;
    pointer-events: none;
    color: aqua;
    font-size: 1em;
    letter-spacing: 0.05em;
    transition: 0.5s;
}

.box form .inputBox input:valid~span,
.box form .inputBox input:focus~span {
    color: #fff;
    font-size: 0.75em;
    transform: translateY(-34px);
}

.box form .inputBox i {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
    transition: 0.5s;
    pointer-events: none;
}

.box form .inputBox input:valid~i,
.box form .inputBox input:focus~i {
    height: 45px;
}

.box form .links {
    display: flex;
    justify-content: space-between;

}

.box form .links a {
    margin: 10px 0;
    font-size: 0.75em;
    color: #768a3a;
    text-decoration: none;
}

.box form .links a:hover .box form .links a:nth-child(2) {
    color: #fff;
}

.box form .inputBox input[type="submit"] {
    border: none;
    outline: none;
    padding: 9px 25px;
    background: #fff;
    cursor: pointer;
    font-size: 0.9em;
    border-radius: 4px;
    font-weight: 600;
    width: 100px;
    margin-top: 10px;
}

.box form .inputBox input[type="submit"]:active {
    opacity: 0.8;

}
</style>