import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './views/Home'
import Difficulty from './views/Difficulty'
import Target from './views/Target'
import Category from './views/Category'
import Nav from './components/Nav'
import Beginner from './views/beginner/Beginner'
import BeginnerTarget from './views/beginner/BeginnerTarget'
import BeginnerCategory from './views/beginner/BeginnerCategory'
import BeginnerAllWorkouts from './views/beginner/BeginnerAllWorkouts'
import BeginnerAbdominals from './views/beginner/targetMuscles/BeginnerAbdominals'
import BeginnerBiceps from './views/beginner/targetMuscles/BeginnerBiceps'
import BeginnerCalves from './views/beginner/targetMuscles/BeginnerCalves'
import BeginnerChest from './views/beginner/targetMuscles/BeginnerChest'
import BeginnerForearm from './views/beginner/targetMuscles/BeginnerForearm'
import BeginnerGlutes from './views/beginner/targetMuscles/BeginnerGlutes'
import BeginnerHamstrings from './views/beginner/targetMuscles/BeginnerHamstrings'
import BeginnerLats from './views/beginner/targetMuscles/BeginnerLats'
import BeginnerLowerBack from './views/beginner/targetMuscles/BeginnerLowerBack'
import BeginnerMidBack from './views/beginner/targetMuscles/BeginnerMidBack'
import BeginnerObliques from './views/beginner/targetMuscles/BeginnerObliques'
import BeginnerQuads from './views/beginner/targetMuscles/BeginnerQuads'
import BeginnerShoulders from './views/beginner/targetMuscles/BeginnerShoulders'
import BeginnerTraps from './views/beginner/targetMuscles/BeginnerTraps'
import BeginnerTriceps from './views/beginner/targetMuscles/BeginnerTriceps'
import BeginnerBand from './views/beginner/category/BeginnerBand'
import BeginnerBarbell from './views/beginner/category/BeginnerBarbell'
import BeginnerBodyweight from './views/beginner/category/BeginnerBodyweight'
import BeginnerCables from './views/beginner/category/BeginnerCables'
import BeginnerDumbbells from './views/beginner/category/BeginnerDumbbells'
import BeginnerKettlebells from './views/beginner/category/BeginnerKettlebells'
import BeginnerMachine from './views/beginner/category/BeginnerMachine'
import BeginnerMedicineBall from './views/beginner/category/BeginnerMedicineBall'
import BeginnerPlate from './views/beginner/category/BeginnerPlate'
import BeginnerStretches from './views/beginner/category/BeginnerStretches'
import BeginnerTrx from './views/beginner/category/BeginnerTrx'
import BeginnerYoga from './views/beginner/category/BeginnerYoga'

import Intermediate from './views/intermediate/Intermediate'
import IntermediateTarget from './views/intermediate/IntermediateTarget'
import IntermediateCategory from './views/intermediate/IntermediateCategory'
import IntermediateAllWorkouts from './views/intermediate/IntermediateAllWorkouts'
import IntermediateAbdominals from './views/intermediate/targetMuscles/IntermediateAbdominals'
import IntermediateBiceps from './views/intermediate/targetMuscles/IntermediateBiceps'
import IntermediateCalves from './views/intermediate/targetMuscles/IntermediateCalves'
import IntermediateChest from './views/intermediate/targetMuscles/IntermediateChest'
import IntermediateForearms from './views/intermediate/targetMuscles/IntermediateForearm'
import IntermediateGlutes from './views/intermediate/targetMuscles/IntermediateGlutes'
import IntermediateHamstrings from './views/intermediate/targetMuscles/IntermediateHamstrings'
import IntermediateLats from './views/intermediate/targetMuscles/IntermediateLats'
import IntermediateLowerBack from './views/intermediate/targetMuscles/IntermediateLowerBack'
import IntermediateMidBack from './views/intermediate/targetMuscles/IntermediateMidBack'
import IntermediateObliques from './views/intermediate/targetMuscles/IntermediateObliques'
import IntermediateQuads from './views/intermediate/targetMuscles/IntermediateQuads'
import IntermediateShoulders from './views/intermediate/targetMuscles/IntermediateShoulders'
import IntermediateTraps from './views/intermediate/targetMuscles/IntermediateTraps'
import IntermediateTriceps from './views/intermediate/targetMuscles/IntermediateTriceps'
import IntermediateBand from './views/intermediate/category/IntermediateBand'
import IntermediateBarbell from './views/intermediate/category/IntermediateBarbell'
import IntermediateBodyweight from './views/intermediate/category/IntermediateBodyweight'
import IntermediateCables from './views/intermediate/category/IntermediateCables'
import IntermediateDumbbells from './views/intermediate/category/IntermediateDumbbells'
import IntermediateKettlebells from './views/intermediate/category/IntermediateKettlebells'
import IntermediateMachine from './views/intermediate/category/IntermediateMachine'
import IntermediateMedicineBall from './views/intermediate/category/IntermediateMedicineBall'
import IntermediatePlate from './views/intermediate/category/IntermediatePlate'
import IntermediateStretches from './views/intermediate/category/IntermediateStretches'
import IntermediateTrx from './views/intermediate/category/IntermediateTrx'
import IntermediateYoga from './views/intermediate/category/IntermediateYoga'

