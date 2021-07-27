import CommentList from './components/CommentList';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const onScroll = () => {
    const totalHeight = document.documentElement.scrollHeight;
    const degree = window.scrollY / (totalHeight - window.innerHeight);

    if (degree === 1) {
      setPage(page => page + 1);
    }
  };
  console.log(page);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
  }, []);

  return (
    <div className="App">
      <CommentList page={page} />
    </div>
  );
}

export default App;
