import { Box, Paper } from "@mui/material";
import useHabitStore from "../store/store";


export default function habitList () {
    const { habits } = useHabitStore();
  return(<Box>
    { habits.map((habit) => (
        <Paper key={habit.id}>{habit.name}{habit.frequency}</Paper>
    ))}
  </Box>
);
};


