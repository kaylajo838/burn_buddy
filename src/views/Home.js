import { useState } from 'react'
import { Typography, Card, Box } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import WhatshotIcon from '@mui/icons-material/Whatshot';

 
export default function Home() {
    // const [apiResult, setApiResult] = useState('')


    const navigate = useNavigate();

  const fitnessTest = async () => {
    const url = 'https://musclewiki.p.rapidapi.com/exercises';
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'edc232ca02mshf528f6de2e7661ep13c25cjsneedb191c970e',
		    'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com'
	    }
    };

    try {
	    const response = await fetch(url, options);
	    const result = await response.json();
	    // console.log(result[0].target);
        // let target = result.map(muscleTarget => {
        //     return muscleTarget.target.Primary
        // })
        // console.log(target)
        // console.log(result)

        let category = result.map(exerciseCategory => {
            return exerciseCategory.Category.includes('MedicineBall')
        })
        console.log(category)

        // let force = result.map(exerciseForce => {
        //     return exerciseForce.Force
        // })
        // console.log(force)


        // let difficulty = result.map(exerciseDifficulty => {
        //     return exerciseDifficulty.Difficulty
        // })
        // console.log(difficulty)

        let test = result.filter(beginner => {
            return beginner.Difficulty === 'Beginner'
        })
        console.log(test)


    
    } catch (error) {
	    console.error(error);
    }
  }

//   console.log(fitnessTest())



  return (
    <div style={{ marginRight: '40px', marginLeft: '40px', marginBottom: '40px'}}>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: 5
        }}>
            <Typography variant='h3' component='h2'>
                <WhatshotIcon sx={{marginRight: "5px", color: "#fd810f"}}/>Welcome To Burn Buddy<WhatshotIcon sx={{marginLeft: "5px", color: "#fd810f"}}/>
            </Typography>
        </Box>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: 5
        }}>
            <Typography variant='h3' component='h2'>
                <WhatshotIcon sx={{marginRight: "5px", color: "#fd810f"}}/>Your Workout Begins Here<WhatshotIcon sx={{marginLeft: "5px", color: "#fd810f"}}/>
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
                            component="img"
                            height="194"
                            image="https://static.thenounproject.com/png/1143708-200.png"
                            alt="difficulty gauge"
                        />
                        <Button size="small" onClick={() => navigate('/difficulty')}>Select By Difficulty</Button>
                    </CardActions>
                </Card>

                <Card sx={{ minWidth: 200, display: 'flex', justifyContent: 'center' }}>
                    <CardActions sx={{ flexDirection: 'column' }}>
                        <CardMedia
                            sx={{width: '150px', height: 'auto', margin: 2}}
                            component="img"
                            height="194"
                            image="https://static.thenounproject.com/png/730325-200.png"
                            alt="muscle flexing"
                        />
                        <Button size="small" onClick={() => navigate('/target')}>Select By Target Muscle Group</Button>
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
                        <Button size="small" onClick={() => navigate('/category')}>Select By Category</Button>
                    </CardActions>
                </Card>
            </Box>

        </Box>

    </div>
  )
}