import Advanced from './views/advanced/Advanced'
import AdvancedTarget from './views/advanced/AdvancedTarget'
import AdvancedCategory from './views/advanced/AdvancedCategory'
import AdvancedAllWorkouts from './views/advanced/AdvancedAllWorkouts'
import AdvancedAbdominals from './views/advanced/targetMuscles/AdvancedAbdominals'
import AdvancedBiceps from './views/advanced/targetMuscles/AdvancedBiceps'
import AdvancedCalves from './views/advanced/targetMuscles/AdvancedCalves'
import AdvancedChest from './views/advanced/targetMuscles/AdvancedChest'
import AdvancedForearms from './views/advanced/targetMuscles/AdvancedForearm'
import AdvancedGlutes from './views/advanced/targetMuscles/AdvancedGlutes'
import AdvancedHamstrings from './views/advanced/targetMuscles/AdvancedHamstrings'
import AdvancedLats from './views/advanced/targetMuscles/AdvancedLats'
import AdvancedLowerBack from './views/advanced/targetMuscles/AdvancedLowerBack'
import AdvancedMidBack from './views/advanced/targetMuscles/AdvancedMidBack'
import AdvancedObliques from './views/advanced/targetMuscles/AdvancedObliques'
import AdvancedQuads from './views/advanced/targetMuscles/AdvancedQuads'
import AdvancedShoulders from './views/advanced/targetMuscles/AdvancedShoulders'
import AdvancedTraps from './views/advanced/targetMuscles/AdvancedTraps'
import AdvancedTriceps from './views/advanced/targetMuscles/AdvancedTriceps'
import AdvancedBand from './views/advanced/category/AdvancedBand'
import AdvancedBarbell from './views/advanced/category/AdvancedBarbell'
import AdvancedBodyweight from './views/advanced/category/AdvancedBodyweight'
import AdvancedCables from './views/advanced/category/AdvancedCables'
import AdvancedDumbbells from './views/advanced/category/AdvancedDumbbells'
import AdvancedKettlebells from './views/advanced/category/AdvancedKettlebells'
import AdvancedMachine from './views/advanced/category/AdvancedMachine'
import AdvancedMedicineBall from './views/advanced/category/AdvancedMedicineBall'
import AdvancedPlate from './views/advanced/category/AdvancedPlate'
import AdvancedStretches from './views/advanced/category/AdvancedStretches'
import AdvancedTrx from './views/advanced/category/AdvancedTrx'
import AdvancedYoga from './views/advanced/category/AdvancedYoga'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Nav />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/difficulty' element={<Difficulty />} />
            <Route path='/target' element={<Target />} />
            <Route path='/category' element={<Category />} />
            
            <Route path='/beginner' element={<Beginner />} />
            <Route path='/beginnerTarget' element={<BeginnerTarget/>} />
            <Route path='/beginnerCategory' element={<BeginnerCategory/>} />
            <Route path='/beginnerAllWorkouts' element={<BeginnerAllWorkouts/>} />
            <Route path='/beginnerAbdominals' element={<BeginnerAbdominals/>} />
            <Route path='/beginnerBiceps' element={<BeginnerBiceps/>} />
            <Route path='/beginnerCalves' element={<BeginnerCalves/>} />
            <Route path='/beginnerChest' element={<BeginnerChest/>} />
            <Route path='/beginnerForearm' element={<BeginnerForearm/>} />
            <Route path='/beginnerGlutes' element={<BeginnerGlutes/>} />
            <Route path='/beginnerHamstrings' element={<BeginnerHamstrings/>} />
            <Route path='/beginnerLats' element={<BeginnerLats/>} />
            <Route path='/beginnerLowerBack' element={<BeginnerLowerBack/>} />
            <Route path='/beginnerMidBack' element={<BeginnerMidBack/>} />
            <Route path='/beginnerObliques' element={<BeginnerObliques/>} />
            <Route path='/beginnerQuads' element={<BeginnerQuads/>} />
            <Route path='/beginnerShoulders' element={<BeginnerShoulders/>} />
            <Route path='/beginnerTraps' element={<BeginnerTraps/>} />
            <Route path='/beginnerTriceps' element={<BeginnerTriceps/>} />
            <Route path='/beginnerBand' element={<BeginnerBand/>} />
            <Route path='/beginnerBarbell' element={<BeginnerBarbell/>} />
            <Route path='/beginnerBodyweight' element={<BeginnerBodyweight/>} />
            <Route path='/beginnerCables' element={<BeginnerCables/>} />
            <Route path='/beginnerDumbbells' element={<BeginnerDumbbells/>} />
            <Route path='/beginnerKettlebells' element={<BeginnerKettlebells/>} />
            <Route path='/beginnerMachine' element={<BeginnerMachine/>} />
            <Route path='/beginnerMedicineBall' element={<BeginnerMedicineBall/>} />
            <Route path='/beginnerPlate' element={<BeginnerPlate/>} />
            <Route path='/beginnerStretches' element={<BeginnerStretches/>} />
            <Route path='/beginnerTrx' element={<BeginnerTrx/>} />
            <Route path='/beginnerYoga' element={<BeginnerYoga/>} />

            <Route path='/intermediate' element={<Intermediate/>} />
            <Route path='/intermediateTarget' element={<IntermediateTarget/>} />
            <Route path='/intermediateCategory' element={<IntermediateCategory/>} />
            <Route path='/intermediateAllWorkouts' element={<IntermediateAllWorkouts/>} />
            <Route path='/intermediateAbdominals' element={<IntermediateAbdominals/>} />
            <Route path='/intermediateBiceps' element={<IntermediateBiceps/>} />
            <Route path='/intermediateCalves' element={<IntermediateCalves/>} />
            <Route path='/intermediateChest' element={<IntermediateChest/>} />
            <Route path='/intermediateForearms' element={<IntermediateForearms/>} />
            <Route path='/intermediateGlutes' element={<IntermediateGlutes/>} />
            <Route path='/intermediateHamstrings' element={<IntermediateHamstrings/>} />
            <Route path='/intermediateLats' element={<IntermediateLats/>} />
            <Route path='/intermediateLowerBack' element={<IntermediateLowerBack/>} />
            <Route path='/intermediateMidBack' element={<IntermediateMidBack/>} />
            <Route path='/intermediateObliques' element={<IntermediateObliques/>} />
            <Route path='/intermediateQuads' element={<IntermediateQuads/>} />
            <Route path='/intermediateShoulders' element={<IntermediateShoulders/>} />
            <Route path='/intermediateTraps' element={<IntermediateTraps/>} />
            <Route path='/intermediateTriceps' element={<IntermediateTriceps/>} />
            <Route path='/intermediateBand' element={<IntermediateBand/>} />
            <Route path='/intermediateBarbell' element={<IntermediateBarbell/>} />
            <Route path='/intermediateBodyweight' element={<IntermediateBodyweight/>} />
            <Route path='/intermediateCables' element={<IntermediateCables/>} />
            <Route path='/intermediateDumbbells' element={<IntermediateDumbbells/>} />
            <Route path='/intermediateKettlebells' element={<IntermediateKettlebells/>} />
            <Route path='/intermediateMachine' element={<IntermediateMachine/>} />
            <Route path='/intermediateMedicineBall' element={<IntermediateMedicineBall/>} />
            <Route path='/intermediatePlate' element={<IntermediatePlate/>} />
            <Route path='/intermediateStretches' element={<IntermediateStretches/>} />
            <Route path='/intermediateTrx' element={<IntermediateTrx/>} />
            <Route path='/intermediateYoga' element={<IntermediateYoga/>} />

            <Route path='/advanced' element={<Advanced/>} />
            <Route path='/advancedTarget' element={<AdvancedTarget/>} />
            <Route path='/advancedCategory' element={<AdvancedCategory/>} />
            <Route path='/advancedAllWorkouts' element={<AdvancedAllWorkouts/>} />
            <Route path='/advancedAbdominals' element={<AdvancedAbdominals/>} />
            <Route path='/advancedBiceps' element={<AdvancedBiceps/>} />
            <Route path='/advancedCalves' element={<AdvancedCalves/>} />
            <Route path='/advancedChest' element={<AdvancedChest/>} />
            <Route path='/advancedForearms' element={<AdvancedForearms/>} />
            <Route path='/advancedGlutes' element={<AdvancedGlutes/>} />
            <Route path='/advancedHamstrings' element={<AdvancedHamstrings/>} />
            <Route path='/advancedLats' element={<AdvancedLats/>} />
            <Route path='/advancedLowerBack' element={<AdvancedLowerBack/>} />
            <Route path='/advancedMidBack' element={<AdvancedMidBack/>} />
            <Route path='/advancedObliques' element={<AdvancedObliques/>} />
            <Route path='/advancedQuads' element={<AdvancedQuads/>} />
            <Route path='/advancedShoulders' element={<AdvancedShoulders/>} />
            <Route path='/advancedTraps' element={<AdvancedTraps/>} />
            <Route path='/advancedTriceps' element={<AdvancedTriceps/>} />
            <Route path='/advancedBand' element={<AdvancedBand/>} />
            <Route path='/advancedBarbell' element={<AdvancedBarbell/>} />
            <Route path='/advancedBodyweight' element={<AdvancedBodyweight/>} />
            <Route path='/advancedCables' element={<AdvancedCables/>} />
            <Route path='/advancedDumbbells' element={<AdvancedDumbbells/>} />
            <Route path='/advancedKettlebells' element={<AdvancedKettlebells/>} />
            <Route path='/advancedMachine' element={<AdvancedMachine/>} />
            <Route path='/advancedMedicineBall' element={<AdvancedMedicineBall/>} />
            <Route path='/advancedPlate' element={<AdvancedPlate/>} />
            <Route path='/advancedStretches' element={<AdvancedStretches/>} />
            <Route path='/advancedTrx' element={<AdvancedTrx/>} />
            <Route path='/advancedYoga' element={<AdvancedYoga/>} />
          </Routes>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
