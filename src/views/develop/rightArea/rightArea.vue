<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 08:30:30
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-06-07 15:44:05
 -->
<template>
  <div>
    <div>
      这是上面

    </div>

    <div>
      这是中间
      <div v-show="isShowStyle">
        <component v-for=" item in widgetPorperties.styleList"
                   :key="item.uuid"
                   :is="item.widgetsType"
                   ref='widget'
                   :id='item.uuid'></component>
      </div>
      <div v-show="isShowStyle">

      </div>
    </div>

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
