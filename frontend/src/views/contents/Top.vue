<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const current_user = ref({});

onMounted(() =>{
  getCurrentUser();
});

const getCurrentUser = () => {
  axios
    .get("/current_user",{
      headers: {
        uid: localStorage.getItem("uid"),
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem("client")
      }
    })
    .then((response) => {
      current_user.value = response.data;
    })
    .catch((error) => {
      console.error(error);
    })
}

const signOut = () => {
  axios
    .delete('/auth/sign_out',
    {
      headers: {
        uid: localStorage.getItem('uid'),
        'access-token': localStorage.getItem('access-token'),
        client: localStorage.getItem('client')
      }
    })
    .then((response) =>{
      localStorage.removeItem('uid');
      localStorage.removeItem('acces-token');
      localStorage.removeItem('client');
      router.push({ name: "login" })
    })
};

</script>
<template>
  <div>
    <h1>トップ</h1>
    <div v-if="current_user">
      <h1>ようこそ!{{current_user.email}}さん</h1>
      <button type="button" @click="signOut">ログアウト</button>
    </div>
    <div v-else>
      <div>ログインしてください</div>
      <a href="/">ログイン</a>
    </div>
  </div>
</template>

