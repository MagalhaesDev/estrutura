import { CircleDollarSign, Building, BarChart3 } from "lucide-react"

export function Header() {
  return (
    <header className="py-7 flex items-center justify-center">
      <nav>
        <ul className="flex gap-10 font-medium">
          <li className="flex gap-2 text-green-600 hover:text-green-700 transition all .3s cursor-pointer">
            <BarChart3 />
            <a href="#">Inicio</a>
          </li>
          <li className="flex gap-2 text-red-500 hover:text-red-700 transition all .3s cursor-pointer">
            <Building />
            <a href="#">Serviços</a>
          </li>
          <li className="flex gap-2 text-yellow-500 hover:text-yellow-600 transition all .3s cursor-pointer">
            <CircleDollarSign />
            <a href="#">Orçamentos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
