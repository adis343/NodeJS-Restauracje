import { defineStore } from "pinia";
import jwtDecode from 'jwt-decode';

export const useUserStore = defineStore({
    id: "user",
    state: () => ({
        userName: null,
        userRole: null,
        roles: null,
        status: false,
    }),
    getters: {
        isLogged: (state) =>{
            return state.status;
        }
    },
    actions: {
        initUser(){
            console.log("initUser()");
            if (localStorage.getItem('accessToken')){
                var decoded = jwtDecode(localStorage.getItem('accessToken'));
                this.userName = localStorage.getItem('username');
                this.userRole = localStorage.getItem('roles');
                this.status = true;
            }
        },
        UserIsLogged(){
            if (this.userName!=null){
                return true;
            }
            return false;
        },
        logout(){
            this.userName = null;
            this.userRole = null;
            this.status = false;
            localStorage.clear();
        }
    }
})