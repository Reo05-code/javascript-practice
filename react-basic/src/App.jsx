import './App.css'
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import { useState, useEffect, } from 'react';
import { ThemeProvider } from './context/ThemeProvider';

function App() {
  const siteTitle = 'Reactの基礎を学ぼう';
  const currentYear = new Date().getFullYear();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.title = siteTitle;
  }, []);

  return (
    <ThemeProvider>
      <>
        <Header siteTitle={siteTitle}/>
        <MainContent progress={progress} setProgress={setProgress}/>
        <Footer siteTitle={siteTitle} currentYear={currentYear}/>
      </>
    </ThemeProvider>
  )
}



export default App
