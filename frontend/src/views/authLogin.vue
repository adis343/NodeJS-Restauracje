<template>
<b-row class="mt-3">
  <b-col offset="4" cols="4">
    <b-card>
      <div class="text-center">
        <h2>Zaloguj sie!</h2>
      </div>
      <b-alert variant="success" :show="alertSuccess">Pomyślnie zalogowano! Zostaniesz zaraz przekierowany</b-alert>
      <b-alert variant="danger" :show="alertDanger">Wystąpił bład podczas logowania spróbuj ponownie! </b-alert>
      <b-form @submit="singIn">
        <b-form-group id="input-group-1" label="Login:" label-for="input-1">
          <b-form-input id="input-1" type="text" placeholder="Wpisz login" v-model="login" required></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Hasło:" label-for="input-2">
          <b-form-input id="input-2" type="password" placeholder="Wpisz hasło" v-model="password" required></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="success">Zaloguj się</b-button>
      </b-form>
    </b-card>
  </b-col>
</b-row>
</template>

<script>
import {useUserStore} from "../stores/user";

export default {
  name: "auth",
  setup(){
    const user = useUserStore();
    window.stores = { user };
    return {
      user
    };
  },
  data: () => ({
    login: '',
    password: '',
    alertSuccess: false,
    alertDanger: false
  }),
  methods: {
    singIn(){
      this.alertSuccess = false;
      this.alertDanger = false;
      this.axios.post('api/auth/signin', {
        username: this.login,
        password: this.password
      }).then((response)=> {
        console.log(response.data);
        localStorage.setItem('userid', response.data.id);
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('roles', response.data.roles[0]);
        this.alertSuccess = true;
        this.$router.push({name: 'home'});
        this.user.initUser();
      }).catch((err) => {
        console.log(err);
        this.alertDanger = true;
      });
    }
  }
}
</script>

<style scoped>

</style>