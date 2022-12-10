import React from 'react';
import { render } from 'react-dom';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';

function timeSlotValidator(slotTime) {
  const eveningTime = new Date(
    slotTime.getFullYear(),
    slotTime.getMonth(),
    slotTime.getDate(),
    18,
    0,
    0
  );
  const isValid = slotTime.getTime() > eveningTime.getTime();
  return isValid;
}
function Main() {
  return (
    <DayTimePicker
      timeSlotSizeMinutes={15}
      timeSlotValidator={timeSlotValidator}
    />
  );
}

export default Main;
