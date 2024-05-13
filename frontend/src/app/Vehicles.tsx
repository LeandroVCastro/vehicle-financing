"use client";

import EntryValueComponent from "@/components/EntryValue";
import SelectVehicleComponent from "@/components/SelectVehicle";
import SelectedVehicleComponent from "@/components/SelectedVehicle";
import SimulateButtonComponent from "@/components/SimulateButton";
import VehiclesContextProvider, { Vehicle } from "@/contexts/VehiclesContext";
import { useState } from "react";
import style from "./style.module.css";
import SimulationComponent from "@/components/Simulation";

type Props = {
  vehicles: Vehicle[];
};

export default function VehiclesComponent({ vehicles }: Props) {
  const [entryValue, setEntryValue] = useState<number | undefined>(undefined);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | undefined>(
    undefined
  );
  const [simulated, setSimulated] = useState<boolean>(false);

  return (
    <VehiclesContextProvider
      vehicles={vehicles}
      entryValue={entryValue}
      setEntryValue={setEntryValue}
      selectedVehicle={selectedVehicle}
      setSelectedVehicle={setSelectedVehicle}
      simulated={simulated}
      setSimulated={setSimulated}
    >
      <h3
        className={style.lineBottom}
        style={{
          fontSize: "32px",
          fontWeight: 700,
          marginBottom: "40px",
        }}
      >
        Simulação de financiamento
      </h3>
      <div className={style.box} style={{ padding: "30px" }}>
        <SelectVehicleComponent />
        <EntryValueComponent />
        <SimulateButtonComponent />
      </div>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <div style={{ flex: "1" }}>
          <SelectedVehicleComponent />
        </div>
        <div style={{ flex: "3" }}>
          <SimulationComponent />
        </div>
      </div>
    </VehiclesContextProvider>
  );
}
