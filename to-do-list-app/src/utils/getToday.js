// 날짜 가져오는 함수
function getToday() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  const days = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  const dayOfWeek = days[today.getDay()];

  const todayDate = `${year}년 ${month}월 ${date}일 (${dayOfWeek})`;

  return todayDate;
}

export default getToday;
