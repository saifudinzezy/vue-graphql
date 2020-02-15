import Vue from 'vue'
import VueRouter from 'vue-router'

//https://router.vuejs.org/guide/essentials/passing-props.html#boolean-mode
Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Login',
        component: () =>
            import ('../views/Login/Login.vue')
    },
    {
        path: '/add',
        name: 'Add',
        component: () =>
            import ('../views/Menus/Add.vue')
    },
    {
        // path: '/dashboard/:name',
        path: '/dashboard/:name',
        name: 'Dashboard',
        component: () =>
            import ('../views/Dashboard.vue'),
        redirect: {
            name: 'Blog'
        },
        children: [{
                path: '/blog',
                name: 'Blog',
                component() {
                    return import ('../views/Menus/Blog.vue')
                }
            },
            {
                path: '/blog/detail',
                name: 'Detail',
                component() {
                    return import ('../views/Menus/Detail.vue')
                }
            },
            {
                path: '/blog/edit',
                name: 'Edit',
                component() {
                    return import ('../views/Add/Edit.vue')
                }
            },
            {
                path: '/about',
                name: 'About',
                component() {
                    return import ('../views/Menus/About.vue')
                }
            },
            {
                path: '/profil',
                name: 'Profil',
                component() {
                    return import ('../views/Menus/Profil.vue')
                }
            }
        ]
    },
    {
        path: "/notfound",
        name: "NotFound",
        component() {
            return import ('@/views/Error/404.vue')
        },
    },
    {
        //redirect jika ada link yg gk kedaftar
        path: "*",
        redirect: {
            name: "NotFound"
        }
    }

]

const router = new VueRouter({
    routes
})

export default router