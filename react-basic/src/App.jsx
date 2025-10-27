import './App.css'

function App() {
  const siteTitle = 'Reactの基礎を学ぼう';
  const currentYear = new Date().getFullYear();

  return (
    <>
      <header>
        <h1>{siteTitle}</h1>
        <ul>
          <li><a href="#">HOME</a></li>
        </ul>
      </header>

      <main>
        <h2>本教材について</h2>
        <p>この教材では、Reactの基本的な使い方を学びます。</p>
        <p>各章で段階的に実装を進め、Reactアプリを作っていきます。</p>
        <p>本教材を通して、Reactの理解を深めていきます。</p>
      </main>

      <footer>
        <p>&copy; {currentYear} {siteTitle}</p>
      </footer>
    </>
  )
}

export default App
