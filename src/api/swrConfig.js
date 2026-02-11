// SWR Configuration for better performance and caching
export const swrConfig = {
  revalidateOnFocus: false, // Don't revalidate when window regains focus
  revalidateOnReconnect: true, // Revalidate when reconnecting
  dedupingInterval: 5000, // Dedupe requests within 5 seconds
  focusThrottleInterval: 10000, // Throttle focus revalidation to 10 seconds
  errorRetryCount: 3, // Retry failed requests 3 times
  errorRetryInterval: 5000, // Wait 5 seconds between retries
  shouldRetryOnError: true,
  // Cache data for 5 minutes
  refreshInterval: 0, // Don't auto-refresh (only manual or on mount)
};
