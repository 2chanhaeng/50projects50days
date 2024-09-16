export const sample =
  (n: number) =>
  <T>(arr: T[]) =>
    arr.sort(() => 0.5 - Math.random()).slice(0, n);
