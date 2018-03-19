<template>
  <div class="scard">
    <el-row :gutter="20">
      <el-col :span="6"><el-input placeholder="输入什么弹出什么" v-model="message" clearable ref="focused"></el-input></el-col>
      <el-col :span="6"><span>{{newmessage}}</span></el-col>
    </el-row>
    <!--子组件-->
    <sync-prop propA="失败" :propB.sync="message" propC="warning"></sync-prop>
  </div>
</template>

<script>
  import syncProp from '@/components/prop/syncProp.vue'
  export default {
    name: 'props',
    data: function() {
      return {
        message: ''
      }
    },
    computed: { //  计算属性
      newmessage: function() {
        return this.message.split('').reverse().join('')
      }
    },
    mounted: function() {
      this.$refs.focused.focus() // 自动获得焦点
    },
    components: { // 组建
      syncProp
    }
  }
</script>
