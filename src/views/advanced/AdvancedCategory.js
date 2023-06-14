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

export default function AdvancedCategory() {

  const navigate = useNavigate();

  return (
    <div style={{ marginRight: '40px', marginLeft: '40px', marginBottom: '40px'}}>
        <Button sx={{margin: '20px'}} onClick={() => navigate('/advanced')}>Back</Button>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: 5
        }}>
            <Typography variant='h3' component='h2'>
                Advanced Workouts
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
                    <Button size="small" onClick={() => navigate('/advancedBand')}>Band</Button>
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
                    <Button size="small" onClick={() => navigate('/advancedBarbell')}>Barbell</Button>
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
                    <Button size="small" onClick={() => navigate('/advancedBodyweight')}>Bodyweight</Button>
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
                    <Button size="small" onClick={() => navigate('/advancedCables')}>Cables</Button>
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
                    <Button size="small" onClick={() => navigate('/advancedDumbbells')}>Dumbbells</Button>
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
                    <Button size="small" onClick={() => navigate('/advancedKettlebells')}>Kettlebells</Button>
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
                    <Button size="small" onClick={() => navigate('/advancedMachine')}>Machine</Button>
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
                    <Button size="small" onClick={() => navigate('/advancedMedicineBall')}>Medicine Ball</Button>
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
                    <Button size="small" onClick={() => navigate('/advancedPlate')}>Plate</Button>
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
                    <Button size="small" onClick={() => navigate('/advancedStretches')}>Stretches</Button>
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
                    <Button size="small" onClick={() => navigate('/advancedTrx')}>TRX</Button>
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
                    <Button size="small" onClick={() => navigate('/advancedYoga')}>Yoga</Button>
                </CardActions>
            </Card>
        </Box>
    </div>
  )
}