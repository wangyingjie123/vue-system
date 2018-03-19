<template>
  <el-card class="box-card dashboard-container">
    <div class="text item dashboard-text">name:{{name}}</div>
    <div class="text item dashboard-text">role:<span v-for='role in roles' :key='role'>{{role}}</span></div>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  computed: {
    ...mapGetters([ // mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 20px;
    font-weight: bold;
    padding: 18px 0;
  }
}
.box-card {
  width: 480px;
  margin: 30px auto 0;
}
</style>
