import memoryCache from 'memory-cache';

// // Fetch the Auth0 token
const fetchAuthToken = async () => {
    const Token = await fetch('https://radarography.us.auth0.com/oauth/token', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: `{"client_id":"${process.env.AUTH0_API_CLIENT_ID}","client_secret":"${process.env.AUTHO_API_CLIENT_SECRET}","audience":"${process.env.AUTH0_API_CLIENT_AUDIENCE}","grant_type":"client_credentials"}`
    });

    var response = await Token.json();
    const access_token = response.access_token;

  // Store the token in the cache for 24 hours
  memoryCache.put('authToken', access_token, 24 * 60 * 60 * 1000);

  return access_token;
};

export default async function investor(req, res) {
    try {
        // Ensure the request method is POST
        if (req.method !== 'POST') {
            return res.status(405).json({ message: 'Method not allowed' });
        }

        // Get the token from the cache if it exists
        let access_token = memoryCache.get('authToken');

        // If the token does not exist or has expired, fetch a new one
        if (!access_token) {
            access_token = await fetchAuthToken();
        }
        console.log(access_token)
        // Parse the form data from the request body
        const formData = req.body;

        // Define the URL for the AWS API
        const url = `https://dc52mqdw79.execute-api.us-east-2.amazonaws.com/v1/contact/add`;
        console.log(JSON.stringify(formData),)
        // Make the POST request to the AWS API with the form data
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        // Check if the AWS API request was successful
        if (response.ok) {
            return res.status(200).json({ message: 'Form submitted successfully' });
        } else {
            const errorData = await response.json();
            return res.status(response.status).json({ message: 'Error submitting form', details: errorData });
        }
    } catch (error) {
        console.error('Error in API route:', error);
        return res.status(500).json({ message: 'Internal Server Error: Could not submit form' });
    }
}
