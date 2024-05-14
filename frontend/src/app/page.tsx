export const revalidate = 3600; // revalidate at most every hour

import VehiclesComponent from "./Vehicles";
import { Vehicle } from "@/contexts/VehiclesContext";

const getVechicles = async () => {
  const response = await fetch(`${process.env.API_URL}vehicles`);
  if (!response.ok) {
    throw new Error("Failed to fetch vehicles data");
  }
  return response.json();
};

export default async function Home() {
  const vehicles: Vehicle[] = await getVechicles();

  return (
    <main style={{ padding: "30px" }}>
      <VehiclesComponent vehicles={vehicles} />
    </main>
  );
}
