<template>
  <div>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 5" :key="item">
        <h2>{{ item }}</h2>
      </el-carousel-item>
    </el-carousel>
    <test-slot class="source">
        <span>我是父组件里的文字，但是我要被放到子组件里</span>
    </test-slot>
  </div>
</template>

<script>
  import testSlot from './textSlot'
  export default {
    data() {
      return {

      }
    },
    components: {
      testSlot
    }
  }
</script>

<style scoped lang="scss">
  .source{
    padding: 24px;
  }
  .el-carousel{
    width: 60%;
    margin: 50px auto 0;
  }
  .el-carousel__item h2 {
    color: #475669;
    font-size: 25px;
    font-weight: bold;
    opacity: 0.75;
    line-height: 200px;
    text-align: center;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
