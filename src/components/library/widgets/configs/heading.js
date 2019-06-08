/*
 * @Description:标题配置信息
 * @Author: 吴文周
 * @Github: https://github.com/fodelf
 * @Date: 2019-05-08 22:37:50
 * @LastEditors: 吴文周
 * @LastEditTime: 2019-06-08 22:49:31
 */
const config = {
  'widgetName': 'head',
  'widgetZhName': '标题',
  'attributes': [
    {
      'name': '样式',
      'values': [
        {
          'controllerName': '字体：',
          'controllerType': 'controllerSelect',
          'functionName': 'setTitleFont',
          'items': [
            { 'label': '12点', 'value': '12px' },
            { 'label': '14点', 'value': '14px' },
            { 'label': '16点', 'value': '16px' },
            { 'label': '18点', 'value': '18px' }
          ],
          'defaultValue': '14px'
        }

      ]

    }
  ]
}
export default config
