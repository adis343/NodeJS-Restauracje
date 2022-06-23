<template>
  <b-row class="mt-3">
    <b-col offset="3" cols="6">
      <div class="text-center" v-if="recipe">
        <b-img :src="recipe.image" fluid alt="Responsive image"></b-img>
      </div>
      <b-card class="mt-3" v-if="recipe">
        <table>
          <tbody>
            <tr>
              <td><b>Nazwa potrawy: </b></td>
              <td>{{ recipe.name }}</td>
            </tr>
            <tr>
              <td><b>Rodzaj potrawy: </b></td>
              <td>{{ recipe.typeRecipe }}</td>
            </tr>
            <tr>
              <td><b>Trudność potrawy:</b></td>
              <td>{{ recipe.difficulty }}</td>
            </tr>
            <tr>
              <td><b>Składniki: </b></td>
              <td>{{ recipe.ingredients }}</td>
            </tr>
            <tr>
              <td><b>Czas wykonania: </b></td>
              <td>{{ recipe.timeCook }}</td>
            </tr>
            <tr>
              <td><b>Opis wykonania: </b></td>
              <td>{{ recipe.description }}</td>
            </tr>
            <tr>
              <td><b>Autor przepisu: </b></td>
              <td>{{ recipe.author }}</td>
            </tr>
          </tbody>
        </table>
      </b-card>
      <b-card class="mt-3" v-if="comments.length<5 && username!=null">
        <b-form-textarea v-model="commentsForm" placeholder="Wpisz komentarz"></b-form-textarea>
        <div class="text-center">
          <b-button variant="primary" class="mt-2" @click="addComment">Dodaj komentarz</b-button>
        </div>
      </b-card>
      <b-card class="mt-3" v-for="(comment, i) in comments" :comment="comment" :key="i">
        <b-card-header>
          {{ comment.username }} napisał: <b-button variant="danger" size="sm" class="float-end" v-if="user.userRole=='ROLE_MODERATOR'" @click="deleteComment(i, comment.id)">Usun</b-button>
        </b-card-header>
        <b-card-body>
          {{ comment.comment }}
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import {BButton, BCardBody, BCardHeader, BFormTextarea} from "bootstrap-vue-3";
import {useUserStore} from "../stores/user";
export default {
  name: "recipe",
  setup(){
    const user = useUserStore();
    user.initUser();
    window.stores = { user };
    return {
      user
    };
  },
  components: {BButton, BFormTextarea, BCardBody, BCardHeader},
  data: () => ({
    recipe: null,
    comments: [],
    commentsForm: '',
    username: null
  }),
  methods: {
    async loadRecipe() {
      if (this.$route.params.id!=null){
        await this.axios.post('api/recipe/getRecipe', {
          id: this.$route.params.id
        }).then((response) => {
          this.recipe = response.data.data
          console.log(this.recipe)
        }).catch((err) => {
          console.log(err);
        });
      }
    },
    async loadComments(){
      await this.axios.post('api/comment/findByRecipe', {
        idrecipe: this.$route.params.id
      }).then((response)=> {
        this.comments = response.data.data;
      }).catch((err) => {
        console.log(err);
      });
    },
    addComment(){
      this.axios.post('api/comment/add', {
        comment: this.commentsForm,
        username: this.username,
        idrecipe: this.$route.params.id
      }).then((response)=> {
        this.comments.push({comment: this.commentsForm, username: localStorage.getItem('username')})
        this.commentsForm = ''
      }).catch((err) => {
        console.log(err);
      });
    },
    deleteComment(i, comment){
      if (comment!=null){
        this.axios.post('api/comment/delete', {
          id: comment
        }).then((response)=> {
          console.log(response);
          this.comments.splice(i, 1);
        }).catch((err) => {
          console.log(err);
        });
      }
    }
  },
  mounted() {
    this.loadRecipe();
    this.loadComments();
    if (localStorage.getItem('username')!=null){
      this.username = localStorage.getItem('username');
    }
  }
}
</script>

<style scoped>

</style>