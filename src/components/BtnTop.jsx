import scrollTo from "../utils/scrollTo";

const BtnTop = () => {
  return (
    <span id="btnTop" onClick={scrollTo}>
      <i className="arrow up">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="60"
            height="60"
            rx="16"
            transform="matrix(0 -1 -1 0 60 60.0005)"
            fill="#7B4AE2"
            fillOpacity="0.1"
          />
          <path
            d="M40 34.0005L30 24.0005L20 34.0005"
            stroke="#7B4AE2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </i>
    </span>
  );
};

export default BtnTop;
