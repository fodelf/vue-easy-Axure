<template>
  <div>
    <div style=" float:left;">
      <label>上</label>
      <input v-model="top" @change="changeTop()">
    </div>
    <div style=" float:left;">
      <label>左</label>
      <input v-model="left" @change="changeleft()">
    </div>
    <div style=" float:left;">
      <label>高</label>
      <input v-model="height" @change="changeHeight()">
    </div>
    <div style=" float:left;">
      <label>宽</label>
      <input v-model="width" @change="changeWidth()">
    </div>
  </div>
</template>
<script>
export default {
  name: 'headerArea',

  data () {
    return {
      height: 0,
      width: 0,
      left: 0,
      top: 0
    }
  },
  methods: {
    /**
     * 改变组件高度
     * @param
     * @method changeTop
     */
    changeTop () {
      this._changeValue('setTop', this.top)
    },
    changeleft () {
      this._changeValue('setLeft', this.left)
    },
    changeHeight () {
      this._changeValue('setHeight', this.height)
    },
    changeWidth () {
      this._changeValue('setWidth', this.width)
    },
    // 设置高度
    _changeValue: function (functionName, value) {
      let message = {
        value: value,
        functionName: functionName
      }
      this.$emit('changeValue', message)
    },
    // 获取高度
    getHeight: function (unit) {
      return parseFloat(this.height)
    },
    // 设置组件宽度
    setWidth: function (width) {
      // this._setChange("_width", width);
      this.width = width + 'px'
    },
    // 获取组件宽度
    getWidth: function (unit) {
      return parseFloat(this.width)
      // return this._getChange("_width", unit);
    },
    // 获取组件的左边距
    getLeft: function (unit) {
      return parseFloat(this.left)
      // return this._getChange("_left", unit);
    },
    // 设置左边距
    setLeft: function (left) {
      this.left = left + 'px'
      // this._setChange("_left", left);
    },
    // 设置顶部距离
    setTop: function (top) {
      this.top = top + 'px'
      // this._setChange("_top", top);
    },
    // 获取组件的高度值
    getTop: function (unit) {
      return parseFloat(this.top)
      // return this._getChange("_top", unit);
    }
  },
  mounted () {}
}
</script>

<style lang="less">
</style>
