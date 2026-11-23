import { db } from "@/firebase";
import { ref, get } from "firebase/database";

export const getUser = async () => {
  const snapshot = await get(
    ref(db, "users/user1")
  );

  return snapshot.val();
};