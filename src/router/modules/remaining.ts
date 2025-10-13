/*
 * @Author: test
 * @Date: 2025-10-12 20:12:46
 * @LastEditTime: 2025-10-12 20:51:23
 * @FilePath: /pure-admin-thin/src/router/modules/remaining.ts
 * @Description:
 */
const Layout = () => import("@/layout/index.vue");

export default [
  {
    path: "/",
    name: "office",
    component: () => import("@/views/office/index.vue"),
    meta: {
      title: "官网",
      showLink: false,
      rank: 101
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录",
      showLink: false,
      rank: 101
    }
  },

  {
    path: "/redirect",
    component: Layout,
    meta: {
      title: "加载中...",
      showLink: false,
      rank: 102
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        name: "Redirect",
        component: () => import("@/layout/redirect.vue")
      }
    ]
  }
] satisfies Array<RouteConfigsTable>;
