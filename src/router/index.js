import * as VueRouter from "vue-router"
import MainPage from "@/components/pages/MainPage.vue"
import PostsPage from "@/components/pages/PostsPage.vue"
import RatingPage from "@/components/RatingPage.vue"
import SubPage from "@/components/SubPage.vue"
import CreatePage from "@/components/CreatePage.vue"
import ProfilePage from "@/components/ProfilePage.vue"
import HelpPage from "@/components/HelpPage.vue"

export default VueRouter.createRouter({
    history:VueRouter.createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'MainPage',
            component:MainPage
        },

        {
            path:'/posts',
            name:'PostsPage',
            component:PostsPage
        },
        
        {
            path:'/rating',
            name:'RatingPage',
            component:RatingPage
        },

        {
            path:'/subs',
            name:'SubPage',
            component:SubPage
        },

        {
            path:'/create',
            name:'CreatePage',
            component:CreatePage
        },

        {
            path:'/profile',
            name:'ProfilePage',
            component:ProfilePage
        },

        {
            path:'/help',
            name:'HelpPage',
            component:HelpPage
        }
    ]
})