const config = {
  'widgetName': 'head',
  'widgetZhName': '标题',
  'attributes': {
    'style': [
      {
        'name': '字体：',
        'type': 'controllerSelect',
        'functionName': 'titleFont',
        'items': [
          { 'label': '12点', 'value': '12px' },
          { 'label': '14点', 'value': '14px' },
          { 'label': '16点', 'value': '16px' },
          { 'label': '18点', 'value': '18px' }
        ],
        'defaultValue': '14px'
      }
    ],
    'data': [

    ]
  }
}
export default config
