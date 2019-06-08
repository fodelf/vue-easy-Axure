<!--
 * @Description:主区域模块
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 08:28:34
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-06-08 12:46:39
 -->
<template>
  <div style="height:100%;width:100%;position: relative;"
       @dragover="dragover($event)"
       @drop="drop($event)"
       ref="mainArea">
    <component v-for="(item) in list"
               :key="item.uuid"
               :is="item.widgetsType"
               :id="item.uuid"
               ref='widget'></component>
  </div>
</template>
<script>
import mianArea from '@/views/develop/mainArea/mainArea.js'
export default {
  ...mianArea
}
</script>

 <style rel="stylesheet/scss"  lang="scss" scoped>
@import "./mainArea.scss";
</style>
