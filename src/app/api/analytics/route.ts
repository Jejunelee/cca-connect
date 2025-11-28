import { NextResponse } from 'next/server';

const VERCEL_API_TOKEN = process.env.VERCEL_API_TOKEN;
const VERCEL_PROJECT_ID = process.env.VERCEL_PROJECT_ID;

export async function GET(request: Request) {
  // Check for required environment variables
  if (!VERCEL_API_TOKEN) {
    return NextResponse.json(
      { 
        error: 'Configuration Error',
        message: 'VERCEL_API_TOKEN is not configured in environment variables',
        details: 'Please check your .env.local file and ensure VERCEL_API_TOKEN is set'
      },
      { status: 500 }
    );
  }

  if (!VERCEL_PROJECT_ID) {
    return NextResponse.json(
      { 
        error: 'Configuration Error',
        message: 'VERCEL_PROJECT_ID is not configured in environment variables',
        details: 'Please check your .env.local file and ensure VERCEL_PROJECT_ID is set'
      },
      { status: 500 }
    );
  }

  try {
    // Get query parameters for date range
    const { searchParams } = new URL(request.url);
    const from = searchParams.get('from') || '2024-01-01';
    const to = searchParams.get('to') || new Date().toISOString().split('T')[0];

    // Vercel Analytics API endpoints
    const endpoints = {
      overview: `https://api.vercel.com/v1/analytics/overview?projectId=${VERCEL_PROJECT_ID}&from=${from}&to=${to}`,
      pages: `https://api.vercel.com/v1/analytics/pages?projectId=${VERCEL_PROJECT_ID}&from=${from}&to=${to}&limit=10`,
      sources: `https://api.vercel.com/v1/analytics/sources?projectId=${VERCEL_PROJECT_ID}&from=${from}&to=${to}&limit=10`,
      countries: `https://api.vercel.com/v1/analytics/countries?projectId=${VERCEL_PROJECT_ID}&from=${from}&to=${to}&limit=10`,
    };

    const headers = {
      'Authorization': `Bearer ${VERCEL_API_TOKEN}`,
      'Content-Type': 'application/json',
    };

    // Fetch all analytics data in parallel
    const [overviewRes, pagesRes, sourcesRes, countriesRes] = await Promise.all([
      fetch(endpoints.overview, { headers }),
      fetch(endpoints.pages, { headers }),
      fetch(endpoints.sources, { headers }),
      fetch(endpoints.countries, { headers }),
    ]);

    // Check individual responses for errors
    if (!overviewRes.ok) {
      const errorText = await overviewRes.text();
      console.error('Vercel Overview API error:', overviewRes.status, errorText);
      throw new Error(`Vercel API responded with status: ${overviewRes.status}. Please check your project ID and API token permissions.`);
    }

    if (!pagesRes.ok) {
      const errorText = await pagesRes.text();
      console.error('Vercel Pages API error:', pagesRes.status, errorText);
      throw new Error(`Pages API error: ${pagesRes.status}`);
    }

    if (!sourcesRes.ok) {
      const errorText = await sourcesRes.text();
      console.error('Vercel Sources API error:', sourcesRes.status, errorText);
      throw new Error(`Sources API error: ${sourcesRes.status}`);
    }

    if (!countriesRes.ok) {
      const errorText = await countriesRes.text();
      console.error('Vercel Countries API error:', countriesRes.status, errorText);
      throw new Error(`Countries API error: ${countriesRes.status}`);
    }

    const [overview, pages, sources, countries] = await Promise.all([
      overviewRes.json(),
      pagesRes.json(),
      sourcesRes.json(),
      countriesRes.json(),
    ]);

    // Check if we have any data
    const hasData = overview.pageviews > 0 || overview.visits > 0 || overview.visitors > 0;

    if (!hasData) {
      return NextResponse.json({
        data: {
          pageviews: 0,
          visits: 0,
          visitors: 0,
          bounceRate: 0,
          avgSessionTime: 0,
        },
        pageViews: [],
        referrers: [],
        countries: [],
        warning: 'No analytics data available for the selected date range',
        details: 'This could be because: 1) Your site has not received any visitors yet, 2) Analytics data is still processing, or 3) The selected date range has no data'
      });
    }

    // Transform the data to match our interface
    const transformedData = {
      data: {
        pageviews: overview.pageviews || 0,
        visits: overview.visits || 0,
        visitors: overview.visitors || 0,
        bounceRate: overview.bounceRate || 0,
        avgSessionTime: overview.avgSessionTime || 0,
      },
      pageViews: (pages.data || []).map((page: any) => ({
        pathname: page.pathname || '/',
        count: page.pageviews || 0,
        percentage: page.percentage || 0,
      })),
      referrers: (sources.data || []).map((source: any) => ({
        referrer: source.source || 'Direct',
        count: source.visits || 0,
        percentage: source.percentage || 0,
      })),
      countries: (countries.data || []).map((country: any) => ({
        country: country.country || 'Unknown',
        count: country.visits || 0,
        percentage: country.percentage || 0,
      })),
    };

    return NextResponse.json(transformedData);

  } catch (error) {
    console.error('Analytics API error:', error);
    
    // Return specific error messages based on the error type
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    if (errorMessage.includes('API token') || errorMessage.includes('permissions')) {
      return NextResponse.json(
        { 
          error: 'Authentication Error',
          message: 'Invalid or expired Vercel API token',
          details: 'Please check that your VERCEL_API_TOKEN is valid and has the necessary permissions for analytics'
        },
        { status: 401 }
      );
    }

    if (errorMessage.includes('project ID')) {
      return NextResponse.json(
        { 
          error: 'Project Not Found',
          message: 'The specified Vercel project was not found',
          details: `Please verify that VERCEL_PROJECT_ID "${VERCEL_PROJECT_ID}" is correct and you have access to this project`
        },
        { status: 404 }
      );
    }

    if (errorMessage.includes('fetch') || errorMessage.includes('network')) {
      return NextResponse.json(
        { 
          error: 'Network Error',
          message: 'Failed to connect to Vercel API',
          details: 'Please check your internet connection and try again. If the problem persists, Vercel API might be temporarily unavailable.'
        },
        { status: 503 }
      );
    }

    // Generic error fallback
    return NextResponse.json(
      { 
        error: 'API Error',
        message: 'Failed to fetch analytics data from Vercel',
        details: errorMessage
      },
      { status: 500 }
    );
  }
}