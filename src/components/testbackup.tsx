'use client';

import { useState } from 'react';

interface TestResult {
  success: boolean;
  message: string;
  data?: any;
}

export default function VercelTestPage() {
  const [apiToken, setApiToken] = useState('');
  const [projectId, setProjectId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<{
    tokenTest?: TestResult;
    projectTest?: TestResult;
  }>({});

  const testVercelCredentials = async () => {
    if (!apiToken || !projectId) {
      alert('Please enter both API Token and Project ID');
      return;
    }

    setIsLoading(true);
    setResults({});

    try {
      const userResponse = await fetch('https://api.vercel.com/v2/user', {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      });

      const tokenTest: TestResult = {
        success: userResponse.ok,
        message: userResponse.ok 
          ? '✅ API Token is valid' 
          : `❌ API Token error: ${userResponse.status} ${userResponse.statusText}`,
      };

      if (userResponse.ok) {
        const userData = await userResponse.json();
        tokenTest.data = userData;
      }

      const projectResponse = await fetch(
        `https://api.vercel.com/v9/projects/${projectId}`,
        {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        }
      );

      const projectTest: TestResult = {
        success: projectResponse.ok,
        message: projectResponse.ok
          ? '✅ Project access successful'
          : `❌ Project access error: ${projectResponse.status} ${projectResponse.statusText}`,
      };

      if (projectResponse.ok) {
        const projectData = await projectResponse.json();
        projectTest.data = projectData;
      }

      setResults({ tokenTest, projectTest });
    } catch (error) {
      const errorResult: TestResult = {
        success: false,
        message: `❌ Network error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      };
      setResults({ tokenTest: errorResult });
    } finally {
      setIsLoading(false);
    }
  };

  const clearFields = () => {
    setApiToken('');
    setProjectId('');
    setResults({});
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-black mb-2">
            Vercel Credentials Test
          </h1>
          <p className="text-sm text-black">
            Test your Vercel API token and project ID
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="text-yellow-600">⚠️</span>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-black">
                Security Notice
              </h3>
              <div className="mt-2 text-sm text-black">
                <p>
                  Never expose your API tokens. Use environment variables in production.
                  If you've shared tokens publicly, rotate them immediately.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="apiToken" className="block text-sm font-medium text-black">
              Vercel API Token
            </label>
            <input
              type="password"
              id="apiToken"
              value={apiToken}
              onChange={(e) => setApiToken(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your API token"
            />
          </div>

          <div>
            <label htmlFor="projectId" className="block text-sm font-medium text-black">
              Project ID
            </label>
            <input
              type="text"
              id="projectId"
              value={projectId}
              onChange={(e) => setProjectId(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="prj_xxxxxxxxxxxxxxxxxxxxxxxx"
            />
          </div>

          <div className="flex space-x-3">
            <button
              onClick={testVercelCredentials}
              disabled={isLoading}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Testing...' : 'Test Credentials'}
            </button>
            
            <button
              onClick={clearFields}
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Clear
            </button>
          </div>
        </div>

        {results.tokenTest && (
          <div className="mt-8 space-y-4">
            <h2 className="text-lg font-semibold text-black">Test Results</h2>
            
            <div className={`p-4 rounded-md ${
              results.tokenTest.success 
                ? 'bg-green-50 border border-green-200' 
                : 'bg-red-50 border border-red-200'
            }`}>
              <h3 className="font-medium text-black">API Token Test</h3>
              <p className="text-sm text-black mt-1">{results.tokenTest.message}</p>
              {results.tokenTest.data && (
                <details className="mt-2 text-xs text-black">
                  <summary className="cursor-pointer">View user details</summary>
                  <pre className="mt-2 p-2 bg-gray-100 rounded overflow-auto text-black">
                    {JSON.stringify(results.tokenTest.data, null, 2)}
                  </pre>
                </details>
              )}
            </div>

            {results.projectTest && (
              <div className={`p-4 rounded-md ${
                results.projectTest.success 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-red-50 border border-red-200'
              }`}>
                <h3 className="font-medium text-black">Project Access Test</h3>
                <p className="text-sm text-black mt-1">{results.projectTest.message}</p>
                {results.projectTest.data && (
                  <details className="mt-2 text-xs text-black">
                    <summary className="cursor-pointer">View project details</summary>
                    <pre className="mt-2 p-2 bg-gray-100 rounded overflow-auto text-black">
                      {JSON.stringify(results.projectTest.data, null, 2)}
                    </pre>
                  </details>
                )}
              </div>
            )}
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-medium text-black mb-2">How to use:</h3>
          <ol className="text-sm text-black list-decimal list-inside space-y-1">
            <li>Get your API token from Vercel dashboard → Settings → Tokens</li>
            <li>Find your Project ID in Vercel project settings</li>
            <li>Enter both values and click "Test Credentials"</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
