export const returnOnlyNumbers = (string: string): string =>
  string.replace(/[^\d]+/g, '')
