import {
  VehiclesContext,
  VehiclesContextType,
} from "@/contexts/VehiclesContext";
import { useContext } from "react";
import style from "../app/style.module.css";
import ContactComponent from "./Contact";
import SmallBoxSimulationComponent from "./SmallBoxSimulation";

export default function SimulationComponent() {
  const { selectedVehicle, setEntryValue, simulated } = useContext(
    VehiclesContext
  ) as VehiclesContextType;

  return (
    <>
      {simulated && selectedVehicle && (
        <div className={style.box} style={{ padding: "25px" }}>
          <h4 className={`${style.subTitle}  ${style.lineBottom}`}>
            Valores simulados para você
          </h4>

          <div style={{ width: "450px" }}>
            <div
              className={`${style.box} ${style.boxShadow}`}
              style={{
                width: "100%",
                padding: "15px",
                marginBottom: "8px",
                position: "relative",
              }}
            >
              <h4 className={`${style.subTitle}`} style={{ margin: 0 }}>
                6x
              </h4>
              <h3 className={style.pricePortion}>R$ 9.987</h3>
              <span className={style.ipvaFree}>IPVA GRÁTIS</span>
            </div>
            <div style={{ display: "flex" }}>
              <SmallBoxSimulationComponent times={12} />
              <SmallBoxSimulationComponent times={48} />
            </div>
          </div>

          <ContactComponent />
        </div>
      )}
    </>
  );
}
