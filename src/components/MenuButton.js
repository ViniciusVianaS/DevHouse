import { Menu } from "lucide-react"

const MenuButton = ({onClick}) => {
  return (
    <button 
     className="sm:hidden flex items-center justify-center px-4 py-2"
     onClick={onClick}
     >
        <Menu />
    </button>
  )
}

export default MenuButton