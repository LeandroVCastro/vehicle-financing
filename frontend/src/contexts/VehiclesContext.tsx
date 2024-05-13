import React, { ReactNode, createContext, useState } from "react";

export type Vehicle = {
  id: number;
  photo_url: string;
  city: string;
  brand: string;
  model: string;
  gear: string;
  description: string;
  year: number;
  km: number;
  phone: string;
  price: number;
};

export interface VehiclesContextType {
  vehicles: Vehicle[];
  setVehicles: (vehicles: Vehicle[]) => void;
  selectedVehicle?: Vehicle;
  setSelectedVehicle: (selectedVehicle?: Vehicle) => void;
  entryValue?: number;
  setEntryValue: (entryValue?: number) => void;
  simulated: boolean;
  setSimulated: (simulated: boolean) => void;
}

export const VehiclesContext = createContext<VehiclesContextType | undefined>(
  undefined
);

interface VehiclesContextProviderProps {
  children: ReactNode;
  vehicles: Vehicle[];
  selectedVehicle?: Vehicle;
  setSelectedVehicle: (selectedVehicle?: Vehicle) => void;
  entryValue?: number;
  setEntryValue: (entryValue?: number) => void;
  simulated: boolean;
  setSimulated: (simulated: boolean) => void;
}

const VehiclesContextProvider: React.FC<VehiclesContextProviderProps> = (
  props: VehiclesContextProviderProps
) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>(props.vehicles);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | undefined>(
    props.selectedVehicle
  );
  const [entryValue, setEntryValue] = useState<number | undefined>(
    props.entryValue
  );
  const [simulated, setSimulated] = useState<boolean>(props.simulated);

  return (
    <VehiclesContext.Provider
      value={{
        vehicles,
        setVehicles,
        entryValue,
        setEntryValue,
        selectedVehicle,
        setSelectedVehicle,
        simulated,
        setSimulated,
      }}
    >
      {props.children}
    </VehiclesContext.Provider>
  );
};

export default VehiclesContextProvider;
