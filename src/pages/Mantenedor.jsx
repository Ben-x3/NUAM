import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo_Nuam from "../assets/Logo_Nuam.png";
import Logo_Inacap from "../assets/Logo_Inacap.png";
import UserIcon from "../components/UserIcon";   // Avatar (puedes usar el tuyo

export default function Mantenedor() {
  const [filters, setFilters] = useState({
    mercado: "",
    origen: "",
    periodo: "",
  });

  // Simulando los valores en la tabla
  const rows = [
    { ejercicio: "2021", instrumento: "Bono", fechaPago: "2021-12-01", descripcion: "Descripción 1", secuencia: "A", factor: "8" },
    { ejercicio: "2020", instrumento: "Acción", fechaPago: "2020-11-15", descripcion: "Descripción 2", secuencia: "B", factor: "15" },
    { ejercicio: "2019", instrumento: "Bonos", fechaPago: "2019-10-20", descripcion: "Descripción 3", secuencia: "C", factor: "37" },
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSearch = () => {
    console.log("Filtrar por:", filters);
    // Implementa la lógica para filtrar las filas si es necesario
  };

  const handleClear = () => {
    setFilters({ mercado: "", origen: "", periodo: "" });
    console.log("Filtros limpios");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Barra de navegación */}
      <div className="bg-[#323232] p-4 flex justify-between items-center">
        <div className="text-white text-xl font-bold">Calificaciones Tributarias</div>
        <div className="flex items-center text-white">
          <UserIcon className="h-8 w-8 rounded-full bg-orange-500 text-white" />
          <button className="ml-4 text-sm">Cerrar sesión</button>
        </div>
      </div>

      <div className="flex p-8 space-x-6">
        {/* Filtros y botones */}
        <div className="w-1/3 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold mb-4">Filtros</h3>
          
          {/* Filtros de selección */}
          <div className="space-y-4">
            <div>
              <label className="block">Mercado:</label>
              <select
                className="w-full p-2 border rounded-md"
                name="mercado"
                value={filters.mercado}
                onChange={handleFilterChange}
              >
                <option value="">Seleccione</option>
                <option value="mercado1">Mercado 1</option>
                <option value="mercado2">Mercado 2</option>
              </select>
            </div>
            <div>
              <label className="block">Origen:</label>
              <select
                className="w-full p-2 border rounded-md"
                name="origen"
                value={filters.origen}
                onChange={handleFilterChange}
              >
                <option value="">Seleccione</option>
                <option value="origen1">Origen 1</option>
                <option value="origen2">Origen 2</option>
              </select>
            </div>
            <div>
              <label className="block">Periodo:</label>
              <select
                className="w-full p-2 border rounded-md"
                name="periodo"
                value={filters.periodo}
                onChange={handleFilterChange}
              >
                <option value="">Seleccione</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>
          </div>

          {/* Botones */}
          <div className="space-y-4 mt-6">
            <button onClick={handleSearch} className="w-full py-2 bg-blue-500 text-white rounded-md">Buscar</button>
            <button onClick={handleClear} className="w-full py-2 bg-gray-300 text-gray-700 rounded-md">Limpiar</button>
            <button className="w-full py-2 bg-green-500 text-white rounded-md">Ingresar</button>
            <button className="w-full py-2 bg-yellow-500 text-white rounded-md">Modificar</button>
            <button className="w-full py-2 bg-red-500 text-white rounded-md">Eliminar</button>
          </div>
        </div>

        {/* Tabla */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          <table className="w-full table-auto border-collapse">
            <thead className="bg-[var(--fondo)]">
              <tr>
                <th className="p-2 border">Ejercicio</th>
                <th className="p-2 border">Instrumento</th>
                <th className="p-2 border">Fecha Pago</th>
                <th className="p-2 border">Descripción</th>
                <th className="p-2 border">Secuencia Evento</th>
                {/* Creando columnas de Factor-08 hasta Factor-37 */}
                {[...Array(30).keys()].map(i => (
                  <th key={i} className="p-2 border">{`Factor-${i + 8}`}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="odd:bg-gray-100">
                  <td className="p-2 border">{row.ejercicio}</td>
                  <td className="p-2 border">{row.instrumento}</td>
                  <td className="p-2 border">{row.fechaPago}</td>
                  <td className="p-2 border">{row.descripcion}</td>
                  <td className="p-2 border">{row.secuencia}</td>
                  {/* Generando celdas de Factor-08 hasta Factor-37 */}
                  {[...Array(30).keys()].map(i => (
                    <td key={i} className="p-2 border">{i + 8 === parseInt(row.factor) ? row.factor : ""}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
