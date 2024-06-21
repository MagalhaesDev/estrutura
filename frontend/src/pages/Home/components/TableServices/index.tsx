

export function TableServices() {
    return (
        <table className="w-11/12 shadow-xl mb-24">
            <thead className='text-zinc-100 '>
                <tr className="bg-green-900 text-sm">
                    <th className="font-semibold w-[14%] rounded-tl-lg py-3">Nome</th>
                    <th className="font-semibold w-[14%]">Titulo</th>
                    <th className="font-semibold w-[14%] ">Localização</th>
                    <th className="font-semibold w-[14%] ">Nível de risco</th>
                    <th className="font-semibold w-[14%]">Responsável</th>
                    <th className="font-semibold w-[14%]">Status</th>
                    <th className="font-semibold w-[14%] rounded-tr-lg">Data do serviço</th>
                </tr>
            </thead>
            <tbody className='text-zinc-800 cursor-pointer text-sm'>
                <tr className="bg-zinc-100 hover:bg-zinc-300 transition all 3s">
                    <td className="w-[14%] text-center py-2">Natalia</td>
                    <td className="w-[14%] text-center">Fios no chão</td>
                    <td className="w-[14%] text-center">Acabamento Life</td>
                    <td className="w-[14%] text-center ">
                        <span className="bg-yellow-500 px-3 rounded-full text-white font-medium">
                            Médio
                        </span>
                    </td>
                    <td className="w-[14%] text-center">Elétrica</td>
                    <td className="w-[14%] text-center text-red-500">Pendente</td>
                    <td className="w-[14%] text-center">13/04/2024</td>
                </tr>
                <tr className="bg-zinc-200  hover:bg-zinc-300 transition all 3s">
                    <td className="w-[14%] text-center py-2">Mateus</td>
                    <td className="w-[14%] text-center">Placa do teto</td>
                    <td className="w-[14%] text-center">Administrativo</td>
                    <td className="w-[14%] text-center">
                        <span className="bg-red-700 px-3 rounded-full text-white font-medium">
                            Alto
                        </span>
                    </td>
                    <td className="w-[14%] text-center">Infraestrutura</td>
                    <td className="w-[14%] text-center text-red-500">Pendente</td>
                    <td className="w-[14%] text-center">20/04/2024</td>
                </tr>
                <tr className="bg-zinc-100  hover:bg-zinc-300 transition all 3s">
                    <td className="w-[14%] text-center py-2">Rafael</td>
                    <td className="w-[14%] text-center">Ventilador sem proteção</td>
                    <td className="w-[14%] text-center">Produção Woodpel</td>
                    <td className="w-[14%] text-center">
                        <span className="bg-red-700 px-3 rounded-full text-white font-medium">
                            Alto
                        </span>
                    </td>
                    <td className="w-[14%] text-center">Cleyton</td>
                    <td className="w-[14%] text-center text-yellow-500">Aguardando serviço</td>
                    <td className="w-[14%] text-center">22/03/2024</td>
                </tr>
                <tr className="bg-zinc-200  hover:bg-zinc-300 transition all 3s">
                    <td className="w-[14%] text-center py-2">Antonio</td>
                    <td className="w-[14%] text-center">Maquina sem segurança</td>
                    <td className="w-[14%] text-center">Produção Woodflex</td>
                    <td className="w-[14%] text-center">
                        <span className="bg-green-700 px-3 rounded-full text-white font-medium">
                            Baixo
                        </span>
                    </td>
                    <td className="w-[14%] text-center">Cleyton</td>
                    <td className="w-[14%] text-center text-green-600">Concluido</td>
                    <td className="w-[14%] text-center">13/04/2024</td>
                </tr>
                <tr className="bg-zinc-100 hover:bg-zinc-300 transition all 3s">
                    <td className="w-[14%] text-center py-2">Natalia</td>
                    <td className="w-[14%] text-center">Fios no chão</td>
                    <td className="w-[14%] text-center">Acabamento Life</td>
                    <td className="w-[14%] text-center ">
                        <span className="bg-yellow-500 px-3 rounded-full text-white font-medium">
                            Médio
                        </span>
                    </td>
                    <td className="w-[14%] text-center">Elétrica</td>
                    <td className="w-[14%] text-center text-red-500">Pendente</td>
                    <td className="w-[14%] text-center">13/04/2024</td>
                </tr>
                <tr className="bg-zinc-200  hover:bg-zinc-300 transition all 3s">
                    <td className="w-[14%] text-center py-2">Mateus</td>
                    <td className="w-[14%] text-center">Placa do teto</td>
                    <td className="w-[14%] text-center">Administrativo</td>
                    <td className="w-[14%] text-center">
                        <span className="bg-red-700 px-3 rounded-full text-white font-medium">
                            Alto
                        </span>
                    </td>
                    <td className="w-[14%] text-center">Infraestrutura</td>
                    <td className="w-[14%] text-center text-red-500">Pendente</td>
                    <td className="w-[14%] text-center">13/04/2024</td>
                </tr>
                <tr className="bg-zinc-100  hover:bg-zinc-300 transition all 3s">
                    <td className="w-[14%] text-center py-2">Rafael</td>
                    <td className="w-[14%] text-center">Ventilador sem proteção</td>
                    <td className="w-[14%] text-center">Produção Woodpel</td>
                    <td className="w-[14%] text-center">
                        <span className="bg-red-700 px-3 rounded-full text-white font-medium">
                            Alto
                        </span>
                    </td>
                    <td className="w-[14%] text-center">Cleyton</td>
                    <td className="w-[14%] text-center text-yellow-500">Aguardando serviço</td>
                    <td className="w-[14%] text-center">14/04/2024</td>
                </tr>
                <tr className="bg-zinc-200  hover:bg-zinc-300 transition all 3s">
                    <td className="w-[14%] text-center py-2">Antonio</td>
                    <td className="w-[14%] text-center">Maquina sem segurança</td>
                    <td className="w-[14%] text-center">Produção Woodflex</td>
                    <td className="w-[14%] text-center">
                        <span className="bg-green-700 px-3 rounded-full text-white font-medium">
                            Baixo
                        </span>
                    </td>
                    <td className="w-[14%] text-center">Cleyton</td>
                    <td className="w-[14%] text-center text-green-600">Concluido</td>
                    <td className="w-[14%] text-center">22/04/2024</td>
                </tr>
                <tr className="bg-zinc-100 hover:bg-zinc-300 transition all 3s">
                    <td className="w-[14%] text-center py-2">Natalia</td>
                    <td className="w-[14%] text-center">Fios no chão</td>
                    <td className="w-[14%] text-center">Acabamento Life</td>
                    <td className="w-[14%] text-center ">
                        <span className="bg-yellow-500 px-3 rounded-full text-white font-medium">
                            Médio
                        </span>
                    </td>
                    <td className="w-[14%] text-center">Elétrica</td>
                    <td className="w-[14%] text-center text-red-500">Pendente</td>
                    <td className="w-[14%] text-center">01/04/2024</td>
                </tr>
                <tr className="bg-zinc-200  hover:bg-zinc-300 transition all 3s">
                    <td className="w-[14%] text-center py-2">Mateus</td>
                    <td className="w-[14%] text-center">Placa do teto</td>
                    <td className="w-[14%] text-center">Administrativo</td>
                    <td className="w-[14%] text-center">
                        <span className="bg-red-700 px-3 rounded-full text-white font-medium">
                            Alto
                        </span>
                    </td>
                    <td className="w-[14%] text-center">Infraestrutura</td>
                    <td className="w-[14%] text-center text-red-500">Pendente</td>
                    <td className="w-[14%] text-center">13/04/2024</td>
                </tr>
                <tr className="bg-zinc-100  hover:bg-zinc-300 transition all 3s">
                    <td className="w-[14%] text-center py-2">Rafael</td>
                    <td className="w-[14%] text-center">Ventilador sem proteção</td>
                    <td className="w-[14%] text-center">Produção Woodpel</td>
                    <td className="w-[14%] text-center">
                        <span className="bg-red-700 px-3 rounded-full text-white font-medium">
                            Alto
                        </span>
                    </td>
                    <td className="w-[14%] text-center">Cleyton</td>
                    <td className="w-[14%] text-center text-yellow-500">Aguardando serviço</td>
                    <td className="w-[14%] text-center">13/04/2024</td>
                </tr>
                <tr className="bg-zinc-200  hover:bg-zinc-300 transition all 3s">
                    <td className="w-[14%] text-center py-2">Antonio</td>
                    <td className="w-[14%] text-center">Maquina sem segurança</td>
                    <td className="w-[14%] text-center">Produção Woodflex</td>
                    <td className="w-[14%] text-center">
                        <span className="bg-green-700 px-3 rounded-full text-white font-medium">
                            Baixo
                        </span>
                    </td>
                    <td className="w-[14%] text-center">Cleyton</td>
                    <td className="w-[14%] text-center text-green-600">Concluido</td>
                    <td className="w-[14%] text-center">13/04/2024</td>
                </tr>
                <tr className="bg-zinc-100 hover:bg-zinc-300 transition all 3s">
                    <td className="w-[14%] text-center py-2">Natalia</td>
                    <td className="w-[14%] text-center">Fios no chão</td>
                    <td className="w-[14%] text-center">Acabamento Life</td>
                    <td className="w-[14%] text-center ">
                        <span className="bg-yellow-500 px-3 rounded-full text-white font-medium">
                            Médio
                        </span>
                    </td>
                    <td className="w-[14%] text-center">Elétrica</td>
                    <td className="w-[14%] text-center text-red-500">Pendente</td>
                    <td className="w-[14%] text-center">13/04/2024</td>
                </tr>
                <tr className="bg-zinc-200  hover:bg-zinc-300 transition all 3s">
                    <td className="w-[14%] text-center py-2">Mateus</td>
                    <td className="w-[14%] text-center">Placa do teto</td>
                    <td className="w-[14%] text-center">Administrativo</td>
                    <td className="w-[14%] text-center">
                        <span className="bg-red-700 px-3 rounded-full text-white font-medium">
                            Alto
                        </span>
                    </td>
                    <td className="w-[14%] text-center">Infraestrutura</td>
                    <td className="w-[14%] text-center text-red-500">Pendente</td>
                    <td className="w-[14%] text-center">13/04/2024</td>
                </tr>
                <tr className="bg-zinc-100  hover:bg-zinc-300 transition all 3s">
                    <td className="w-[14%] text-center py-2">Rafael</td>
                    <td className="w-[14%] text-center">Ventilador sem proteção</td>
                    <td className="w-[14%] text-center">Produção Woodpel</td>
                    <td className="w-[14%] text-center">
                        <span className="bg-red-700 px-3 rounded-full text-white font-medium">
                            Alto
                        </span>
                    </td>
                    <td className="w-[14%] text-center">Cleyton</td>
                    <td className="w-[14%] text-center text-yellow-500">Aguardando serviço</td>
                    <td className="w-[14%] text-center">13/04/2024</td>
                </tr>
                <tr className="bg-zinc-200  hover:bg-zinc-300 transition all 3s">
                    <td className="w-[14%] text-center py-2">Antonio</td>
                    <td className="w-[14%] text-center">Maquina sem segurança</td>
                    <td className="w-[14%] text-center">Produção Woodflex</td>
                    <td className="w-[14%] text-center">
                        <span className="bg-green-700 px-3 rounded-full text-white font-medium">
                            Baixo
                        </span>
                    </td>
                    <td className="w-[14%] text-center">Cleyton</td>
                    <td className="w-[14%] text-center text-green-600">Concluido</td>
                    <td className="w-[14%] text-center">13/04/2024</td>
                </tr>
            </tbody>
        </table>
    )
}
