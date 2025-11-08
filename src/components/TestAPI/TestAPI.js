import React, { useState } from 'react';
import { testAPIConnection } from '../../services/api';

const TestAPI = () => {
  const [testResult, setTestResult] = useState('');

  const testConnection = async () => {
    setTestResult('Testing connection...');
    const result = await testAPIConnection();
    setTestResult(result.success ? '✅ API Connection Successful!' : `❌ API Error: ${result.error}`);
  };

  return (
    <div style={{ padding: '20px', background: '#f0f0f0', margin: '20px 0' }}>
      <button onClick={testConnection}>Test API Connection</button>
      {testResult && <p style={{ marginTop: '10px' }}>{testResult}</p>}
    </div>
  );
};

export default TestAPI;