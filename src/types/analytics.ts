export interface AnalyticsData {
    pageviews: number;
    visits: number;
    visitors: number;
    bounceRate: number;
    avgSessionTime: number;
  }
  
  export interface PageView {
    pathname: string;
    count: number;
    percentage: number;
  }
  
  export interface Referrer {
    referrer: string;
    count: number;
    percentage: number;
  }
  
  export interface AnalyticsResponse {
    data: AnalyticsData;
    pageViews: PageView[];
    referrers: Referrer[];
    countries: { country: string; count: number; percentage: number }[];
  }