import * as VueRouter from "vue-router"
import MainPage from "@/components/pages/MainPage.vue"
import PostsPage from "@/components/pages/PostsPage.vue"
import RatingPage from "@/components/pages/RatingPage.vue"
import SubPage from "@/components/pages/SubPage.vue"
import CreatePage from "@/components/pages/CreatePage.vue"
import ProfilePage from "@/components/pages/ProfilePage.vue"
import HelpPage from "@/components/pages/HelpPage.vue"

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