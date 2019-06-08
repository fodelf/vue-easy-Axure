/*
 * @Description:主区域模块
 * @Author:吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 19:58:27
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-06-08 12:44:12
 */

import heading from '@/components/library/widgets/views/heading/heading.vue'
export default {
  name: 'mainArea',
  data () {
    return {
      list: [],
      selectId: '',
      cache: {},
      id: ''
    }
  },
  components: {
    heading
  },
  methods: {
    /**
     * @name:changeValue
     * @description:
     * @param {type}:
     * @return {type}:
     */
    changeValue (mes) {
      let index = this.cache[this.selectId]
      let selectWidget = this.$refs.widget[index]
      selectWidget[mes.functionName](mes.value)
    },
    getScrollTop () {
      let mainArea = this.$refs.mainArea
      return mainArea.scrollTop
    },
    getRootGroup () {
      return this.$refs.mainArea
    },
    getWidgetById (id) {
      let index = this.cache[id]
      return this.$refs.widget[index]
    },
    getHeight () {
      let mainArea = this.$refs.mainArea
      return mainArea.scrollHeight
    },
    getWidth () {
      let mainArea = this.$refs.mainArea
      return mainArea.scrollWidth
    },
    dragover (event) {
      event.preventDefault()
    },
    drop (e) {
      let data = e.dataTransfer.getData('data')
      let widget = JSON.parse(data)
      this.list.push(widget)
      console.log('1')
      this.cache[widget.uuid] = this.list.length - 1
      this.selectId = widget.uuid
      // this.$emit('append', widget)
    }
  }
}
