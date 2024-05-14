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
            <p className={style.descriptionSelectedVehicle}>
              {selectedVehicle.description}
            </p>
            <div className={style.containerVehicleDetails}>
              <div>
                <FontAwesomeIcon icon={faCalendarDay} />
                {selectedVehicle.year}
              </div>
              <div>
                <FontAwesomeIcon icon={faGaugeHigh} />
                {selectedVehicle.km.toLocaleString()}
              </div>
              <div>
                <FontAwesomeIcon icon={faGears} />
                {selectedVehicle.gear === "auto" ? "Automático" : "Manual"}
              </div>
            </div>
            <p className={style.totalPrincigText}>
              R$ {(selectedVehicle.price / 100).toLocaleString()}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
