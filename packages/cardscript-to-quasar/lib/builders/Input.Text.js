const ComponentBuilder = require('./../utils/Component-builder')

const MARGINS = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  extraLarge: 'xl'
}

module.exports = function (definition, options) {
  const {
    isMultiline,
    maxLength,
    placeholder,
    // style, // text, tel, url, email
    spacing,
    separator
  } = definition

  const builder = new ComponentBuilder(definition)

  const input = builder.addTag('q-input')
  input.bindToModel(definition)

  if (placeholder) input.addAttribute('placeholder', placeholder)
  if (maxLength) input.addAttribute('maxLength', maxLength)
  if (isMultiline) input.addAttribute('type', 'textarea')

  const classes = []
  const styles = []

  if (separator) styles.push(`border-top: 1px solid rgb(238, 238, 238)`, `margin-top: 8px`, `padding-top: 8px`)

  if (spacing === 'padding') {
    classes.push('q-pa-md')
  } else if (MARGINS[spacing]) {
    classes.push(`q-mt-${MARGINS[spacing]}`)
  }

  if (classes.length > 0) input.addAttribute('class', classes.join(' '))
  if (styles.length > 0) input.addAttribute('style', styles.join('; '))

  return builder.compile()
}