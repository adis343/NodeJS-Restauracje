<template>
  <b-row>
    <b-col cols="12">
      <div class="menu text-center">
        <h4 class="pt-2 mr-2"><span @click="this.$router.push({name: 'home'})">DomowePrzepisy.pl</span>
          <b-button class="float-end btnF" variant="success" size="small" v-if="!user.status" @click="this.$router.push({name: 'authLogin'})">Zaloguj się</b-button>&nbsp&nbsp
          <b-button class="ml-5 float-end btnF" variant="success" size="small" v-if="!user.status" @click="this.$router.push({name: 'authRegister'})">Zarejestruj się</b-button>
          <b-button class="ml-5 float-end btnF" variant="danger" size="small" v-if="user.status" @click="user.logout()">Wyloguj</b-button>
          <span class="float-end" v-if="user.status">Witaj, {{ user.userName }}</span>
        </h4>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import {useUserStore} from "../stores/user";

export default {
  name: "menu",
  setup(){
    const user = useUserStore();
    user.initUser();
    window.stores = { user };
    return {
      user
    };
  },
  data: () => ({
    username: '',
    ifLogged: false
  }),
  mounted() {
    console.log('login:  ' + localStorage.getItem('username'));
    if (localStorage.getItem('username')){
      this.ifLogged = true;
      this.username = localStorage.getItem('username');
    }
  }
}
</script>

<style scoped>
.menu{
  height: 50px;
  background-color: blueviolet;
  color: white;
}

span{
  margin-right: 20px
}

.btnF{
  margin-right: 10px
}
</style>