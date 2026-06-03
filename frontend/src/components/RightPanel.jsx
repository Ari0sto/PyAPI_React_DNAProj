import { Typography, Box, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export default function RightPanel({ data }) {
  // Базовые стили
  const cardStyle = {
    flex: 1,
    margin: '40px',
    padding: '50px',
    borderRadius: '24px',
    background: 'linear-gradient(145deg, rgba(8, 20, 40, 0.9) 0%, rgba(4, 10, 20, 0.95) 100%)', // Темно-синий градиент
    border: '1px solid rgba(53, 214, 255, 0.15)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden'
  };

  // ЭКРАН ПО УМОЛЧАНИЮ
  if (!data) {
    return (
      <Box sx={{ display: 'flex', flex: 1, background: 'transparent' }}>
        <Box sx={cardStyle}>
          <Typography variant="h3" sx={{ color: '#6fe9ff', fontWeight: 600, mb: 3 }}>
            ДНК великих открытий
          </Typography>
          <Typography variant="h6" sx={{ color: '#a0b0c0', fontWeight: 400, mb: 'auto' }}>
            Нажмите на учёного в цепочке ДНК, чтобы узнать<br/>его биографию и вклад в науку.
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mb: 'auto' }}>
            <Avatar sx={{ width: 120, height: 120, bgcolor: 'rgba(53, 214, 255, 0.1)', border: '1px solid rgba(53, 214, 255, 0.3)', mb: 3 }}>
              <PersonIcon sx={{ fontSize: 60, color: '#35d6ff' }} />
            </Avatar>
            <Typography variant="h5" sx={{ color: '#e0e0e0' }}>
              Выберите учёного слева
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }

  // ЭКРАН УЧЕНОГО (когда кликнули)
  return (
    <Box sx={{ display: 'flex', flex: 1, background: 'transparent' }}>
      <Box sx={{ ...cardStyle, justifyContent: 'center' }}>
        <Typography variant="h2" sx={{ color: '#c9ffff', fontWeight: 'bold', mb: 1 }}>
          {data.name}
        </Typography>
        <Typography variant="h4" sx={{ color: '#35d6ff', mb: 4, fontFamily: 'monospace' }}>
          {data.years}
        </Typography>
        
        <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.8, color: '#d0d8e0', mb: 4 }}>
          {data.bio}
        </Typography>
        
        <Box sx={{ background: 'rgba(53, 214, 255, 0.05)', padding: '25px', borderRadius: '16px', borderLeft: '4px solid #35d6ff' }}>
          <Typography variant="h6" sx={{ color: '#6fe9ff', mb: 1 }}>
            Ключевое открытие:
          </Typography>
          <Typography variant="body1" sx={{ color: '#fff', fontSize: '1.1rem', lineHeight: 1.6 }}>
             {data.contribution}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}