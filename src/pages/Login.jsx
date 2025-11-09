import Logo_Nuam from "../assets/Logo_Nuam.png";
import Logo_Inacap from "../assets/Logo_Inacap.png";
import UserIcon from "../components/UserIcon";

export default function Login() {
  return (
    <div className="min-h-[100dvh]">
      <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 min-h-[100dvh]">
                              {/* Izquierda */}
        <section className="bg-[var(--fondo)] text-black grid place-items-center p-8">
          <div className="text-center space-y-2">
            <img src={Logo_Nuam} alt="Logo" className="h-15 w-auto max-w-[400px] " />
            
            <section className="p-10"></section> {/* esto esta buenisimo, puedes cambiar a gusto el espacio*/}
            
            <span className="inline-flex items-center gap-2 font-bold text-black ">
              <span> Made By: </span>
              <img src={Logo_Inacap} alt="Logo" className="h-10 w-auto max-w-[400px]" />
            </span>

            <section className="p-10"></section>

            <span className="inline-flex items-center gap-3 font-bold ">
              <span> Powered By: </span>
              <ul className="text-justify">
                <li>Duarte Benjamin</li>
                <li>Medina Cristobal</li>
                <li>Villalobos Patricio</li>
              </ul>
            </span>
          </div>
        </section>
                              {/* Derecha */}
        <section className="bg-[var(--nar)] grid place-items-center p-8">

          {/* la tarjeta esa */}
          <div className="relative h-[500px] w-[500px] max-w-sm bg-white rounded-2xl shadow-xl  ring-black/5 p-6 pt-10">
            {/* avatar */}
            <div className="relative -top-5 left-1/2 -translate-x-1/2
                            h-12 w-12 rounded-full grid place-items-center
                            bg-[var(--nar)] text-slate-900">
              <UserIcon className="h-6 w-6" />
            </div>
              
              <div className="flex flex-col gap-3">
                <input className="border rounded px-3 py-2" placeholder="Correo" />
                <input className="border rounded px-3 py-2" type="password" placeholder="Contraseña" />
                <button className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded py-2">
                  Entrar
                </button>
              </div>
          </div>

        </section>
      </div>
    </div>
  );
}


