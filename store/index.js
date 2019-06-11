export const actions = {
    nuxtServerInit({ commit }, { app }) {
        // 服务端就将vuex状态填充
        // 参数1是vuex的上下文
        // 参数2是nuxt的上下文
        const token =app.$cookies.get("token");
        if (token) {
            console.log("初始化token");
            console.log(token);
            commit("user/init", token);
        }
    }
};

// export const actions = {
//     nuxtServerInit({ commit }, { req }) {
//         // 服务端就将vuex状态填充
//         // 参数1是vuex的上下文
//         // 参数2是nuxt的上下文
//         // req.ctx是koa的上下文
//         const token = req.ctx.cookies.get("token");
//         if (token) {
//             console.log("初始化token");
//             console.log(token);
//             commit("user/init", token);
//         }
//     }
// };
  