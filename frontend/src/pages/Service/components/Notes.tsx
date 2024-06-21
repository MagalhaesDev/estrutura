export function Notes() {
  return (
    <div className="shadow-xl p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-green-700 pb-6">Notas:</h1>
        <button className="bg-green-800 px-5 py-1 rounded-full font-semibold text-white hover:bg-green-900 transition ease-in all .3s">
          Incluir +
        </button>
      </div>
      <table className="w-full shadow-xl my-8 ">
        <tbody className="text-zinc-800 text-sm">
          <tr className="bg-zinc-100 hover:bg-zinc-300 transition all 3s">
            <td className=" text-center py-3 text-green-700 ">
              Solicitação gerada
            </td>
            <td className=" text-center text-zinc-600">
              Solicitação foi gerada e está aguardando ser aceita, o prazo para
              resposta é de 24 horas
            </td>
            <td className=" text-center text-zinc-500">13/04/2024, 14:50:23</td>
          </tr>
          <tr className="bg-zinc-200 hover:bg-zinc-300 transition all 3s">
            <td className=" text-center py-3 text-green-700 ">
              Solicitação aceita
            </td>
            <td className=" text-center text-zinc-600">
              Solicitação foi aceita, aguardando resposta, o prazo para
              conclusão é de 5 dias.
            </td>
            <td className=" text-center text-zinc-500">13/04/2024, 16:02:11</td>
          </tr>
          <tr className="bg-zinc-100 hover:bg-zinc-300 transition all 3s">
            <td className=" text-center py-3 text-green-700 ">
              Primeiro orçamento realizado
            </td>
            <td className=" text-center text-zinc-600">
              O orçamento de numero 485 foi realizado
            </td>
            <td className=" text-center text-zinc-500">14/04/2024, 13:12:01</td>
          </tr>
          <tr className="bg-zinc-200 hover:bg-zinc-300 transition all 3s">
            <td className=" text-center py-3 text-green-700 ">
              Segundo orçamento realizado
            </td>
            <td className=" text-center text-zinc-600">
              O orçamento de numero 486 foi realizado
            </td>
            <td className=" text-center text-zinc-500">15/04/2024, 12:22:41</td>
          </tr>
          <tr className="bg-zinc-100 hover:bg-zinc-300 transition all 3s">
            <td className=" text-center py-3 text-green-700 ">
              Terceiro orçamento realizado
            </td>
            <td className=" text-center text-zinc-600">
              O orçamento de numero 487 foi realizado
            </td>
            <td className=" text-center text-zinc-500">17/04/2024, 11:42:02</td>
          </tr>
          <tr className="bg-zinc-200 hover:bg-zinc-300 transition all 3s">
            <td className=" text-center py-3 text-green-700 ">
              Orçamentos enviado para aprovação
            </td>
            <td className=" text-center text-zinc-600">
              Os orçamento foram enviados para ser aprovado pela gestão
            </td>
            <td className=" text-center text-zinc-500">18/04/2024, 16:04:30</td>
          </tr>
          <tr className="bg-zinc-100 hover:bg-zinc-300 transition all 3s">
            <td className=" text-center py-3 text-green-700 ">
              Terceiro orçamento aprovado
            </td>
            <td className=" text-center text-zinc-600">
              O orçamento de numero 487 foi aprovado e a data para realização do
              serviço é dia 20/04/2024
            </td>
            <td className=" text-center text-zinc-500">18/04/2024, 07:22:40</td>
          </tr>
          <tr className="bg-zinc-200 hover:bg-zinc-300 transition all 3s">
            <td className=" text-center py-3 text-green-700 ">
              Serviço finalizado
            </td>
            <td className=" text-center text-zinc-600">
              Serviço foi finalizado{" "}
              <span className="font-bold cursor-pointer">clique aqui</span> para
              as considerações finais
            </td>
            <td className=" text-center text-zinc-500">20/04/2024, 15:03:10</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
