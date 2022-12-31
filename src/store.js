import Vue from "vue";
import Vuex from "vuex";
import { router } from './router'
import * as userDataHandling from './userDataHandling'
const appId = '6379b53d84d948d558465a98'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    socialContact: '',
    userData: '',
    alert: false,
    img:''
  },
  mutations: {
    uploadImg(state, img){
      state.img = img
    },
    friendListData(state, data) {
      state.socialContact = data
    },
    getUserData(state, data){
      state.userData = data
    },
    alertOn(state){
      state.alert = true
    },
    alertOff(state){
      state.alert = false
    }

  },
  actions: {
    getUserData(context){
      let userData = JSON.parse(localStorage.getItem('currentUser'))
      context.commit('getUserData', userData)
    },
    friendListData(context) {
      fetch('https://dummyapi.io/data/v1/user?limit=10', {
        headers: { 'app-id': appId }
      }).then((response) => response.json())
        .then(response => {
          context.commit('friendListData', response)
        })
        .catch(error => {
          console.error(`Api is not working properly due to ${error.message}`);
        })
    },
    loginValidation(context, data) {
      let users = userDataHandling.getAllUsers()
      let recordIndex = users.findIndex(x => x.email == data.userID)
      if (users[recordIndex] && users[recordIndex].password == data.password) {
        sessionStorage.setItem('token', users[recordIndex].id)
        localStorage.setItem('currentUser', JSON.stringify(users[recordIndex]))
        router.push('/home')
      }else{
        fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: data.userID,
            password: data.password,
          })
        }).then(response => response.json()).then(
          data => {
            console.log(data)
            if (!data.message) {
              sessionStorage.setItem('token', data.token)
              localStorage.setItem('currentUser', JSON.stringify(data))
              router.push('/home')
            }
          }
        )
      }

      
    }

  }
})