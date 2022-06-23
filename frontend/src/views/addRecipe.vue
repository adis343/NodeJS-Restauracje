<template>
  <b-row class="mt-3">
    <b-col offset="4" cols="4">
      <b-card>
        <b-form @submit="addRecipe">
          <b-form-group id="input-group-1" label="Nazwa potrawy: " label-for="input-1">
            <b-form-input id="input-1" type="text" placeholder="Wpisz nazwe" v-model="name" required></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Rodzaj potrawy: " label-for="input-2">
            <b-form-select id="input-2" type="text" placeholder="Wpisz rodzaj potrawy" v-model="typeRecipe" :options="typelist" required></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-2" label="Trudność potrawy: " label-for="input-2">
            <b-form-select id="input-2" type="text" placeholder="Wpisz trudność potrawy" v-model="difficulty" :options="difficultylist" required></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-2" label="Składniki potrawy: " label-for="input-2">
            <b-form-textarea id="input-2" type="text" placeholder="Wpisz składniki potrawy" v-model="ingredients" required></b-form-textarea>
          </b-form-group>

          <b-form-group id="input-group-2" label="Czas wykonania: " label-for="input-2">
            <b-form-input id="input-2" type="text" placeholder="Wpisz czas wykonania" v-model="timeCook" required></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Opis wykonania: " label-for="input-2">
            <b-form-textarea id="input-2" type="text" placeholder="Wpisz czas wykonania" v-model="description" required></b-form-textarea>
          </b-form-group>

          <b-form-group id="input-group-2" label="Zdjęcie (url): " label-for="input-2">
            <b-form-input id="input-2" type="text" placeholder="Link do zdjęcia" v-model="image" required></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Autor przepisu: " label-for="input-2">
            <b-form-input id="input-2" type="text" placeholder="Imię i nazwisko autora przepisu" v-model="author" required></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="success">Dodaj przepis</b-button>
        </b-form>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import {BFormSelect, BFormTextarea} from "bootstrap-vue-3";
export default {
  name: "addRecipe",
  components: {BFormSelect, BFormTextarea},
  data: () => ({
    typelist: ['Zupa', 'Danie obiadowe', 'Przystawki', 'Przekąska'],
    difficultylist: ['łatwe', 'średnie', 'trudne'],
    name: '',
    typeRecipe: '',
    difficulty: '',
    ingredients: '',
    timeCook: '',
    description: '',
    image: '',
    author: ''
  }),
  methods: {
    addRecipe(){
      this.axios.post('api/recipe/add', {
        name: this.name,
        typeRecipe: this.typeRecipe,
        difficulty: this.difficulty,
        ingredients: this.ingredients,
        timeCook: this.timeCook,
        description: this.description,
        image: this.image,
        author: this.author
      }).then((response)=> {
        this.$router.push({name: 'home'});
      }).catch((err) => {
        console.log(err);
      });
    }
  }
}
</script>

<style scoped>

</style>