(function () {

  console.log('Area plugin loaded');

  class AreaFunction {

    execute() {
      return this.width * this.height.toString();
    }
  }

  const zyAreaFunction = new AreaFunction();

  const IconData =
    '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">' +
    '<path d="M4 6H20V18H4V6M6 8V16H18V8H6Z" />' +
    '</svg>';

  const AreaMetadata = {
    id: 'area',
    metadataVersion: 2,
    icon: IconData,
    label: 'Area',
    category: 'Plugin',
    format: 'number',
    properties: [{
      id: 'width',
      name: 'Width',
      type: 'number',
      default: '0',
      main: true
    },
    {
      id: 'height',
      name: 'Height',
      type: 'number',
      default: '0',
      main: false
    }],
    translations: [{
      lang: 'fr',
      label: 'Surface',
      category: 'Nombre',
      properties: [
        { id: 'width', name: 'Largeur' },
        { id: 'height', name: 'Hauteur' }
      ]
    }]
  };

  zySdk.services.registry.registerFunction(AreaMetadata, AreaFunction);
})();