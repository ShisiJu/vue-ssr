import Vue from 'vue'
import VueRouter from 'vue-router'
import baz from '@/components/baz'
import foo from '@/components/foo'
Vue.use(VueRouter)

// 改为这样： 不可以, 需要在看看为什么
// const Foo = () => import('./Foo.vue')

export default function createRouter() {
    return new VueRouter({
        mode: "history",
        routes: [
            {
                path: "/",
                name: 'baz',
                component: baz
            },
            {
                path: "/foo",
                name: 'foo',
                component: foo
            }
        ]
    })
}

