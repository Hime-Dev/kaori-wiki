import "./MadeWithFireJet.css";

export default function MadeWithFirejet(props: MadeWithFirejetProps) {
  return (
    <a
      className="made-with-firejet-made-with-firejet"
      href="https://link.firejet.io/made-with-firejet"
      target="_blank"
      rel="noreferrer"
    >
      <Group />
      <p className="made-with-firejet-text">Made With FireJet</p>
    </a>
  );
}

MadeWithFirejet.defaultProps = {
  style: {},
};

interface MadeWithFirejetProps {
  style: Object;
}

function Group() {
  return (
    <div className="firejet-logo-icon">
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 25 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.35494 13.4082C6.35494 13.4082 3.33633 16.2728 3.37658 21.0096C3.41266 25.5382 9.29723 28.0516 9.31805 30.6997C9.32276 31.1066 9.17412 31.5005 8.90169 31.803C8.90169 31.803 8.89197 31.8155 8.86976 31.8391C8.85283 31.8598 8.83423 31.8794 8.81425 31.8974C8.80176 31.9071 8.79065 31.921 8.77539 31.9349C7.25567 33.345 2.88666 32.5539 0.663292 24.718C0.663292 24.718 -4.04152 37.3281 11.6094 42.0982C11.6094 42.0982 13.4817 41.5431 14.9903 39.614C16.0228 38.2899 16.8861 36.3164 16.8625 33.4241C16.8056 25.6534 8.61856 24.1073 6.35494 13.4082Z"
          fill="url(#paint0_linear_1273_10957)"
         />
        <path
          d="M14.2546 0.900391C14.1311 0.997541 8.47136 5.48036 8.52132 11.9451C8.61709 23.8808 24.343 26.1083 17.0997 40.3395C19.489 39.2367 21.5227 37.4884 22.9718 35.2918C24.1487 33.4779 25.0245 31.113 24.9995 28.1027C24.9273 19.1051 10.3658 14.7528 14.2546 0.900391Z"
          fill="url(#paint1_linear_1273_10957)"
         />
        <path
          d="M22.9719 35.2918C25.7171 27.2422 21.8866 23.735 17.809 19.0885C8.72543 8.73634 14.1617 1.03918 14.2533 0.900391C10.3673 14.7528 24.926 19.1051 24.9982 28.1027C25.0246 31.113 24.1544 33.4779 22.9719 35.2918Z"
          fill="#ED9F5C"
         />
        <path
          d="M14.9945 39.6223C16.3102 33.7571 15.5497 29.8378 10.3313 24.4348C5.1129 19.0318 6.35504 13.4082 6.35504 13.4082C8.61865 24.1073 16.8057 25.6534 16.8681 33.431C16.8917 36.3233 16.0285 38.2969 14.9945 39.6223Z"
          fill="#ED9F5C"
         />
        <path
          d="M8.7808 31.9346C8.23953 32.4703 6.02033 34.3717 3.52633 32.2885C0.654824 29.8875 0.668702 24.7246 0.668702 24.7246C2.89207 32.5536 7.26108 33.3447 8.7808 31.9346Z"
          fill="#ED9F5C"
         />
        <defs>
          <linearGradient
            id="paint0_linear_1273_10957"
            x1="8.34584"
            y1="19.9055"
            x2="8.5178"
            y2="41.3196"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E68934" />
            <stop offset="1" stopColor="#E47033" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1273_10957"
            x1="1972.66"
            y1="5634.77"
            x2="1972.66"
            y2="11720.2"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E68934" />
            <stop offset="1" stopColor="#E47033" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
