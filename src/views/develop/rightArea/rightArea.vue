<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 08:30:30
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-06-08 22:50:49
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
        <el-form ref="form"
                 :model="form"
                 label-width="80px">
          <component v-for="(childItem) in item.values"
                     :key="childItem.controllerName"
                     :is="childItem.controllerType"
                     :items="childItem.items"
                     :label="childItem.controllerName"
                     ref='widget'></component>
        </el-form>
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
