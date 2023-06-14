import { Typography, Card, Box } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import easyicon from '../images/easyicon.png'
import intermediateicon from '../images/intermediateicon.png'
import advancedicon from '../images/advancedicon.png'

export default function Difficulty() {

  const navigate = useNavigate();

  return (
    <div style={{ marginRight: '40px', marginLeft: '40px', marginBottom: '40px'}}>
        <Button sx={{margin: '20px'}} onClick={() => navigate('/')}>Back</Button>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: 5
        }}>
            <Typography variant='h3' component='h2'>
                Select By Difficulty
            </Typography>
        </Box>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 15,
            flexWrap: "wrap"
        }}>
            <Card sx={{ minWidth: 200, display: 'flex', justifyContent: 'center' }}>
                <CardActions sx={{ flexDirection: 'column' }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={easyicon}
                        alt="easy weight"
                    />
                    <Button size="small" onClick={() => navigate('/beginner')}>Beginner</Button>
                </CardActions>
            </Card>
            <Card sx={{ minWidth: 200, display: 'flex', justifyContent: 'center' }}>
                <CardActions sx={{ flexDirection: 'column' }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={intermediateicon}
                        alt="intermediate weight"
                    />
                    <Button size="small" onClick={() => navigate('/intermediate')}>Intermediate</Button>
                </CardActions>
            </Card>
            <Card sx={{ minWidth: 200, display: 'flex', justifyContent: 'center' }}>
                <CardActions sx={{ flexDirection: 'column' }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={advancedicon}
                        alt="advanced weight"
                    />
                    <Button size="small" onClick={() => navigate('/advanced')}>Advanced</Button>
                </CardActions>
            </Card>
        </Box>
    </div>
  )
}
