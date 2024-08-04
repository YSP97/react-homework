import { func, string, number, oneOf, exact } from 'prop-types';

export const statusType = oneOf(['lock', 'edit']);

export const profileType = exact({
  name: string.isRequired,
  imgURL: string.isRequired,
  status: statusType,
  size: number,
});

export const buttonType = exact({
  status: statusType,
  onClick: func.isRequired,
});
