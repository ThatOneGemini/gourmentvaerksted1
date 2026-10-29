import { ref } from "vue";
import { db } from "../services/firebase.js";
import { ref as dbRef, get } from "firebase/database";

export function useHomepageFoods() {
    const recentBought = ref ([]);
    const popularDishes = ref ([]);
    
    const loadRecentBought = async () => {

        const snapshot = await get(dbRef(db, "recentbought"))
        
        if(snapshot.exists()) {
            recentBought.value = Object.values(snapshot.val())
        }
    }

    const loadPopularDishes = async () => {

        const snapshot = await get(dbRef(db, "populardishes"))

        if(snapshot.exists()) {
            popularDishes.value = Object.values(snapshot.val())
        }
    }

    return {
        recentBought,
        popularDishes,
        loadRecentBought,
        loadPopularDishes
    }
}