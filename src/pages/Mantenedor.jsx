import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { initialCalificaciones } from "../data/calificaciones";
import UserIcon from "../components/UserIcon";
import { useNavigate } from "react-router-dom";

export default function Mantenedor() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("calificaciones");
    if (stored) {
      setData(JSON.parse(stored));
    } else {
      localStorage.setItem("calificaciones", JSON.stringify(initialCalificaciones));
      setData(initialCalificaciones);
    }
  }, []);

  const handleAgregar = () => {
    const nuevo = {
      id: data.length + 1,
      ejercicio: 2025,
      instrumento: "Nuevo Registro Tributario",
      fechaPago: "2025-11-09",
      descripcion: "Registro añadido desde el mantenedor.",
      secuencia: "SEQ-" + (2000 + data.length),
      ...Object.fromEntries(
        Array.from({ length: 30 }, (_, j) => [
          `factor${j + 8}`,
          (Math.random() * 1.8 + 0.2).toFixed(2),
        ])
      ),
    };

    const updated = [...data, nuevo];
    setData(updated);
    localStorage.setItem("calificaciones", JSON.stringify(updated));
  };

  const handleEliminar = () => {
    if (data.length === 0) return;
    const updated = data.slice(0, -1);
    setData(updated);
    localStorage.setItem("calificaciones", JSON.stringify(updated));
  };


  const handleLogout = () => {
    console.log("CERRAR SESIÓN → usuario desconectado");
    navigate("/login"); 
  };

  // columnas
  const columns = [
    { name: "Ejercicio", selector: (row) => row.ejercicio, width: "100px" },
    { name: "Instrumento", selector: (row) => row.instrumento, width: "150px" },
    { name: "Fecha Pago", selector: (row) => row.fechaPago, width: "130px" },
    { name: "Descripción", selector: (row) => row.descripcion, width: "220px", wrap: true },
    { name: "Secuencia", selector: (row) => row.secuencia, width: "120px" },
    ...Array.from({ length: 30 }, (_, i) => ({
      name: `Factor-${i + 8}`,
      selector: (row) => row[`factor${i + 8}`],
      width: "110px",
    })),
  ];

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "var(--fondo)",
        color: "#000",
        fontWeight: "bold",
        borderRight: "1px solid #ccc",
        whiteSpace: "nowrap",
      },
    },
    cells: {
      style: {
        borderRight: "1px solid #ddd",
        padding: "6px 8px",
        whiteSpace: "nowrap",
      },
    },
  };

  return (
    <div className="min-h-screen bg-[var(--fondo)] flex flex-col">

      <div className="bg-[#323232] p-4 flex justify-between items-center text-white">
        <h1 className="font-bold text-lg">Mantenedor de Calificaciones Tributarias</h1>

        <div className="flex items-center gap-2">
          <UserIcon className="h-6 w-6 text-[var(--nar)]" />
          <button
            onClick={handleLogout}
            className="bg-[var(--nar)] text-black px-3 py-1 rounded font-semibold hover:opacity-90"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>

      <div className="flex flex-1 p-6 gap-6">

        <aside className="w-[220px] bg-white p-4 rounded-lg shadow-md flex flex-col gap-3">
          <label className="text-sm font-semibold">Mercado:</label>
          <select className="border p-1 rounded text-sm">
            <option value="">Seleccionar</option>
            <option>Primario</option>
            <option>Secundario</option>
          </select>

          <label className="text-sm font-semibold">Origen:</label>
          <select className="border p-1 rounded text-sm">
            <option value="">Seleccionar</option>
            <option>Nacional</option>
            <option>Internacional</option>
          </select>

          <label className="text-sm font-semibold">Periodo:</label>
          <select className="border p-1 rounded text-sm">
            <option value="">Seleccionar</option>
            <option>Trimestre 1</option>
            <option>Trimestre 2</option>
            <option>Trimestre 3</option>
            <option>Trimestre 4</option>
          </select>

          <button className="bg-[var(--nar)] text-white rounded py-1 text-sm mt-2 hover:opacity-90">
            Buscar
          </button>

          <button
            onClick={() => setData(initialCalificaciones)}
            className="bg-gray-300 rounded py-1 text-sm text-black hover:bg-gray-400"
          >
            Limpiar
          </button>

          <button
            onClick={handleAgregar}
            className="bg-green-500 text-white rounded py-1 text-sm hover:bg-green-600"
          >
            Ingresar
          </button>

          <button
            onClick={() => console.log("Modificar registro...")}
            className="bg-yellow-500 text-white rounded py-1 text-sm hover:bg-yellow-600"
          >
            Modificar
          </button>

          <button
            onClick={handleEliminar}
            className="bg-red-500 text-white rounded py-1 text-sm hover:bg-red-600"
          >
            Eliminar
          </button>
        </aside>

        {/* la taabla */}
        <main className="flex-1 bg-white rounded-lg shadow-md p-3 overflow-x-auto">
          <div className="min-w-max">
            <DataTable
              columns={columns}
              data={data}
              customStyles={customStyles}
              dense
              highlightOnHover
              fixedHeader
              pagination={false}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
