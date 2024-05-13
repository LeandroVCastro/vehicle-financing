import {
  VehiclesContext,
  VehiclesContextType,
} from "@/contexts/VehiclesContext";
import { useContext } from "react";
import style from "../app/style.module.css";

export default function SelectVehicleComponent() {
  const { vehicles, selectedVehicle, setSelectedVehicle, setSimulated } =
    useContext(VehiclesContext) as VehiclesContextType;
  return (
    <>
      <h4 className={style.subTitle}>
        Selecione um veiculo que deseja simular o financiamento
      </h4>
      <select
        name="select-vehicles"
        id="select-vehicles"
        style={{
          height: "50px",
          width: "300px",
          marginRight: "10px",
          paddingLeft: "10px",
        }}
        onChange={(e) => {
          const selectedId =
            e.target.value && e.target.value !== ""
              ? parseInt(e.target.value)
              : undefined;
          if (selectedId) {
            setSelectedVehicle(vehicles.find((item) => item.id == selectedId));
            setSimulated(false);
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
