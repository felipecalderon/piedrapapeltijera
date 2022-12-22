import { useEffect, useState } from "react"
import { Content } from "./Content"
import { Resultado } from "./Resultado"

export const Dashboard = () => {
    const [eleccion, setEleccion] = useState(null)
    const cachipun = ["✊", "🖐️", "✌️"]
    return (
        <>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 text-center">Toca una manito y a jugar!</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-6 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg py-6 h-auto">
                            <Content eleccion={eleccion} setEleccion={setEleccion} cachipun={cachipun}/>
                        </div>
                    </div>
                    <Resultado eleccion={eleccion} cachipun={cachipun}/>
                </div>
                <div className="flex justify-center align-bottom">
                    <button onClick={() => setEleccion(null)} type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-full text-3xl sm:text-6xl px-2 py-3">Resetear</button>  
                </div>
      </main>
        </>
    )
}