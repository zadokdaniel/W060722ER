const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getUserById = async (id) => {
  const response = await fetch(`${BASE_URL}/users/${id}`);
  const user = await response.json();

  return user;
};

