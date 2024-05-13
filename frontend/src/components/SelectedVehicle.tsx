/* eslint-disable @next/next/no-img-element */
import {
  VehiclesContext,
  VehiclesContextType,
} from "@/contexts/VehiclesContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faGaugeHigh,
  faGears,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import style from "../app/style.module.css";

export default function SelectedVehicleComponent() {
  const { selectedVehicle } = useContext(
    VehiclesContext
  ) as VehiclesContextType;

  return (
    <div
      className={`${style.box} ${style.boxShadow}`}
      style={{
        marginRight: "28px",
      }}
    >
      {selectedVehicle && (
        <>
          <div style={{ position: "relative" }}>
            <img
              src={selectedVehicle.photo_url}
              alt={`${selectedVehicle.brand} - ${selectedVehicle.model}`}
              style={{ width: "100%" }}
            />
            <span className={style.citySpan}>
              <FontAwesomeIcon
                style={{ color: "#7d28f7" }}
                icon={faLocationDot}
              />{" "}
              {selectedVehicle.city}
            </span>
          </div>
          <div style={{ padding: "15px" }}>
            <h4 className={style.subTitle}>
              {selectedVehicle.brand} - {selectedVehicle.model}
            </h4>
            <p style={{ fontSize: "14px", fontWeight: 400, marginTop: "8px" }}>
              {selectedVehicle.description}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "15px",
              }}
            >
              <div>
                <FontAwesomeIcon
                  icon={faCalendarDay}
                  style={{ marginRight: "5px" }}
                />
                {selectedVehicle.year}
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faGaugeHigh}
                  style={{ marginRight: "5px" }}
                />
                {selectedVehicle.km.toLocaleString()}
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faGears}
                  style={{ marginRight: "5px" }}
                />
                {selectedVehicle.gear === "auto" ? "Automático" : "Manual"}
              </div>
            </div>
            <p style={{ fontSize: "26px", fontWeight: 700, marginTop: "15px" }}>
              R$ {(selectedVehicle.price / 100).toLocaleString()}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
