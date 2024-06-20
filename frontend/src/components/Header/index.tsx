export function Header() {
  return (
    <header className="py-7 flex items-center justify-center">
      <nav>
        <ul className="flex gap-10 font-medium">
          <li>
            <a href="#" className="hover:text-orange-500 transition all .3s">Inicio</a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500 transition all .3s">Serviços</a>
          </li>
          <li>
            <a href="#" className="hover:text-orange-500 transition all .3s">Orçamentos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
