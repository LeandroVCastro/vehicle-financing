import {
  VehiclesContext,
  VehiclesContextType,
} from "@/contexts/VehiclesContext";
import { useContext } from "react";
import style from "../app/style.module.css";

type Props = {
  times: number;
};

export default function SmallBoxSimulationComponent({ times }: Props) {
  const { selectedVehicle, setEntryValue, simulated } = useContext(
    VehiclesContext
  ) as VehiclesContextType;

  return (
    <>
      {simulated && selectedVehicle && (
        <div
          className={`${style.box} ${style.boxShadow}`}
          style={{ flex: "1", padding: "15px", marginLeft: "4px" }}
        >
          <h4 className={style.subTitle} style={{ margin: 0 }}>
            {times}x
          </h4>
          <h3 className={style.pricePortion}>
            R$ {(selectedVehicle.price / times / 100).toFixed(2)}
          </h3>
        </div>
      )}
    </>
  );
}
