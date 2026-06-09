import { useState, useEffect } from 'react';
import axios from 'axios';
import LeftCanvas from './components/LeftCanvas';
import RightPanel from './components/RightPanel';
import Background from './components/Background';
import './index.css';

// передача куки для всех запросов глобально
axios.defaults.withCredentials = true;

function App() {
  const [scientists, setScientists] = useState([]);
  const [activeScientistId, setActiveScientistId] = useState(null);

  useEffect(() => {
    // два запроса параллельно: бд ученных и проверка куки
    Promise.all([
      axios.get('http://localhost:8000/api/scientists'),
      axios.get('http://localhost:8000/api/init')
    ])
      .then(([scientistsRes, initRes]) => {
        setScientists(scientistsRes.data);
        
        // Если бэкенд нашел куки, отображение ученного, которого он нашел
        if (initRes.data.type === 'saved_selection') {
          setActiveScientistId(initRes.data.data.id);
        }
      })
      .catch((error) => console.error("Ошибка API:", error));
  }, []);

  // отправка куки на бэкенд
  const handleScientistSelect = (id) => {
    setActiveScientistId(id);
    axios.post(`http://localhost:8000/api/scientists/${id}/select`)
      .catch((err) => console.error("Ошибка при сохранении куки:", err));
  };

  const activeScientist = scientists.find((s) => s.id === activeScientistId);

  return (
    <div className="app-container" style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Background />
      
      <div style={{ display: 'flex', width: '100%', height: '100%', position: 'relative', zIndex: 1 }}>
        <LeftCanvas 
          scientists={scientists} 
          activeScientistId={activeScientistId}
          onScientistSelect={handleScientistSelect}
        />
        <RightPanel data={activeScientist} />
      </div>
    </div>
  );
}

export default App;