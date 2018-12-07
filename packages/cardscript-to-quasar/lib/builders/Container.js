const MARGINS = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  extraLarge: 'xl'
}

module.exports = function (definition, options) {
  const {
    backgroundImage,
    wash,
    // selectAction,
    style,
    // verticalContentAlignment,
    spacing
    // separator
  } = definition

  let card = '<q-card'

  if (definition.hasOwnProperty('showWhen')) card += ` v-if="${definition.showWhen}"`
  if (definition.hasOwnProperty('id')) card += ` id="${definition.id}"`

  // if (selectAction) card += ` @click=""`
  const classes = ['no-shadow']

  if (style === 'emphasis') classes.push('bg-light')

  if (spacing === 'padding') {
    classes.push('q-pa-md')
  } else if (MARGINS[spacing]) {
    classes.push(`q-mt-${MARGINS[spacing]}`)
  }

  if (classes.length > 0) card += ` class="${classes.join(' ')}"`

  if (backgroundImage) {
    const url = `url(statics/${backgroundImage})`
    const blackWash = 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))'
    const whiteWash = 'linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5))'

    if (wash === 'black') {
      card += ` style="background-image: ${blackWash}, ${url} !important;"`
    } else if (wash === 'white') {
      card += ` style="background-image: ${whiteWash}, ${url} !important;"`
    } else {
      card += ` style="background-image: ${url} !important;"`
    }
  }

  card += '> <q-card-main>'

  console.log('>>>', card)
  return card
}
