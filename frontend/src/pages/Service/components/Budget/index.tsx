import { CircleDollarSign } from "lucide-react";
import { DialogNewBudget } from "./components/DialogNewBudget";

export function Budget() {
  return (
    <div className="shadow-xl p-8 my-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-green-700 pb-6">Orçamentos:</h1>
        <DialogNewBudget />
      </div>
      <div className="flex flex-col gap-3 justify-center items-center my-8 text-zinc-400">
        <CircleDollarSign size={48} />
        <p>Não existe nenhum orçamento incluido para este serviço</p>
      </div>
    </div>
  );
}
