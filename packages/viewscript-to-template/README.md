# viewscript-to-template

> Takes some Viewscript and transforms it to a template string for use with a frontend framework.

## <a name="install"></a>Install
```bash
$ npm install viewscript-to-template --save
```

## <a name="usage"></a>Usage

``` javascript
const viewscriptToTemplate = require('viewscript-to-template')

const result = viewscriptToTemplate.convert(
  // Viewscript!
  {
    title: 'Simple demo form!',
    canBeCompletedOffline: true,
    widgets: [
      {
        type: 'header',
        attributes: {
          heading: 'Register!',
          desc: "Let's get to know each other a bit better..."
        }
      },
      {
        id: 'name',
        type: 'text',
        attributes: {
          heading: 'Name',
          placeholder: 'e.g. Lucy Smith',
          mandatory: true,
          maxCharacters: 100
        }
      }
    ]
  },

  // Options!
  {
    template: {
      widgetTagPrefix: 'app',
      closingWidgetTags: false,
      rootTag: ['<div>', '</div>'],
      setReplacementTag: 'template',
      conditionalAttributeTemplate: 'v-if="$$EXPRESSION$$"',
      modelBindingAttributeTemplate: ['v-model', 'data.$$WIDGET_ID$$']
    }
  }
)

// Output!

console.log(result.template)

// <div>
//   <app-header heading="Register!" desc="Let's get to know each other a bit better..." />
//   <app-text heading="Name" placeholder="e.g. Lucy Smith" mandatory="true" maxCharacters="100" />
// </div>

```

## <a name="test"></a>Testing

```bash
$ npm test
```

## <a name="license"></a>License
[GPLv3](https://github.com/wmfs/viewscript/blob/master/LICENSE)