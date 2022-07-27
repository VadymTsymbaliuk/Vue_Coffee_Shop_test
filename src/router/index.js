import {createRouter, createWebHashHistory} from "vue-router/dist/vue-router";
import Home from "@/views/Home";
import OurCoffee from "@/views/OurCoffee";
import ForYourPleasure from "@/views/ForYourPleasure";


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/our-coffee',
        name: 'ourCoffee',
        component: OurCoffee
    }, {
        path: '/for-your-pleasure',
        name:'forYourPleasure',
        component: ForYourPleasure
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router