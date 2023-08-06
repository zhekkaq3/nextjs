const api = process.env.NEXT_PUBLIC_API;

export const getNasaInfinity = async (search: string) => {
  const response = await fetch(`${api}${search}`);

  if (!response.ok) throw new Error("unable to fetch Posts!")

  return response.json();
}