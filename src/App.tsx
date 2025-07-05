import { Container, Box, Typography } from '@mui/material';
import './App.css'
import useHabitStore from './store/store'
import AddHabitForm from './components/addHabitForm';
import HabitList from './components/habitList';

function App() {
  const store = useHabitStore()
  console.log(store);
  
  return (
    <>
    <Container>
      <Box>
        <Typography variant="h2" component="h1" gutterBottom align='center'>
            Habit tracker
            {/* Add Form
            List
            stats */}

            <AddHabitForm />
            <HabitList/>
        </Typography>
      </Box>
    </Container>
    </>
  )
}

export default App
