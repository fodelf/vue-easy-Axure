<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-06 08:54:53
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-06-07 18:33:17
 -->
<template>
  <div id="app"
       style="height:100%;width:100%">
    <el-container style="height:100%;width:100%">
      <el-header height='80'>
        <headerArea ref='headerArea'
                    @changeValue='changeValue'></headerArea>
      </el-header>
      <el-container>
        <el-aside v-show="isShowLeft">
          <leftArea ref='leftArea'></leftArea>
        </el-aside>
        <el-main>
          <mainArea ref='mainArea'
                    @append="append"></mainArea>
        </el-main>
        <el-aside v-show="isShowRight">
          <rightArea ref='rightArea'
                     @changeValue='changeValue'
                     :widgetPorperties=widgetPorperties></rightArea>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import leftArea from '@/views/develop/leftArea/leftArea.vue'
import mainArea from '@/views/develop/mainArea/mainArea.vue'
import rightArea from '@/views/develop/rightArea/rightArea.vue'
import headerArea from '@/views/develop/headerArea/headerArea.vue'
export default {
  name: 'app',
  components: {
    leftArea,
    mainArea,
    headerArea,
    rightArea
  },
  data () {
    return {
      widgetPorperties: {
        styleList: []
      },
      cache: {},
      isShowLeft: true,
      isShowRight: true
    }
  },
  methods: {
    append () {

    },
    changeValue (mes) {
      this.$refs.mainArea.changeValue(mes)
    }
  }
}
</script>

<style lang="less">
@import "../../assets/css/base.css";
</style>
