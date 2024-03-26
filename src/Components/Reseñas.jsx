import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIconByName } from "../utilities/icons";
import { useParams } from "react-router-dom";

const Reseñas = ({ reseñasProp }) => {
  const { id } = useParams();
  const [detailId, setDetailId] = useState("");

  useEffect(() => {
    if (id) {
      setDetailId(id);
    }
  }, [id]);

  useEffect(() => {
    const fetchReseñas = async () => {
      try {
        if (detailId) {
          const response = await fetch("http://localhost:8080/Reseñas", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (!response.ok) {
            throw new Error("Error al obtener las reseñas");
          }
          const data = await response.json();
          console.log(data);
        }
      } catch (error) {
        console.error("Error al obtener las reseñas:", error);
      }
    };

    fetchReseñas();
  }, [detailId]);

  const formatDate = (fecha) => {
    const date = new Date(fecha);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      <h2 className="mb-2 font-semibold text-lg">Reseñas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {reseñasProp.length > 0 ? (
          reseñasProp.map((reseña) => {
            if (
              reseña.herramienta_idReseña &&
              reseña.herramienta_idReseña.id &&
              reseña.herramienta_idReseña.id.toString() === detailId
            ) {
              return (
                <div
                  key={reseña.id}
                  className="bg-white rounded-lg p-4 shadow-md"
                >
                  <h3 className="text-lg font-semibold">{reseña.usuario}</h3>
                  <div className="flex flex-row">
                    {[...Array(5)].map((_, i) => {
                      const ratingValue = i + 1;
                      return (
                        <div
                          key={"star-" + ratingValue + "reseña-" + reseña.id}
                        >
                          <FontAwesomeIcon
                            icon={getIconByName("star")}
                            color={
                              ratingValue <= reseña.raiting
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            size={"lg"}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <p className="mt-2">{reseña.comentario}</p>
                  <p className="mt-4 text-sm">{formatDate(reseña.fecha)}</p>
                </div>
              );
            }
            return null;
          })
        ) : (
          <div>No hay reseñas</div>
        )}
      </div>
    </>
  );
};

Reseñas.propTypes = {
  reseñasProp: PropTypes.array.isRequired,
};

export default Reseñas;
