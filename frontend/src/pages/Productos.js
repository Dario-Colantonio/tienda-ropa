import { useEffect, useState } from "react";
import API from "../services/api";

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        API.get("/productos")
        .then(res => setProductos(res.data))
        .catch(err => console.error("error al obtener productos", err))
    }, []);

    return (
        <div>
            <h2>Productos disponibles</h2>
            <ul>
                {productos.map(p => (
                    <li key = {p.id}>{p.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default Productos;