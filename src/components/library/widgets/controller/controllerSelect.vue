<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-14 23:33:19
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-06-08 20:24:34
 -->

<template>
  <el-form-item label="label">
    <el-select v-model="value"
               @change="changeValue">
      <el-option v-for="(item,index) in valueList"
                 label="item.label"
                 value="item.value"
                 :key="index"></el-option>
    </el-select>
  </el-form-item>
</template>
<script>
import controller from '@/components/library/widgets/controller/controller.vue'
export default {
  name: 'controllerSelect',
  extends: controller,
  data () {
    return {
      value: '',
      functionName: ''
    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>

<style lang="less">
</style>
