import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'SSHive — SSH/SFTP/RDP Client for macOS';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a1b26 0%, #24283b 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 120,
            height: 120,
            borderRadius: 28,
            background: 'linear-gradient(135deg, #1a1b26 0%, #24283b 100%)',
            border: '3px solid rgba(122, 162, 247, 0.3)',
            marginBottom: 32,
          }}
        >
          <svg
            width="70"
            height="70"
            viewBox="0 0 1024 1024"
            fill="none"
          >
            <path
              d="M280 340 L480 512 L280 684"
              stroke="#7aa2f7"
              strokeWidth="80"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="540"
              y1="684"
              x2="760"
              y2="684"
              stroke="#7aa2f7"
              strokeWidth="80"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: '#c0caf5',
            marginBottom: 16,
          }}
        >
          SSHive
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: '#565f89',
            marginBottom: 40,
          }}
        >
          SSH, SFTP, RDP & VNC — all in one app for macOS
        </div>

        {/* Badges */}
        <div style={{ display: 'flex', gap: 16 }}>
          {['SSH', 'SFTP', 'RDP', 'VNC', 'Tunnels', 'MCP'].map((label) => (
            <div
              key={label}
              style={{
                padding: '8px 20px',
                borderRadius: 999,
                background: 'rgba(122, 162, 247, 0.1)',
                border: '1px solid rgba(122, 162, 247, 0.2)',
                color: '#7aa2f7',
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
