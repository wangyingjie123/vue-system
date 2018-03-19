<template>
  <div>
    <el-container>
      <el-header>test-slot</el-header>
      <el-main>
         <span>下面会显示父组件中的文字，不会出现123</span>
         <span>父组件中没有内容则出现123</span>
        <slot>123</slot>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style scoped lang="scss">
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
