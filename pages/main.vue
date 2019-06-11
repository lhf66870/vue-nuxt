<template>
    <div>
        <nuxt-link to="/main">首页</nuxt-link>
        <n-link to="/main/cart" no-prefetch>购物车</n-link>
        <NLink to="/main/admin">管理</NLink>
        <nuxt-child />
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>