import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F7F6F3',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: '#3D3B6E',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '32px',
              fontWeight: 'bold',
            }}
          >
            A
          </div>
          <span
            style={{
              fontSize: '40px',
              fontWeight: 'bold',
              color: '#3D3B6E',
            }}
          >
            aisitey
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: '#1E1F24',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Build with context, not chaos.
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: '28px',
            color: '#555861',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Seven context files that give AI agents complete project knowledge.
        </p>
      </div>
    ),
    { ...size }
  );
}