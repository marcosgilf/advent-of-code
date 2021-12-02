import { readFileSync } from 'fs';

export const txtToArrayOfStrings = path =>
  readFileSync(path, 'utf8')
    .split('\n')
    .filter(item => item !== '');

export const txtToArrayOfNumbers = path => txtToArrayOfStrings(path).map(item => Number(item));
