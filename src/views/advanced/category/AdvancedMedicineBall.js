import { useState, useEffect } from 'react'
import { Typography, Card, Box } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import { Link, useNavigate } from 'react-router-dom'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function AdvancedMedicineBall() {
    const [advancedWorkout, setAdvancedWorkout] = useState([]);
    // const [expanded, setExpanded] = useState(false);
    const [page, setPage] = useState(1);
    const itemsPerPage = 20;

    const navigate = useNavigate();

    // Expanded change handler
    const handleExpandClick = (index) => {
        setAdvancedWorkout(prevWorkouts =>
            prevWorkouts.map((workout, i) =>
                i === index ? { ...workout, expanded: !workout.expanded } : workout
            )
        )
    }

    // Pagination change handler
    const handlePageChange = (event, value) => {
        setPage(value);
        window.scrollTo(0, 0);
    };


    // Get fitness info
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

            let workoutJson = result.filter(advanced => {
                // console.log(beginner.target)
                return advanced.Difficulty === 'Advanced' && advanced.Category && advanced.Category && advanced.Category.includes('MedicineBall')
            })

            let exercise = workoutJson.map(workout => {
                const name = workout.exercise_name
                const force = workout.Force
                const grip = workout.Grips
                const details = workout.details
                const steps = workout.steps
                const targetMuscle = workout.target
                const videoUrl = workout.videoURL[0]
                const youtubeUrl = workout.youtubeURL

                return {
                    name: name,
                    force: force,
                    grip: grip,
                    details: details,
                    steps: steps,
                    targetMuscle: targetMuscle,
                    videoUrl: videoUrl,
                    youtubeUrl: youtubeUrl,
                    expanded: false
                }
            })
            setAdvancedWorkout(exercise)
    
        } catch (error) {
	        console.error(error);
        }
    }

    useEffect(() => {
        fitnessTest();
    }, []);


  return (
    <div style={{ marginRight: '40px', marginLeft: '40px', marginBottom: '40px'}}>
        <Button sx={{margin: '20px'}} onClick={() => navigate('/advancedCategory')}>Back</Button>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: 5
        }}>
            <Typography variant='h3' component='h2'>
                Advanced Medicine Ball Workouts
            </Typography>
        </Box>

        <Box sx={{
            display: 'flex',
            // alignItems: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 5
        }}>
            <Box sx={{
                display: 'flex',
                // alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                margin: 5,
                flexWrap: 'wrap'
            }}>

            {advancedWorkout.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((workout, index) => (

                <Card key={index} sx={{ maxWidth: 345, height: '100%' }}>
                    <CardContent>
                        <video width="100%" height="100%" controls style={{marginBottom: 10}}>
                            <source src={workout.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                            {workout.name}
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div" sx={{fontSize: 15, marginTop: '5px', marginBottom: '5px'}}>
                            Force: {workout.force}
                        </Typography>
                        <Typography gutterBottom variant="body2" component="div" sx={{fontSize: 15, marginTop: '5px', marginBottom: '5px'}}>
                            Grip: {workout.grip}
                        </Typography>
                        {workout.targetMuscle.Primary && workout.targetMuscle.Primary.length > 0 && (
                            <>
                                <Typography gutterBottom variant="body2" component="div" sx={{fontSize: 15, marginTop: '5px', marginBottom: '5px'}}>
                                Target Muscle(s):
                                </Typography>
                                {workout.targetMuscle.Primary.map((muscle, muscleIndex) => (
                                    <Typography key={muscleIndex} variant="body2" component="div" color="text.secondary">
                                        <ul style={{ marginTop: 2, marginBottom: 2 }}>
                                            <li>{muscle}</li>
                                        </ul>
                                    </Typography>
                                ))}
                            </>
                            )}
                        <Typography gutterBottom variant="body2" component="div" sx={{fontSize: 15}}>
                            Steps:
                        </Typography>
                        {workout.steps.map((step, stepIndex) => (
                            <Typography key={stepIndex} variant="body2" component="div" color="text.secondary">
                                <ul>
                                    <li>{step}</li>
                                </ul>
                            </Typography>
                        ))}
                        {workout.details && (
                            <Box sx={{ textAlign: 'center', marginTop: "10px" }}>
                                <Button onClick={() => handleExpandClick(index)} sx={{ marginTop: "10px" }}>
                                    {workout.expanded ? "Close Walkthrough" : "Detailed Walkthrough"}
                                </Button>
                                {workout.expanded && (
                                    <Typography gutterBottom variant="body2" component="div" sx={{fontSize: 15, marginTop: '5px', marginBottom: '5px'}}>
                                        {workout.details}
                                    </Typography>
                                )}
                            </Box>
                        )}
                    </CardContent>
                    <CardActions sx={{ marginTop: 'auto' }}>
                        <Button size="small">
                            <Link to={workout.youtubeUrl}>YouTube Walkthrough</Link>
                        </Button>
                        <Button size="small">
                            <LocalFireDepartmentOutlinedIcon/>Save Workout</Button>
                    </CardActions>
                </Card>
            ))}
            </Box>

        </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 5
            }}>
                <Pagination color="primary" count={Math.ceil(advancedWorkout.length / itemsPerPage)} page={page} onChange={handlePageChange} />
            </Box>
        
    </div>
  )
}