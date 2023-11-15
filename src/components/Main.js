import { Map } from "lucide-react";
import { useFetch } from "../hooks/useFetch";
// import { Link } from "react-router-dom";

const Main = () => {
    const url = "http://localhost:3000/products"
    const { data: items, loading, error } = useFetch(url)

    return (
        <main className="w-full flex flex-col pb-4">
            <aside className="w-full px-3 lg:px-6 ">
                <div className="flex w-full items-baseline justify-between">
                    <h1 className="font-bold text-3xl mb-6 mt-4">Compre ou Alugue</h1>
                    <span className="hidden md:block text-gray-600">Casas encontradas</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {loading && <p>Carregando dados...</p>}
                    {error && <p>{error}</p>}
                    {items &&
                        items.map((item) => (
                            <a href="#" key={item.id} className="bg-white p-3 rounded-lg min-h-[400px] relative flex flex-col hover:shadow-lg duration-300">
                                <div>
                                    <div className="group overflow-hidden rounded-lg">
                                        <div className="absolute z-40 top-5 left-5">
                                            <div className="flex bg-slate-50/70 group-hover:bg-white duration-300 self-start items-center justify-center gap-2 px-3 py-1 rounded-full">
                                                <Map />
                                                <p className="font-medium text-sm">{item.cidade}</p>
                                            </div>
                                        </div>
                                        <img className="rounded-lg w-full h-64 object-cover group-hover:scale-110 duration-300" src={process.env.PUBLIC_URL + '/' + item.imagem} alt={item.name} />
                                    </div>
                                    <div className="w-full flex flex-col gap-1 my-2">
                                        <h2 className="text-lg font-bold">{item.name}</h2>
                                        <div>
                                            <p className="text-sm font-bold text-indigo-500 my-1">R$ {item.price}/mês</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <span className="font-medium text-sm">{item.tamanho} metros - </span>
                                    <span className="font-medium text-sm">{item.quartos} quartos -</span>
                                    <span className="font-medium text-sm">{item.banheiros} banheiros</span>
                                </div>
                            </a>
                        ))}
                </div>
            </aside>
        </main>
    )
}

export default Main