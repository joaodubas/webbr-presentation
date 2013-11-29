(function (window, document, Reveal, undefined) {
  function urlify() {
    var args = Array.prototype.slice.call(arguments);
    args.unshift('/bower_components', 'reveal.js');
    return args.join('/');
  }

  Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    dependencies: [
      {
        src: urlify('lib', 'js', 'classList.js'),
        condition: function() { return !document.body.classList; }
      },
      {
        src: urlify('plugin', 'markdown', 'marked.js'),
        condition: function() {
          return !!document.querySelector( '[data-markdown]' );
        }
      },
      {
        src: urlify('plugin', 'markdown', 'markdown.js'),
        condition: function() {
          return !!document.querySelector( '[data-markdown]' );
        }
      },
      {
        src: urlify('plugin', 'highlight', 'highlight.js'),
        async: true,
        callback: function() { hljs.initHighlightingOnLoad(); }
      },
      {
        src: urlify('plugin', 'zoom-js', 'zoom.js'),
        async: true,
        condition: function() { return !!document.body.classList; }
      },
      {
        src: urlify('plugin', 'notes', 'notes.js'),
        async: true,
        condition: function() { return !!document.body.classList; }
      }
    ]
  });
})(window, document, Reveal);
