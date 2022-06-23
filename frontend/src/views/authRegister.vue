<template>
  <b-row class="mt-3">
    <b-col offset="4" cols="4">
      <b-card>
        <div class="text-center">
          <h2>Zarejestruj sie!</h2>
        </div>
        <b-alert variant="success" :show="alertSuccess">Pomyślnie zarejestrowano! Zostaniesz zaraz przekierowany</b-alert>
        <b-alert variant="danger" :show="alertDanger">Wystąpił bład podczas rejestracji spróbuj ponownie! </b-alert>
        <b-form @submit="register">
          <b-form-group id="input-group-1" label="Login:" label-for="input-1">
            <b-form-input id="input-1" type="text" placeholder="Wpisz login" v-model="login" required></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Email:" label-for="input-2">
            <b-form-input id="input-2" type="email" placeholder="Wpisz hasło" v-model="email" required></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Hasło:" label-for="input-2">
            <b-form-input id="input-2" type="password" placeholder="Wpisz hasło" v-model="password" required></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="success">Zarejestruj się</b-button>
        </b-form>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "authRegister",
  data: () => ({
    login: '',
    email: '',
    password: '',
    alertSuccess: false,
    alertDanger: false
  }),
  methods: {
    register(){
      this.alertSuccess = false;
      this.alertDanger = false;
      this.axios.post('api/auth/signup', {
        username: this.login,
        email: this.email,
        password: this.password
      }).then((response)=> {
        this.alertSuccess = true;
        this.$router.push({name: 'authLogin'});
      }).catch((err) => {
        this.alertDanger = true;
      });
    }
  }
}
</script>

<style scoped>

</style>