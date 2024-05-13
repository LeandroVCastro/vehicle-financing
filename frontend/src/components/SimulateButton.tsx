/* eslint-disable @next/next/no-img-element */
import {
  VehiclesContext,
  VehiclesContextType,
} from "@/contexts/VehiclesContext";
import { useContext } from "react";
import style from "../app/style.module.css";

export default function SimulateButtonComponent() {
  const { selectedVehicle, setSimulated } = useContext(
    VehiclesContext
  ) as VehiclesContextType;

  return (
    <>
      {selectedVehicle && (
        <button
          className={style.simulateButton}
          onClick={() => setSimulated(true)}
        >
          Simular
        </button>
      )}
    </>
  );
}
