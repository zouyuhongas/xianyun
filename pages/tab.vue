<template>
<div>
  <div class="tabs" style="margin:30px">
      <span
       v-for="(item , index) in ['娱乐','新闻','体育']" 
       :key="index"
       @click="list(index)"
        :class="{ active:current === index}"
       >{{item}}</span>      
  </div>
  <div v-show="current ===0">
      <ul>
          <li>代码战神邹柯</li>
          <li>代码战神邹柯</li>
          <li>代码战神邹柯</li>
      </ul>
  </div>
  <div v-show="current===1">
      <ul>
          <li>代码战皇邹柯</li>
          <li>代码战皇邹柯</li>
          <li>代码战皇邹柯</li>
      </ul>
  </div>
  <div v-show="current===2">
      <ul>
          <li>代码斗罗邹柯</li>
          <li>代码斗罗邹柯</li>
          <li>代码斗罗邹柯</li>
      </ul>
  </div>
</div>
</template>

<script>
export default {
        data() {
            return {
                current:0
            }
        },
        methods:{
            list(index){
                this.current = index
            }
        }
}
</script>

<style lang='less' scoped>
 .tabs{
        margin-bottom:20px;

        span{
            cursor: pointer;
        }
    }
  .active{
      color: red
  }
</style>