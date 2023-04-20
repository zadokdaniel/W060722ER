import { useEffect, useState } from "react";
import { getUserById } from "../services/jsonPlaceholder";

export const useUser = (id) => {
  const [request, setRequest] = useState({
    isLoading: false,
    user: null,
    error: null,
  });

  useEffect(() => {
    if (!id) return;
    getUser();

    async function getUser() {
      setRequest({ ...request, isLoading: true });
      try {
        const user = await getUserById(id);
        setRequest({ isLoading: false, user, error: null });
      } catch (e) {
        setRequest({ isLoading: false, user: null, error: e.message });
      }
    }
  }, [id]);


  return request;
};
