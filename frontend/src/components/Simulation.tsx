import {
  VehiclesContext,
  VehiclesContextType,
} from "@/contexts/VehiclesContext";
import { useContext } from "react";
import style from "../app/style.module.css";
import ContactComponent from "./Contact";
import PricingBoxSimulationComponent from "./PricingBoxSimulation";

export default function SimulationComponent() {
  const { selectedVehicle, simulated } = useContext(
    VehiclesContext
  ) as VehiclesContextType;

  return (
    <>
      {simulated && selectedVehicle && (
        <div className={style.box} style={{ padding: "25px" }}>
          <h4 className={`${style.subTitle}  ${style.lineBottom}`}>
            Valores simulados para você
          </h4>

          <div className={style.princingContainer}>
            <PricingBoxSimulationComponent times={6} ipvaFree={true} />
            <div className={style.smallPrincigBoxContainer}>
              <PricingBoxSimulationComponent times={12} />
              <PricingBoxSimulationComponent times={48} />
            </div>
          </div>

          <ContactComponent />
        </div>
      )}
    </>
  );
}
