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
}

const useHabitStore = create<HabitState>()(
    persist(
        (set) => ({
            habits: [],
            addHabit: (name: string, frequency: "daily" | "weekly") => {
                const newHabit: Habit = {
                    id: Date.now().toString(),
                    name,
                    frequency,
                    completedDates: [],
                    createdAt: new Date().toISOString()
                };
                set((state) => ({habits:[...state.habits, newHabit]}));
            },
        }),
        {
            name: 'habit-storage', 
        }
    )
);

export default useHabitStore;
