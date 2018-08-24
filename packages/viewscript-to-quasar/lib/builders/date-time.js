const ComponentBuilder = require('./../utils/Component-builder').default
const GetAttribute = require('./../utils/Get-attribute').default

export default function dateTimeConverter (widgetDefinition, options) {
  const getAttribute = GetAttribute(widgetDefinition)
  const builder = new ComponentBuilder(widgetDefinition)
  const dateTime = builder.addTag('q-datetime')
  dateTime.bindToModel(widgetDefinition)
  dateTime.addAttribute('type', 'datetime')
  dateTime.addAttribute('float-label', getAttribute('heading'))
  dateTime.addAttribute('class', 'q-ma-xl')
  return builder.compile()
}
