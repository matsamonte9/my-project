import { Hello } from './components/Hello';
import './App.css'

function App() {

  // console.log(import.meta.env.VITE_API_URL);
  // console.log(import.meta.env.VITE_APP_NAME);

  return (
    <main>
      <h1>Welcome to my Project</h1>
      <Hello name={'Veronica'} />
      <p>{import.meta.env.VITE_API_URL}</p>
      <p>{import.meta.env.VITE_APP_NAME}</p>
    </main>
  );
}

export default App
