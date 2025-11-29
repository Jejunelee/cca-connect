import Script from 'next/script';

export default function UmamiTracker() {
  return (
    <Script
      defer
      src="https://umami-qw6d3biym-pinesheets-projects.vercel.app/script.js"
      data-website-id="75177303-2683-4c76-8506-61e3a80c6081"
      strategy="afterInteractive"
    />
  );
}