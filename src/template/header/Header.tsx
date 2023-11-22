import { FaCog } from 'react-icons/fa'

const Header = () => {

  return (
    <header className="bg-blue-600 h-14 flex justify-center items-center">
      <nav className="max-w-7xl w-full flex justify-between items-center">
        <img src="/images/logo-white.png" alt="Logo" className="h-10" />

        <div className="font-bold flex justify-center items-center gap-8">
          <a href="#" className="text-gray-200 hover:text-gray-50 transition-all" >Vendas</a>
          <a href="#" className="text-gray-200 hover:text-gray-50 transition-all" >Serviços</a>
          <a href="#" className="text-gray-200 hover:text-gray-50 transition-all" >Arte Finalização</a>
          <a href="#" className="text-gray-200 hover:text-gray-50 transition-all" >Suprimentos</a>
          <a href="#" className="text-gray-200 hover:text-gray-50 transition-all" >Financeiro</a>
          <a href="#" className="text-gray-200 hover:text-gray-50 transition-all" >Relatórios</a>
          <a href="#" className="text-gray-200 hover:text-gray-50 transition-all" >Produção</a>
          <a href="#" className="text-gray-200 hover:text-gray-50 transition-all" >G&G</a>
          <a href="#" className="text-gray-200 hover:text-gray-50 transition-all" >Usuários</a>
        </div>

        <i className="text-gray-300 hover:text-gray-50 transition-all cursor-pointer">
          <FaCog />
        </i>
      </nav>
    </header>
  )
}

export { Header }