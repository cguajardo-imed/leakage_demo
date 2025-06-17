(async () => {
  const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } = process.env;
  console.log('This is a test script with some bad practices.');

  if (!AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY) {
    console.error('API_KEY and API_SECRET must be set in environment variables.');
    process.exit(1);
  }

  // hardcoded token
  const token = 'eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9.eyJzdWIiOiAiMTIzNDU2Nzg5MCIsICJuYW1lIjogIkpvaG4gRG9lIiwgImFkbWluIjogdHJ1ZX0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

  const result = await fetch('https://api.example.com/data', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })

  if (!result.ok) {
    console.error('Failed to fetch data:', result.statusText);
    process.exit(1);
  }

  const data = await result.json();
  console.log('Fetched data:', data);
})

