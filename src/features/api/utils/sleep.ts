/**
 * Simulate a delay of a given duration.
 * Useful stand-in for mocking api calls without making network requests.
 * @param duration - Milliseconds to wait before resolving promise
 */
const sleep = async (duration: number = 500): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, duration))
}

export { sleep }
