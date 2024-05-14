import {
  VehiclesContext,
  VehiclesContextType,
} from "@/contexts/VehiclesContext";
import { useContext } from "react";
import style from "../app/style.module.css";

export default function SelectVehicleComponent() {
  const {
    vehicles,
    selectedVehicle,
    setSelectedVehicle,
    setSimulated,
    setEntryValue,
  } = useContext(VehiclesContext) as VehiclesContextType;
  return (
    <>
      <h4 className={style.subTitle}>
        Selecione um veiculo que deseja simular o financiamento
      </h4>
      <select
        name="select-vehicles"
        id="select-vehicles"
        className={style.selectVehicle}
        onChange={(e) => {
          const selectedId =
            e.target.value && e.target.value !== ""
              ? parseInt(e.target.value)
              : undefined;
          if (selectedId) {
            setSelectedVehicle(vehicles.find((item) => item.id == selectedId));
            setSimulated(false);
            setEntryValue(0);
            return;
          }
          setSelectedVehicle(undefined);
          setSimulated(false);
        }}
      >
        {vehicles.map((item) => (
          <option value={item.id} key={item.id}>
            {item.model} ({item.brand})
          </option>
        ))}
      </select>
    </>
  );
}
