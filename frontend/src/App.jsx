import { useState, useEffect } from 'react';
import axios from 'axios';
import LeftCanvas from './components/LeftCanvas';
import RightPanel from './components/RightPanel';
import Background from './components/Background';
import './index.css';

function App() {
  const [scientists, setScientists] = useState([]);
  const [activeScientistId, setActiveScientistId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/scientists')
      .then((response) => {
        setScientists(response.data);
        // Стартовый макет
      })
      .catch((error) => console.error("Ошибка:", error));
  }, []);

  const activeScientist = scientists.find((s) => s.id === activeScientistId);

  return (
    <div className="app-container" style={{ position: 'relative' }}>
      {/* Слой 0: Глобальный фон на весь экран */}
      <Background />
      
      {/* Слой 1: Контент поверх фона */}
      <div style={{ display: 'flex', width: '100%', height: '100%', position: 'relative', zIndex: 1 }}>
        <LeftCanvas 
          scientists={scientists} 
          activeScientistId={activeScientistId}
          onScientistSelect={setActiveScientistId} 
        />
        <RightPanel data={activeScientist} />
      </div>
    </div>
  );
}

export default App;