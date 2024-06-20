import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";;
import { InventoryContextProvider } from "./contexts/InventoryContenxt";

export function App() {
  return (
    <BrowserRouter>
      <InventoryContextProvider>
          <Router />
      </InventoryContextProvider>
    </BrowserRouter>
  );
}
