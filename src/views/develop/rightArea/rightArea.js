/*
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 08:32:19
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-06-07 15:44:14
 */
import controllerStyleBase from '@/components/library/widgets/controller/controllerStyleBase.vue'

export default {
  name: 'mainArea',
  props: {
    widgetPorperties: {
      type: Object,
      default: function () {
        return {}
      }
    },
    sytleList: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      selectId: '',
      cache: {},
      isShowStyle: true
    }
  },
  components: {
    controllerStyleBase
  },
  methods: {

  }
}
