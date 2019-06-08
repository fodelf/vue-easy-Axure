<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 08:30:30
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-06-08 21:32:50
 -->
<template>
  <div>
    <el-tabs type="card>"
             v-model="tabsValue">
      <el-tab-pane :key="
             item.name"
                   v-for="(item,index) in configTabs"
                   :label="item.name"
                   :name="index">
        "xxx"
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import rightArea from '@/views/develop/rightArea/rightArea.js'
export default {
  ...rightArea
}
</script>

<style lang="less">
</style>
