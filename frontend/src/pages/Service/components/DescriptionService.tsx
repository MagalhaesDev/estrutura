export function DescriptionService() {
  return (
    <div className="shadow-xl p-8">
      <h1 className="text-2xl text-green-700 pb-6">Fios no chão</h1>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <h4 className="text-zinc-600">Nome do requisitante:</h4>
          <p className="font-semibold text-green-800">Rafael</p>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="text-zinc-600">Setor da ocorrência:</h4>
          <p className="font-semibold text-green-800">Acabamento life</p>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="text-zinc-600">Nivel de risco:</h4>
          <p className="font-semibold">
            <span className="bg-yellow-500 px-3 rounded-full text-white">
              Médio
            </span>
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="text-zinc-600">Data da abertura:</h4>
          <p className="font-semibold text-green-800">19/06/2024</p>
        </div>
      </div>
      <div className="mt-8">
        <h4 className="text-zinc-600 mb-2">Descrição:</h4>
        <h4 className="text-green-800">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
          sapiente optio quos porro veniam ullam obcaecati eos reprehenderit
          assumenda harum quaerat, dolores nostrum officiis debitis soluta quam,
          ipsa illo corrupti. : Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempore sequi, reprehenderit suscipit corporis
          deserunt optio commodi veniam dolore necessitatibus labore sit
          voluptatibus ducimus odio facere nobis illum corrupti nulla inventore.
        </h4>
      </div>
    </div>
  );
}
