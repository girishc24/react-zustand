import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Habit {
    id: string;
    name: string;
    frequency: "daily" | "weekly";
    completedDates: string[];
    createdAt: string;
  }
  
interface HabitState {
    habits: Habit[]; 
    addHabit: (name: string, frequency: "daily" | "weekly") => void;
    getHabit: (id: string)=> void;
  }

const testore = create<HabitState>()(
    persist(
        (set, get) => ({
            habits: [],
            addHabit: (name:string, frequency: "daily" | "weekly") => {
                const newHabit: Habit = {
                    id: Date.now().toString(),
                    name,
                    frequency,
                    completedDates: [],
                    createdAt: new Date().toISOString()
                };
                set((state) => ({habits:[...state.habits, newHabit]}));
            },
            getHabit: (id:string) => {
                const currentHabits = get().habits;
                const habit = currentHabits.filter(habit => habit.id === id);
                console.log(habit);
                return habit;
            }
        }),
        {
            name: "Test-store"
        }
    )
);

export default testore