<template>
  <div style="height:100%;width:100%;position: relative;" @dragover="dragover($event)" @drop="drop($event)" ref="mainArea">
        <component v-for="(item,index) in list" :key="item.uuid" :is="item.widgetsType" ref = 'widget' :id = 'item.uuid'></component>
  </div>
</template>
<script>
import mianArea from '@/views/develop/mainArea/mainArea.js'
export default {
  ...mianArea
}
</script>

<style lang="less">
.widget{
  position: absolute;
  background:red
}
</style>
