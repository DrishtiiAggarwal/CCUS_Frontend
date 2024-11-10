"use server";

export const getCCUSData = async () => {
  try {
    const result = await fetch(`${process.env.BACKEND_URL}/api/fetchData`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
    });
    const data = result.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
