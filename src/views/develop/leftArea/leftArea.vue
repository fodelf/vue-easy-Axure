<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 08:30:23
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-06-07 16:39:16
 -->
<template>
  <div>
    <div style="height:50%"> 这是上面</div>
    <div style="height:50%">
      <ul>
        <li draggable="true"
            @dragstart="dragstart($event,item)"
            v-for="(item,index) in widgets"
            :key="index">{{item.widgetsType}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { uuid } from '@/utils/uuid.js'
export default {
  name: 'leftArea',
  data () {
    return {
      widgets: [{ 'widgetsType': 'heading' }]
    }
  },
  methods: {
    dragstart (e, item) {
      item = Object.assign({ 'uuid': uuid(32) }, item)
      e.dataTransfer.setData('data', JSON.stringify(item))
    }
  }
}
</script>

<style lang="less">
</style>
