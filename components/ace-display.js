AFRAME.registerComponent('ace-display', {
  schema: {
    inputDevice: {type: 'selector'}
  },

  init: function () {
    // try {
    //   this.initEditor();
    // } catch (exception) {
    //   // TODO get rid of this
    //   $.getScript('https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/ace.js', () => {
    //     this.initEditor();
    //   });
    // }
    this.initEditor();
    this.el.setAttribute('geometry', 'primitive: plane; width: 2; height: 2;');
    this.el.setAttribute('htmltexture', 'asset: #editor;');
  },

  initEditor: function () {
    this.editorElement = document.createElement('div');
    this.editorElement.setAttribute('id', 'editor');
    this.el.appendChild(this.editorElement);

    this.editor = ace.edit('editor');

    this.editor.setTheme('ace/theme/monokai');
    this.editor.getSession().setMode('ace/mode/javascript');

    let _this = this;
    this.data.inputDevice.addEventListener('keypress', (event) => {
      _this.editor.focus();
      _this.editorElement.dispatchEvent(event.detail);
      // _this.editor.insert(event.detail.key);
    });
  }
});
