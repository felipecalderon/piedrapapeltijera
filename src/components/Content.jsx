import React from "react";

export const DataContent = () => {
    const urls = [
        'https://puntoslimpios.mma.gob.cl/api/points/geo?lat=-38.739922&lng=-72.590157&distance=1',
        'https://jsonplaceholder.typicode.com/users'
    ]
    return fetch(urls[2])
        .then(response => response.json())
        .then(data => {return data})
}


export const Content = ({setEleccion}) => {
    return (
        <>
        <div className="flex justify-center items-center gap-3">
        <button onClick={() => setEleccion("✊")} type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-full text-6xl sm:text-9xl px-2 py-7">✊</button>
        <button onClick={() => setEleccion("🖐️")} type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-full text-6xl sm:text-9xl px-2 py-7">🖐️</button>
        <button onClick={() => setEleccion("✌️")} type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-full text-6xl sm:text-9xl px-2 py-7">✌️</button>
        </div>
        </>
    )
}