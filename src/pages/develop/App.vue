<template>
  <div id="app" style="height:100%;width:100%">
    <el-container style="height:100%;width:100%">
      <el-header>
        <div>
          <headerArea ref='headerArea' @changeValue = 'changeValue'></headerArea>
        </div>
      </el-header>
      <el-container>
      <el-aside v-show="isShowLeft">
        <leftArea ref='leftArea'></leftArea>
      </el-aside>
      <el-main>
        <mainArea ref='mainArea' @append ="append"></mainArea>
      </el-main>
      <el-aside v-show="isShowRight">
        <rightArea ref='rightArea' @changeValue = 'changeValue' :widgetPorperties = widgetPorperties></rightArea>
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
import { truncate } from 'fs'
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
