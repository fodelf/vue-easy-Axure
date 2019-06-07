/*
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-06-07 16:07:07
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-06-07 16:38:05
 */

export default {
  data () {
    return {
      $_sidebarElm: null
    }
  },
  mounted () {
    let module = this._GLOBAL['clientMessage']['module']
    switch (module) {
      case 'develop':
        this.initDecorator()
        break
    }
  },
  methods: {
    initDecorator () {

    }
  }
}
