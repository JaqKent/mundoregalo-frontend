import { Department } from '~interfaces/interfaces';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function toBeImplemented(dep?: Department): never {
  throw new Error('Logic not implemented.');
}
