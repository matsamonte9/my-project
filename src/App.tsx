import { Hello } from './components/Hello';
import './App.css'

function App() {
  const isPreview = import.meta.env.VITE_VERCEL_ENV === 'preview';

  return (
    <>
      {isPreview && (
        <div style={{
          background: '#facc15',
          padding: '8px',
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          🚧 PREVIEW MODE — Not Production
        </div>
      )}

      <main>
        <h1>Welcome to my Project</h1>
        <Hello name={'Veronica'} />
        <p>{import.meta.env.VITE_API_URL}</p>
        <p>{import.meta.env.VITE_APP_NAME}</p>
        <p>Edited Docker Locally</p>
      </main>
    </>
  );
}

export default App
