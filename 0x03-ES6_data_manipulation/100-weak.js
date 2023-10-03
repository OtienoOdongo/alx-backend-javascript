// Export a WeakMap to track the number of queries for each endpoint
export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
  // If the endpoint doesn't exist in the WeakMap, initialize it with a count of 0
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Increment the count for the existing endpoint
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);

  // If the count is >= 5, throw an error
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}
