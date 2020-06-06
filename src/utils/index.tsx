export function cToFahr(temp: number) {
  const fahrenheit = (temp * 9) / 5 + 32;

  return fahrenheit.toFixed(1);
}
