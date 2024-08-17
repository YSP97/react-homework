import S from './Card.module.css';
function Card() {
  return (
    <div className={S.component}>
      <div className={S.card}>
        <div className={S.text}>
          <h3>카드 제목</h3>
          <p>동네 주민 정기 모임일. 저녁 식사 후, 모임 회의 가질 예정.</p>
        </div>
        <div className={S.input}>
          <input type="checkbox" name="" id="" />
        </div>
      </div>

      <hr />

      <div className={S.bottom}>
        <div className={S.time}>
          <span>오늘</span>
          <span className={S.now}>오후 07:00 - 9:30</span>
        </div>
        <button type="button">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Checkbox / Archive">
              <path
                id="Vector"
                d="M18.0883 4.40916L15.5891 1.91083C15.4329 1.75454 15.221 1.66671 15 1.66666H4.99996C4.77896 1.66671 4.56704 1.75454 4.41079 1.91083L1.91163 4.40916C1.83399 4.48656 1.77238 4.57851 1.73034 4.67975C1.6883 4.781 1.66665 4.88954 1.66663 4.99916V15.8333C1.66663 16.7525 2.41413 17.5 3.33329 17.5H16.6666C17.5858 17.5 18.3333 16.7525 18.3333 15.8333V4.99916C18.3333 4.88954 18.3116 4.781 18.2696 4.67975C18.2275 4.57851 18.1659 4.48656 18.0883 4.40916ZM5.34496 3.33333H14.655L15.4875 4.16583H4.51246L5.34496 3.33333ZM3.33329 15.8333V5.8325H16.6666L16.6683 15.8333H3.33329Z"
                fill="#D9D9D9"
              />
              <path
                id="Vector_2"
                d="M12.5 10H7.50004V8.33334H5.83337V11.6667H14.1667V8.33334H12.5V10Z"
                fill="#D9D9D9"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Card;
