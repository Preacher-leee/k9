import React from 'react';

const Logo: React.FC = () => {
  return (
    <div style={{
      backgroundColor: '#1a1a1a',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <a href="/" style={{ display: 'inline-block' }}>
        <svg
          className="logo"
          viewBox="0 0 500 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: '150px', width: 'auto' }}
        >
          <g>
            <path
              d="M240 40C180 40 150 70 150 120C150 170 200 200 240 200C280 200 300 180 300 180"
              stroke="#2D3E67"
              strokeWidth="20"
              strokeLinecap="round"
            />
            <path
              d="M260 40C320 40 350 70 350 120C350 170 300 200 260 200C220 200 200 180 200 180"
              stroke="#F68B28"
              strokeWidth="20"
              strokeLinecap="round"
            />
            <circle cx="200" cy="120" r="10" fill="#F68B28" />
            <circle cx="300" cy="120" r="10" fill="#2D3E67" />
          </g>
          <g transform="translate(100, 40)">
            <path
              d="M40 100L10 40H30L50 80L70 40H90L60 100H40Z"
              fill="#F68B28"
            />
            <path
              d="M110 100V40H95V60H85V40H70V100H85V80H95V100H110Z"
              fill="#2D3E67"
            />
            <path
              d="M130 100V40H170C183 40 195 50 195 70C195 90 183 100 170 100H130ZM150 80H165C168 80 175 78 175 70C175 62 168 60 165 60H150V80Z"
              fill="#2D3E67"
            />
            <path
              d="M200 100V40H245C258 40 270 50 270 70C270 90 258 100 245 100H200ZM220 80H240C243 80 250 78 250 70C250 62 243 60 240 60H220V80Z"
              fill="#2D3E67"
            />
            <path
              d="M275 100V40H335V60H295V65H325V85H295V100H275Z"
              fill="#2D3E67"
            />
            <text x="340" y="100" fontSize="16" fill="#2D3E67">™</text>
          </g>
        </svg>
      </a>
    </div>
  );
};

export default Logo;
