import { Content } from "../../../template"
import { Filters } from "./components"

const EmitirNF = () => {

  return (
    <Content>
      <h1 className="mb-5 text-xl font-bold text-blue-700">Emitir NF</h1>

      <Filters />

      <table className="table w-full">
        <thead className="text-xs text-left text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="p-3">NF</th>
            <th scope="col" className="p-3">Faturamento</th>
            <th scope="col" className="p-3">Pedido</th>
            <th scope="col" className="p-3">Cliente</th>
            <th scope="col" className="p-3">Nome Pedido</th>
            <th scope="col" className="p-3">Valor</th>
            <th scope="col" className="p-3">Destino</th>
            <th scope="col" className="p-3">Natureza</th>
            <th scope="col" className="p-3">Volumes</th>
            <th scope="col" className="p-3">Status</th>
            <th scope="col" className="p-3">Transmissão</th>
            <th scope="col" className="p-3">Opções</th>
          </tr>
        </thead>
        <tbody>
          {Array(20).fill(1).map((_, idx) => (
            <tr key={'t-tr-' + idx} className={`bg-white border-b ${idx % 2 && 'bg-gray-200'}`}>
              <td className="p-3">123</td>
              <td className="p-3">ABC</td>
              <td className="p-3">54321</td>
              <td className="p-3">Lorem ipsum dolor sit amet consectetur</td>
              <td className="p-3">adipisicing elit. Consequuntur impedit</td>
              <td className="p-3">2.456,56</td>
              <td className="p-3">AA(99%)</td>
              <td className="p-3">Consequuntur</td>
              <td className="p-3">{idx}</td>
              <td className="p-3">status</td>
              <td className="p-3">-</td>
              <td className="p-3">1 - 2 - 3</td>
            </tr>
          ))}
        </tbody>
      </table>

    </Content>
  )
}

export default EmitirNF