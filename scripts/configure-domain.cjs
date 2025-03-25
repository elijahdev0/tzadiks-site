const axios = require('axios');

const DOMAIN_CONFIG = {
  domain: 'oneshotguns.org',
  spaceshipApiKey: 'EdcTLUAkPcw94TBKkmE8'
};

const SPACESHIP_API_URL = 'https://api.spaceship.com/api/v1';

async function configureDomain() {
  try {
    console.log('Configuring domain:', DOMAIN_CONFIG.domain);
    
    // Initialize Spaceship API client
    const api = axios.create({
      baseURL: SPACESHIP_API_URL,
      headers: {
        'Authorization': `Bearer ${DOMAIN_CONFIG.spaceshipApiKey}`,
        'Content-Type': 'application/json'
      }
    });

    // 1. Verify domain ownership
    console.log('Verifying domain ownership...');
    const domainInfo = await api.get(`/domains/${DOMAIN_CONFIG.domain}`);
    console.log('Domain ownership verified:', domainInfo.data);

    // 2. Configure DNS records
    console.log('Configuring DNS records...');
    const dnsRecords = [
      {
        type: 'A',
        name: '@',
        content: 'YOUR_SERVER_IP', // Replace with your actual server IP
        ttl: 3600
      },
      {
        type: 'CNAME',
        name: 'www',
        content: DOMAIN_CONFIG.domain,
        ttl: 3600
      }
    ];

    // Add DNS records
    for (const record of dnsRecords) {
      await api.post(`/domains/${DOMAIN_CONFIG.domain}/dns`, record);
      console.log(`Added DNS record:`, record);
    }

    // 3. Configure SSL certificate
    console.log('Configuring SSL certificate...');
    await api.post(`/domains/${DOMAIN_CONFIG.domain}/ssl`, {
      type: 'lets_encrypt',
      auto_renew: true
    });
    console.log('SSL certificate configured');

    // 4. Configure security headers
    console.log('Configuring security headers...');
    await api.post(`/domains/${DOMAIN_CONFIG.domain}/security`, {
      headers: {
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'X-XSS-Protection': '1; mode=block'
      }
    });
    console.log('Security headers configured');

    // 5. Configure redirects
    console.log('Configuring redirects...');
    await api.post(`/domains/${DOMAIN_CONFIG.domain}/redirects`, {
      from: 'www',
      to: '@',
      type: 301
    });
    console.log('Redirects configured');

    console.log('Domain configuration completed successfully!');
  } catch (error) {
    console.error('Error configuring domain:', error.response?.data || error.message);
    process.exit(1);
  }
}

configureDomain(); 