import {
  VehiclesContext,
  VehiclesContextType,
} from "@/contexts/VehiclesContext";
import { useContext, useState } from "react";
import CurrencyInput from "react-currency-input-field";
import style from "../app/style.module.css";

export default function EntryValueComponent() {
  const { selectedVehicle, setEntryValue } = useContext(
    VehiclesContext
  ) as VehiclesContextType;

  const [value, setValue] = useState<string>();

  return (
    <>
      {selectedVehicle && (
        <>
          <CurrencyInput
            id="entry-value"
            name="input-entry-value"
            placeholder="Valor de entrada"
            defaultValue={0}
            decimalsLimit={2}
            prefix={"R$ "}
            decimalSeparator={","}
            value={value}
            onValueChange={(newValue, _name, values) => {
              setEntryValue(values && values.float ? values.float * 100 : 0);
              setValue(newValue);
            }}
            className={style.entryValueInput}
          />
        </>
      )}
    </>
  );
}
