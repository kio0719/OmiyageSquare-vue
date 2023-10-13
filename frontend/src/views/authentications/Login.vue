<template>
  <div>
    <h1>ログイン</h1>
      <input v-model="user.email" type="text"  name="user-email" placeholder="Eメール">
      <input v-model="user.password" type="password" name="user-password" placeholder="パスワード">
      <button type="submit" @click="signIn">ログイン</button>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import { useRouter } from 'vue-router'

const router = useRouter();

const user =  reactive({
  password: null,
  email: null,
});

const signIn = () => {
  axios
    .post('/auth/sign_in',
    {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem("access-token", response.headers["access-token"]);
      localStorage.setItem("client", response.headers["client"]);
      localStorage.setItem("uid", response.headers["uid"])
      router.push({ name: "top"});
    })
    .catch(error => {
      console.error(error);
    })
}
</script>
