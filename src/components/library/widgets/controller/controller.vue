<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-14 23:33:19
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-06-07 15:48:51
 -->
<template>
  <div ref="controller"></div>
</template>
<script>
export default {
  name: 'controller',
  data () {
    return {
      value: '',
      functionName: ''
    }
  },
  methods: {
    _changeValue (value) {
      let message = {
        'value': value,
        'functionName': this.functionName
      }
      this.$emit('changeValue', message)
    },
    setValue (functionName) {
      this._changeValue('setTop', this.value)
    },
    getValue () {

    }
  },
  mounted () {

  }
}
</script>

<style lang="less">
</style>
