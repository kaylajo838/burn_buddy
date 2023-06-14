import { useNavigate } from 'react-router-dom'
import { Typography, Card, Box } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import allWorkouts from '../../images/difficultyAllWorkouts.png'

export default function Beginner() {

  const navigate = useNavigate();

  return (
    <div style={{ marginRight: '40px', marginLeft: '40px', marginBottom: '40px'}}>
        <Button sx={{margin: '20px'}} onClick={() => navigate('/difficulty')}>Back</Button>
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
            alignItems: 'center',
            margin: 5
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                margin: 5,
                flexWrap: 'wrap'
            }}>
                <Card sx={{ minWidth: 200, display: 'flex', justifyContent: 'center' }}>
                    <CardActions sx={{ flexDirection: 'column' }}>
                        <CardMedia
                            sx={{width: '150px', height: 'auto', margin: 2}}
                            component="img"
                            height="194"
                            image="https://static.thenounproject.com/png/730325-200.png"
                            alt="muscle flexing"
                        />
                        <Button size="small" onClick={() => navigate('/advancedTarget')}>Select By Target Muscle Group</Button>
                    </CardActions>
                </Card>

                <Card sx={{ minWidth: 200, display: 'flex', justifyContent: 'center' }}>
                    <CardActions sx={{ flexDirection: 'column' }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://static.thenounproject.com/png/3107821-200.png"
                            alt="barbell picture"
                        />
                        <Button size="small" onClick={() => navigate('/advancedCategory')}>Select By Category</Button>
                    </CardActions>
                </Card>

                <Card sx={{ minWidth: 200, display: 'flex', justifyContent: 'center' }}>
                    <CardActions sx={{ flexDirection: 'column' }}>
                        <CardMedia
                            component="img"
                            height="194"
                            image={allWorkouts}
                            alt="strong arm holding weight"
                        />
                        <Button size="small" onClick={() => navigate('/advancedAllWorkouts')}>All Workouts</Button>
                    </CardActions>
                </Card>
            </Box>

        </Box>
        
    </div>
  )
}