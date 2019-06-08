<!--
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 08:30:25
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-06-07 18:35:25
 -->
<template>
  <div class="headerArea">
    <el-row>

    </el-row>
    <el-row :gutter="10">
      <el-col :span="8"
              :offset="16">
        <div class="grid-content bg-purple">
          <el-row>
            <el-form :label-position="labelPosition"
                     label-width="40px"
                     :model="formLabelAlign">
              <el-col :span="6">
                <div class="">
                  <el-form-item label="左：">
                    <el-input v-model="left"
                              @change="changeLeft()">
                    </el-input>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="">
                  <el-form-item label="上：">
                    <el-input v-model="top"
                              @change="changeTop()"></el-input>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="">
                  <el-form-item label="宽：">
                    <el-input v-model="width"
                              @change="changeWidth()"></el-input>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="">
                  <el-form-item label="高：">
                    <el-input v-model="height"
                              @change="changeHeight()"></el-input>
                  </el-form-item>
                </div>
              </el-col>
            </el-form>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'headerArea',

  data () {
    return {
      height: '',
      width: '',
      left: '',
      top: ''
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
  mounted () { }
}
</script>
<style rel="stylesheet/scss"  lang="scss" scoped>
@import "./headerArea.scss";
</style>
