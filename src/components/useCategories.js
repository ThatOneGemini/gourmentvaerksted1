import { ref } from "vue";
import { db } from "../services/firebase.js";

import {
    ref as dbRef,
    onValue,
} from "firebase/database";

const categories = ref([]);

export function useCategories() {

    const loadCategories = () => {
        onValue(dbRef(db, "categories"), (snapshot) => {

            const data = snapshot.val();

            categories.value = [];

            for (const key in data) {
                categories.value.push({
                    id: key,
                    ...data[key]
                });
            }
        });
    }

    return {
        categories,
        loadCategories
    };
}