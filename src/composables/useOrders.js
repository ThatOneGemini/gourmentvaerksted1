import { ref } from "vue";
import { db } from "../services/firebase";

import {
    ref as dbRef,
    push,
    set,
    onValue
} from "firebase/database";

const orders = ref ([]);

export function useOrders() {
    const loadOrders = () => {
        const ordersRef = dbRef (db, "orders");

        onValue(ordersRef, snapshot => {
            const data = snapshot.val();
            
            orders.value = [];

            if (!data) return;
            
            for (const key in data) {
                orders.value.push({
                    id:key,
                ...data[key]
                });
            }
        });
    };

    const createOrder = async (order) => {
        const newOrderRef = push (
            dbRef(db, "orders")
        );
        
        await set (newOrderRef, order);
    };

    return {
        orders,
        loadOrders,
        createOrder
    };
}