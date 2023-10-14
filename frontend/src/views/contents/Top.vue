<script setup>
import axios from "axios";
import { useRouter } from 'vue-router';

const router = useRouter();

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
      <button type="button" @click="signOut">ログアウト</button>
  </div>
</template>

