<template>
  <div>
    <div style="width:100%;height:200px;">
      <h2>首页</h2>
      <ul>
        <li v-for="good in goods" :key="good.id">
          <nuxt-link :to="{ name: 'main-detail-id', params: { id: good.id } } " no-prefetch>
            <span>{{good.text}}</span>
            <span>${{good.price}}</span>
            <span><Button @click.prevent="addCart(good)">添加购物车</Button></span>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <Carousel v-model="value" loop>
      <CarouselItem v-for="(item,index) in questionList" :key="index">
          <div class="demo-carousel">1</div>
      </CarouselItem>

    </Carousel>
  </div>
  
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  transition: 'test',
  layout: 'users',
  head () {
    return {
      title: "nuxt学习",
      meta: [
        {
          name:"description",
          hid: "description",
          content: "设置页面meta"
        },
        {
          name:"author",
          hid: "author",
          content: "Rversion"
        },
      ],
      link: [
        {
          ref: "favicon", href:"favivon.ico"
        }
      ],
      script: [
        {
          src: "https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"
        }
      ]
      
    }
  },
  components: {
    Logo
  },
  async asyncData( {$axios, error, redirect} ) {
    // console.log(ctx);
    const result = await $axios.$get('api/goods')
    if(result.ok){
      return {goods: result.goods}
    }
    // 错误处理
    error({statusCode: 400, message: "查询数据失败"})
  },
  data() {
    return {
      value:0,
      goods: [
        {
          id: 1,
          text: "豪车",
          price: 10000
        },
        {
          id: 2,
          text: "豪宅",
          price: 50000
        },
        {
          id: 3,
          text: "美女",
          price: 250
        },
      ],
      questionList:[1,2]
    }
  },
  methods: {
    addCart({$axios}) {
      
    }
  },
}
</script>

<style>
.ivu-carousel{
  width:800px;
  height:350px;
  margin:auto
}
.demo-carousel{
  width:800px;
  height:350px;
  background: #ccc;
}
</style>
