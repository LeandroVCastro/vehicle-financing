import {
  VehiclesContext,
  VehiclesContextType,
} from "@/contexts/VehiclesContext";
import { useContext } from "react";
import style from "../app/style.module.css";
import calculatePortions from "@/services/calculatePortions";

type Props = {
  times: number;
  ipvaFree?: boolean;
};

export default function PricingBoxSimulationComponent({
  times,
  ipvaFree,
}: Props) {
  const { selectedVehicle, entryValue, simulated } = useContext(
    VehiclesContext
  ) as VehiclesContextType;

  return (
    <>
      {simulated && selectedVehicle && (
        <div className={`${style.box} ${style.boxShadow} ${style.pricingBox}`}>
          <h4 className={style.subTitle} style={{ margin: 0 }}>
            {times}x
          </h4>
          <h3 className={style.pricePortion}>
            {`R$ ${calculatePortions(
              times,
              selectedVehicle.price,
              entryValue ?? 0
            )}`}
          </h3>
          {ipvaFree === true && (
            <span className={style.ipvaFree}>IPVA GRÁTIS</span>
          )}
        </div>
      )}
    </>
  );
}
