<template>
  <div ref="controller" ></div>
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
      this.$emit('changeValue')
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
