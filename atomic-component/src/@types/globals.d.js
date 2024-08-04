import { string, number, oneOf, exact } from 'prop-types';

const statusType = oneOf(['lock', 'edit']);

export const profileType = exact({
  name: string.isRequired,
  imgURL: string.isRequired,
  status: statusType,
  size: number,
});
