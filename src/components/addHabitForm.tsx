import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useHabitStore from '../store/store';

export default function addHabitForm  () {
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");
  const { habits, addHabit }= useHabitStore();
  console.log(habits); 
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      addHabit(name, frequency);
      setName("");
    }
  };


  return <form onSubmit={handleSubmit}>
    <Box>
      <TextField label="Habit Name"
        value={name}
        placeholder="Enter a Full Name"
        onChange={(e) => setName(e.target.value)}
        fullWidth
      />
      
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={frequency}
          label="Frequency"
          onChange={(e) => setFrequency(e.target.value)}
        >
          <MenuItem value="Daily">Daily</MenuItem>
          <MenuItem value="Weekly">Weekly</MenuItem>
          
        </Select>
        <Button type='submit' variant="contained" color='primary'>
          Add Habit
        </Button>
      </FormControl>
    </Box>
  </form>
}


