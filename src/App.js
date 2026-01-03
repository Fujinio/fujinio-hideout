import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '2em', fontFamily: 'sans-serif' }}>
      <h1>藤鳰の隠れ家へようこそ</h1>
      <div style={{
        marginTop: '2em',
        padding: '1em',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <p>ここでは、五目並べのゲームや創作の記録を公開しています。</p>
        <p>気軽に楽しんでいってくださいね。</p>
        <div style={{ marginTop: '2em' }}>
          <a
            href="/gomoku"
            style={{
              background: 'linear-gradient(to right, orange, darkorange)',
              color: 'white',
              padding: '1em 2em',
              borderRadius: '1em',
              textDecoration: 'none',
              fontSize: '1.2em',
              fontWeight: 'bold',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }}
          >
            🎮 本格五目並べで遊ぶ
          </a>
        </div>
        <nav style={{ marginTop: '2em' }}>
          <a href="/privacy.html">プライバシーポリシー</a> | <a href="/terms.html">利用規約</a>
        </nav>
      </div>
    </div>
  );
}

export default App;
