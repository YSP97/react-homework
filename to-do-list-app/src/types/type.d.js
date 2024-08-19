import { array, bool, func, number, string } from 'prop-types';

export const CardPropTypes = {
  id: string.isRequired,
  title: string.isRequired,
  text: string.isRequired,
  startTime: number.isRequired,
  endTime: number.isRequired,
  checked: bool.isRequired,
  saved: bool.isRequired,
  onChecked: func.isRequired,
  onSavedChange: func.isRequired,
  daynight: string.isRequired,
  isDarkMode: bool.isRequired,
};

export const CardListPropTypes = {
  list: array.isRequired,
  onChecked: func.isRequired,
  onSavedChange: func.isRequired,
  isDarkMode: bool.isRequired,
};

export const DialogPropTypes = {
  onChange: func.isRequired,
  title: string.isRequired,
  text: string,
  value: string.isRequired,
  onStartTimeChange: func.isRequired,
  onEndTimeChange: func.isRequired,
  startTime: string.isRequired,
  endTime: string.isRequired,
  isDarkMode: bool.isRequired,
};

export const ModalPropTypes = {
  isClosedModal: bool.isRequired,
  onSave: func.isRequired,
  onClose: func.isRequired,
  isDarkMode: bool.isRequired,
};

export const StatusPropTypes = {
  count: number.isRequired,
  title: string.isRequired,
  onClick: func.isRequired,
  status: string.isRequired,
  isActive: bool.isRequired,
  disabled: bool.isRequired,
  isDarkMode: bool.isRequired,
};

export const StatusBarPropTypes = {
  data: array.isRequired,
  onStatusClick: func.isRequired,
  activeStatus: string.isRequired,
  isDarkMode: bool.isRequired,
};
