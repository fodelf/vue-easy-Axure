<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 08:30:23
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-06-08 10:51:29
 -->
<template>
  <div class="leftArea">
    <el-row style="height:50%">

    </el-row>
    <el-row style="height:50%">
      <ul>
        <li draggable="true"
            @dragstart="dragstart($event,item)"
            v-for="(item,index) in widgets"
            :key="index">{{item.widgetsType}}</li>
      </ul>
    </el-row>
  </div>
</template>
<script>
import leftArea from '@/views/develop/leftArea/leftArea.js'
export default {
  ...leftArea
}
</script>

<style rel="stylesheet/scss"  lang="scss" scoped>
@import "./leftArea.scss";
</style>
