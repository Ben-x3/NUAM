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
          <div className="relative w-full h-[500px] max-w-md bg-white rounded-2xl shadow-xl  p-8 md:p-10 pt-12">
            {/* avatar */}
            <section className="p-5"></section>
            <div className="relative -top-6 left-1/2 -translate-x-1/2
                            h-16 w-16 rounded-full grid place-items-center
                            bg-[var(--nar)]">
              <UserIcon className="h-6 w-6" />
            </div>
              
              <div className="text-center mt-6 space-y-4">
                <input
                  className="w-full rounded border border-slate-300 bg-white px-3 py-2
                            text-slate-800 placeholder:text-slate-400
                            focus:outline-none focus:ring-2 focus:ring-[var(--nar)]"
                  placeholder="Correo"
                  type="email"
                />
                <section className="p-1"></section>
                <input
                  className="w-full rounded border border-slate-300 bg-white px-3 py-2
                            text-slate-800 placeholder:text-slate-400
                            focus:outline-none focus:ring-2 focus:ring-[var(--nar)]"
                  placeholder="Contraseña"
                  type="password"
                />
              </div>
                <section className="p-3"></section>
              <div className="flex justify-end">
                <a href="#" className="text-[13px] text-[var(--nar)] hover:underline">
                  ¿Olvidó su contraseña?
                  <section className="p-3"></section>
                </a>
              </div>
              <button
                type="submit"
                className="w-full rounded bg-[var(--nar)] py-2.5 text-white font-medium
                          hover:bg-[var(--nar)] transition-colors"
              >
                Iniciar Sesión
              </button>



          </div>

        </section>
      </div>
    </div>
  );
}


