import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from './components/LoginPage'
import SignUpPage from './components/SignUpPage'
import HomePage from './components/HomePage'
import ForgetPassword1 from './components/forgetPassword/ForgetPassword1'
import CheckEmail from './components/forgetPassword/CheckEmail'
import SetPassword from './components/forgetPassword/SetPassword'
import PasswordReset from './components/forgetPassword/PasswordReset'
import UpdateProfile from './components/HomeChildComponents/UpdateProfile'
import MainSection from './components/HomeChildComponents/MainSection'


Vue.use(VueRouter)

const routes = [
    { name: 'login', path: '/', component: LoginPage },
    { name: 'signUp', path: '/signup', component: SignUpPage },
    {
       path: '/home', component: HomePage, children: [
        {name: 'mainSection', path: '/', component: MainSection},
        {name: 'updateProfile', path: '/home/updateprofile', component: UpdateProfile}
      ],
       beforeEnter: (to, from, next) => {
        if (!sessionStorage.getItem('token')) next({ name: 'login' })
        else {
          next()
        }
      }
    },
    { name: 'forgetPass', path: '/forgetPassword', component: ForgetPassword1},
        { name: 'checkEmail', path: '/emailVerification', component: CheckEmail },
        { name: 'setPassword', path: '/setPassword', component: SetPassword },
        { name: 'resetPassword', path: '/passwordReset', component: PasswordReset },
    
  
    
  ]
  
  export const router = new VueRouter({
    mode: 'history',
    routes,
  })