import { ref } from "vue";
import { db } from "../services/firebase";
import { ref as dbRef, onValue } from "firebase/database";

const foods = ref([]);

export function useMenu() {

    const loadFoods = () => {

        const foodsRef = dbRef(db, "foods");

        onValue(foodsRef, snapshot => {
            const data = snapshot.val();

            foods.value = [];

            if (!data) return;

            for (const key in data) {
                foods.value.push({
                    id: key,
                    ...data[key]
                });
            }
        });
    };
    
    return {
        foods,
        loadFoods
    };
}