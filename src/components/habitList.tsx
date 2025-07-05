import { Box, Typography, IconButton, Card, CardContent, CardActions, Chip } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import useHabitStore from "../store/store";

export default function habitList() {
    const { habits, deleteHabit } = useHabitStore();
    
    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h5" component="h2" gutterBottom>
                My Habits
            </Typography>
            <Box 
                sx={{ 
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                        lg: 'repeat(4, 1fr)'
                    },
                    gap: 2
                }}
            >
                {habits.map((habit) => (
                    <Card 
                        key={habit.id}
                        sx={{ 
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            '&:hover': {
                                boxShadow: 3,
                                transform: 'translateY(-2px)',
                                transition: 'all 0.2s ease-in-out'
                            }
                        }}
                    >
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography variant="h6" component="h3" gutterBottom>
                                {habit.name}
                            </Typography>
                            <Chip 
                                label={habit.frequency} 
                                color={habit.frequency === 'daily' ? 'primary' : 'secondary'}
                                size="small"
                                sx={{ mb: 1 }}
                            />
                            <Typography variant="body2" color="text.secondary">
                                Created: {new Date(habit.createdAt).toLocaleDateString()}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Completed: {habit.completedDates.length} times
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton 
                                onClick={() => deleteHabit(habit.id)}
                                color="error"
                                size="small"
                                sx={{ ml: 'auto' }}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                ))}
            </Box>
            {habits.length === 0 && (
                <Box sx={{ textAlign: 'center', py: 4 }}>
                    <Typography variant="body1" color="text.secondary">
                        No habits yet. Add your first habit above!
                    </Typography>
                </Box>
            )}
        </Box>
    );
}


