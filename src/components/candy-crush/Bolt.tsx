export default function Bolt() {
  return (
    <svg className="bolt" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_di_64_1310)">
        <circle cx="8.73047" cy="9.27106" r="6.5" fill="url(#paint0_radial_64_1310)" />
      </g>
      <path d="M5.96094 11.5657L11.4995 6.97635M5.96094 6.97635L11.4995 11.5657" stroke="#114944" />
      <defs>
        <filter id="filter0_di_64_1310" x="0.230469" y="0.771057" width="21" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.0525 0 0 0 0 0.2625 0 0 0 0 0.255726 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_64_1310" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_64_1310" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.12184 0 0 0 0 0.504167 0 0 0 0 0.464752 0 0 0 1 0" />
          <feBlend mode="normal" in2="shape" result="effect2_innerShadow_64_1310" />
        </filter>
        <radialGradient id="paint0_radial_64_1310" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.73047 6.27106) rotate(90) scale(9.5)">
          <stop offset="0.151042" stop-color="#217D7A" />
          <stop offset="1" stop-color="#114B4A" />
        </radialGradient>
      </defs>
    </svg>
  )
}