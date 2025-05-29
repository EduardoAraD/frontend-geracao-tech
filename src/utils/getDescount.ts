export function getDescount(value: number) {
  const DESCOUNT_INTERVAL = 5;
  
  return (value % DESCOUNT_INTERVAL) * DESCOUNT_INTERVAL;
}
