/*
 * @Description:
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-07 08:32:19
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-06-08 22:30:48
 */
const configModulesFiles = require.context('@/components/library/widgets/configs', false, /\.js$/)
const configModules = configModulesFiles.keys().reduce((configModules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = configModulesFiles(modulePath)
  configModules[moduleName] = value.default
  return configModules
}, {})
const viewModulesFiles = require.context('@/components/library/widgets/controller', false, /\.vue$/)
const viewModules = viewModulesFiles.keys().reduce((viewModules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = viewModulesFiles(modulePath)
  viewModules[moduleName] = value.default
  return viewModules
}, {})
console.log(viewModules)
export default {
  name: 'rightArea',
  data () {
    return {
      configTabs: {},
      tabsValue: '0'
    }
  },
  components: viewModules,
  methods: {
    changeWidgetType (mes) {
      this.configTabs = configModules[mes]['attributes']
      console.log(this.configTabs)
    }
  },
  created () {
    this.changeWidgetType('mainArea')
  }
}
