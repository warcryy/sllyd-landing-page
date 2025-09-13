// Google Apps Script Web App URL for Sheets integration
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzxs-08TbTLsvNo91lkhOiWU-_Bc0Z3nAPiLRF7R6a6J1ouUq1II2Hn-G0rgUomjMZL/exec';

// Function to get IP address
const getIPAddress = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Error fetching IP:', error);
    return 'Unknown';
  }
};

export const submitEmail = async (email, source) => {
  try {
    // Get IP address
    const ipAddress = await getIPAddress();
    
    // Prepare form data with IP address
    const params = new URLSearchParams();
    params.append('email', email);
    params.append('source', source);
    params.append('ip', ipAddress);
    
    // Format timestamp as M/D/YYYY H:MM:SS
    const now = new Date();
    const clientTimestamp = (now.getMonth() + 1) + '/' + now.getDate() + '/' + now.getFullYear() + ' ' + 
                          now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0') + ':' + String(now.getSeconds()).padStart(2, '0');
    params.append('timestamp', clientTimestamp);
    params.append('userAgent', navigator.userAgent);

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body: params.toString(),
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Log the submission for debugging
    console.log('Waitlist submission:', {
      email: email,
      source: source,
      ip: ipAddress,
      timestamp: new Date().toISOString()
    });

    return response;
  } catch (error) {
    console.error('Email submit error:', error);
    throw error;
  }
};


