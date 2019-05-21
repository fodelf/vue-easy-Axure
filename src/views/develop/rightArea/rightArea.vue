<template>
  <div>
    <div>
      这是上面

    </div>

    <div>
      这是中间
    <div v-show="isShowStyle">
        <component v-for=" item in widgetPorperties.styleList" :key="item.uuid" :is="item.widgetsType" ref = 'widget' :id = 'item.uuid'></component>
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
