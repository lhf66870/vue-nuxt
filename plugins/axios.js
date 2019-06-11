export default function({ $axios,store }) {
    // 利用$axios模块帮助方法setToken设置全局请求头
    // 此处省略token截取逻辑
    $axios.onRequest(config => {
        if(store.state.user.token) {
            config.headers.Authorization = "Bearer "+ store.user.token
        }
        return config
    })
}

// export default function({ $axios }) {
//     // 利用$axios模块帮助方法setToken设置全局请求头
//     // 此处省略token截取逻辑
//     $axios.setToken(document.cookie, "Bearer");
// }
