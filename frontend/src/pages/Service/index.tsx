import { Budget } from "./components/Budget";
import { DescriptionService } from "./components/DescriptionService";
import { Notes } from "./components/Notes";

export function Service() {
  return (
    <main className="p-14">
      <DescriptionService />
      <Budget />
      <Notes />
    </main>
  );
}
