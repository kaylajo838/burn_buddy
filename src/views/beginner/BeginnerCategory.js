import { Typography, Card, Box } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import band from '../../images/band.png'
import barbell from '../../images/barbell.png'
import bodyweight from '../../images/bodyweight.png'
import cables from '../../images/cables.png'
import dumbell from '../../images/dumbbell.png'
import kettlebell from '../../images/kettlebell.png'
import machine from '../../images/machine.png'
import medicineBall from '../../images/medicineball.png'
import plate from '../../images/plate.png'
import stretches from '../../images/stretches.png'
import trx from '../../images/trx.png'
import yoga from '../../images/yoga.png'

export default function BeginnerCategory() {

  const navigate = useNavigate();

  return (
    <div style={{ marginRight: '40px', marginLeft: '40px', marginBottom: '40px'}}>
        <Button sx={{margin: '20px'}} onClick={() => navigate('/beginner')}>Back</Button>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: 5
        }}>
            <Typography variant='h3' component='h2'>
                Beginner Workouts
            </Typography>
        </Box>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 5,
            flexWrap: "wrap"
        }}>
            <Card sx={{ minWidth: 200, display: 'flex', justifyContent: 'center' }}>
                <CardActions sx={{ flexDirection: 'column' }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={band}
                        alt="resistance band"
                    />
                    <Button size="small" onClick={() => navigate('/beginnerBand')}>Band</Button>
                </CardActions>
            </Card>
            <Card sx={{ minWidth: 200, display: 'flex', justifyContent: 'center' }}>
                <CardActions sx={{ flexDirection: 'column' }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={barbell}
                        alt="barbell"
                    />
                    <Button size="small" onClick={() => navigate('/beginnerBarbell')}>Barbell</Button>
                </CardActions>
            </Card>
            <Card sx={{ minWidth: 200, display: 'flex', justifyContent: 'center' }}>
                <CardActions sx={{ flexDirection: 'column' }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={bodyweight}
                        alt="body for bodyweight exercise"
                    />
                    <Button size="small" onClick={() => navigate('/beginnerBodyweight')}>Bodyweight</Button>
                </CardActions>
            </Card>
            <Card sx={{ minWidth: 200, display: 'flex', justifyContent: 'center' }}>
                <CardActions sx={{ flexDirection: 'column' }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={cables}
                        alt="cables exercise"
                    />
                    <Button size="small" onClick={() => navigate('/beginnerCables')}>Cables</Button>
                </CardActions>
            </Card>
            <Card sx={{ minWidth: 200, display: 'flex', justifyContent: 'center' }}>
                <CardActions sx={{ flexDirection: 'column' }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={dumbell}
                        alt="dumbells"
                    />
                    <Button size="small" onClick={() => navigate('/beginnerDumbbells')}>Dumbbells</Button>
                </CardActions>
            </Card>
            <Card sx={{ minWidth: 200, display: 'flex', justifyContent: 'center' }}>
                <CardActions sx={{ flexDirection: 'column' }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={kettlebell}
                        alt="kettleball"
                    />
                    <Button size="small" onClick={() => navigate('/beginnerKettlebells')}>Kettlebells</Button>
                </CardActions>
            </Card>
            <Card sx={{ minWidth: 200, display: 'flex', justifyContent: 'center' }}>
                <CardActions sx={{ flexDirection: 'column' }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={machine}
                        alt="exercise machine"
                    />
                    <Button size="small" onClick={() => navigate('/beginnerMachine')}>Machine</Button>
                </CardActions>
            </Card>
            <Card sx={{ minWidth: 200, display: 'flex', justifyContent: 'center' }}>
                <CardActions sx={{ flexDirection: 'column' }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={medicineBall}
                        alt="medicine ball"
                    />
                    <Button size="small" onClick={() => navigate('/beginnerMedicineBall')}>Medicine Ball</Button>
                </CardActions>
            </Card>
            <Card sx={{ minWidth: 200, display: 'flex', justifyContent: 'center' }}>
                <CardActions sx={{ flexDirection: 'column' }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={plate}
                        alt="exercise plate"
                    />
                    <Button size="small" onClick={() => navigate('/beginnerPlate')}>Plate</Button>
                </CardActions>
            </Card>
            <Card sx={{ minWidth: 200, display: 'flex', justifyContent: 'center' }}>
                <CardActions sx={{ flexDirection: 'column' }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={stretches}
                        alt="stick figure stretching"
                    />
                    <Button size="small" onClick={() => navigate('/beginnerStretches')}>Stretches</Button>
                </CardActions>
            </Card>
            <Card sx={{ minWidth: 200, display: 'flex', justifyContent: 'center' }}>
                <CardActions sx={{ flexDirection: 'column' }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={trx}
                        alt="trx exercise"
                    />
                    <Button size="small" onClick={() => navigate('/beginnerTrx')}>TRX</Button>
                </CardActions>
            </Card>
            <Card sx={{ minWidth: 200, display: 'flex', justifyContent: 'center' }}>
                <CardActions sx={{ flexDirection: 'column' }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={yoga}
                        alt="trx exercise"
                    />
                    <Button size="small" onClick={() => navigate('/beginnerYoga')}>Yoga</Button>
                </CardActions>
            </Card>
        </Box>
    </div>
  )
}