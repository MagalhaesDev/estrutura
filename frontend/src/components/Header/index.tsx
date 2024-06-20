import { CircleDollarSign, Building, BarChart3 } from "lucide-react"

export function Header() {
  return (
    <header className="py-7 flex items-center justify-center">
      <nav>
        <ul className="flex gap-10 font-medium">
          <li className="flex gap-2">
            <div className="text-green-500">
              <BarChart3 />
            </div>
            <a href="#" className="hover:text-green-600 transition all .3s">Inicio</a>
          </li>
          <li className="flex gap-2">
            <div className="text-red-500">
              <Building />
            </div>
            <a href="#" className="hover:text-green-600 transition all .3s">Serviços</a>
          </li>
          <li className="flex gap-2">
            <div className="text-yellow-500">
              <CircleDollarSign />
            </div>
            <a href="#" className="hover:text-green-600 transition all .3s">Orçamentos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
