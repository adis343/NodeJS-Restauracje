<template>
<b-row class="pt-2">
  <b-col cols="2">
    <b-card class="text-center">
      <b style="font-size: 30px">Filtry</b>
    </b-card>

    <b-card class="text-center mt-3">
      <b>Rodzaj potrawy</b>
      <b-form-select v-model="typeRecipe" :options="typelist"></b-form-select>
    </b-card>

    <b-card class="text-center mt-3">
      <b>Trudność wykonania</b>
      <b-form-select v-model="difficulty" :options="difficultylist"></b-form-select>
    </b-card>

    <b-card class="text-center mt-3">
      <b>Wyszukaj autor</b>
      <b-form-input type="text" placeholder="Wpisz autora" v-model="author" ></b-form-input>
    </b-card>

    <b-button class="mt-3 w-100" variant="success" @click="searchRecipes">Wyszukaj</b-button>
  </b-col>
  <b-col cols="10">
    <b-alert variant="warning" :show="alert">Trwa ładowanie czekaj... </b-alert>
    <b-button class="mt-3 w-100" variant="success" v-if="user.status" @click="this.$router.push({name: 'addRecipe'})">Dodaj nowy przepis</b-button>
    <b-row>
      <b-col cols="4" class="mt-2" v-for="(recipe, i) in recipes" :recipe="recipe" :key="i">
        <b-card :img-src="recipe.image" img-alt="Card image">
          <b-card-text>
            {{ recipe.name }} <br><hr>
            {{ recipe.description }}
          </b-card-text>
          <div class="text-center">
            <b-button variant="primary" @click="this.$router.push({name: 'recipe', params: {id: recipe.id}})">Przejdz do przepisu</b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </b-col>
</b-row>
</template>

<script>
import {BButton} from "bootstrap-vue-3";
import {useUserStore} from "../stores/user";
export default {
  name: "start",
  setup(){
    const user = useUserStore();
    user.initUser();
    window.stores = { user };
    return {
      user
    };
  },
  components: {BButton},
  data: () => ({
    alert: true,
    recipes: [],
    typelist: ['Zupa', 'Danie obiadowe', 'Przystawki', 'Przekąska'],
    difficultylist: ['łatwe', 'średnie', 'trudne'],
    typeRecipe: '',
    difficulty: '',
    author: ''
  }),
  methods: {
    searchRecipes(){
      this.axios.post('api/recipe/customFiltering', {
        typeRecipe: this.typeRecipe,
        difficulty: this.difficulty,
        author: this.author
      }).then((response)=> {
        this.recipes = response.data.data
      }).catch((err) => {
        console.log(err)
      });
    },
    loadRecipes(){
      this.axios.get('api/recipe/all').then((response)=> {
        this.recipes = response.data.data;
        this.alert = false;
      }).catch((err) => {
        console.log(err);
      });
    }
  },
  mounted() {
    this.loadRecipes();
  }
}
</script>

<style scoped>

</style>