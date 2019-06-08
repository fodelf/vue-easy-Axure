/*
 * @Description:左侧区域模块js
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-07 17:03:22
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-06-07 17:15:27
 */

import { uuid } from '@/utils/index.js'
export default {
  name: 'leftArea',
  data () {
    return {
      widgets: [{ 'widgetsType': 'heading' }]
    }
  },
  methods: {
    /**
     * @name:dragstart
     * @description:拖拽开始
     * @param {type}:
     * @return {type}:
     */
    dragstart (e, item) {
      item = Object.assign({ 'uuid': uuid(32) }, item)
      e.dataTransfer.setData('data', JSON.stringify(item))
    }
  }
}
