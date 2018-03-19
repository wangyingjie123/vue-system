<template>
  <div class="elalert">
    <span class="elalert-label">我是子组件</span>
    <el-button
      plain
      @click="open3">
      {{ propA }}
    </el-button>
  </div>

</template>

<script>
  export default {
    props: {
      // 基础类型检测 (`null` 指允许任何类型)
      propA: String,
      // 必传且是字符串
      propB: {
        type: String
      },
      propC: {
        type: String,
        default: ''
      }
    },
    methods: {
      open3() {
        this.$notify({
          title: this.propA,
          message: this.propB,
          type: this.propC
        })
      }
    }
  }
</script>
<style scoped lang="scss">
  .elalert{
    padding: 24px;
    &-label{
      font-weight: bold;
      line-height: 40px;
      margin-right: 10px;
      font-size: 14px;
    }
  }
</style>
