import { Typography, Box, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

export default function RightPanel({ data }) {
  const cardStyle = {
    flex: 1,
    margin: 'clamp(16px, 3vw, 40px)',
    padding: 'clamp(24px, 4vw, 50px)',
    borderRadius: '24px',
    background: 'linear-gradient(145deg, rgba(8, 20, 40, 0.9) 0%, rgba(4, 10, 20, 0.95) 100%)',
    border: '1px solid rgba(53, 214, 255, 0.15)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflowY: 'auto',
  };

  if (!data) {
    return (
      <Box sx={{ display: 'flex', flex: 1, background: 'transparent', height: '100vh', overflow: 'hidden' }}>
        <Box sx={cardStyle}>
          <Typography variant="h3" sx={{ color: '#6fe9ff', fontWeight: 600, mb: 3, fontSize: 'clamp(2rem, 3vw, 3rem)' }}>
            ДНК великих открытий
          </Typography>
          <Typography variant="h6" sx={{ color: '#a0b0c0', fontWeight: 400, mb: 'auto', fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
            Нажмите на учёного в цепочке ДНК, чтобы узнать<br/>его биографию и вклад в науку.
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mb: 'auto' }}>
            <Avatar sx={{ width: 'clamp(80px, 10vw, 120px)', height: 'clamp(80px, 10vw, 120px)', bgcolor: 'rgba(53, 214, 255, 0.1)', border: '1px solid rgba(53, 214, 255, 0.3)', mb: 3 }}>
              <PersonIcon sx={{ fontSize: 'clamp(40px, 5vw, 60px)', color: '#35d6ff' }} />
            </Avatar>
            <Typography variant="h5" sx={{ color: '#e0e0e0', textAlign: 'center' }}>
              Выберите учёного слева
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', flex: 1, background: 'transparent', height: '100vh', overflow: 'hidden' }}>
      <Box sx={{ ...cardStyle, justifyContent: 'center' }}>
        <Typography variant="h2" sx={{ color: '#c9ffff', fontWeight: 'bold', mb: 1, fontSize: 'clamp(2.5rem, 4vw, 3.75rem)' }}>
          {data.name}
        </Typography>
        <Typography variant="h4" sx={{ color: '#35d6ff', mb: 4, fontFamily: 'monospace', fontSize: 'clamp(1.5rem, 2vw, 2.125rem)' }}>
          {data.years}
        </Typography>
        
        <Typography variant="body1" sx={{ fontSize: 'clamp(1rem, 1.2vw, 1.25rem)', lineHeight: 1.8, color: '#d0d8e0', mb: 4 }}>
          {data.bio}
        </Typography>
        
        <Box sx={{ background: 'rgba(53, 214, 255, 0.05)', padding: 'clamp(16px, 2vw, 25px)', borderRadius: '16px', borderLeft: '4px solid #35d6ff' }}>
          <Typography variant="h6" sx={{ color: '#6fe9ff', mb: 1, fontSize: 'clamp(1.1rem, 1.5vw, 1.25rem)' }}>
            Ключевое открытие:
          </Typography>
          <Typography variant="body1" sx={{ color: '#fff', fontSize: 'clamp(0.9rem, 1.1vw, 1.1rem)', lineHeight: 1.6 }}>
             {data.contribution}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}