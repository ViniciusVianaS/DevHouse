import { X } from "lucide-react"

const MenuMobile = ({ isOpen, onClose }) => {
  return (
    <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white ${isOpen ? 'block' : 'hidden'}`}>
        <nav className="p-4 flex flex-col">
            <a href="#" className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-2 rounded-lg duration-300">
              Aluguel
            </a>
            <a href="#" className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-2 rounded-lg duration-300">
              Compras
            </a>
            <a href="#" className="text-gray-500 font-medium hover:text-black hover:bg-gray-100 p-2 rounded-lg duration-300">
              Favoritos
            </a>
          </nav>
          <button 
           className="absolute top-2 right-2"
           onClick={onClose}
          >
            <X />
          </button>
    </div>
  )
}

export default MenuMobile