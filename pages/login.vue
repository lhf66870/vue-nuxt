<template>
  <div>
    <h2>用户登录</h2>
    <Input v-model="user.username"></Input>
    <Input type="password" v-model="user.password"></Input>
    <Button @click="onLogin">登录</Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    onLogin() {
      this.$store.dispatch("user/login", this.user).then(ok=>{
          if (ok) {
              this.$router.push('/')
          }else{
              this.$Message.error("失败")
          }
      });
    }
  }
};
</script>