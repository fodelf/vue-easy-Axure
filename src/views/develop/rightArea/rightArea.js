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
