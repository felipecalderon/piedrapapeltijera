export const Resultado = ({eleccion, cachipun}) => {
    let ale = Math.floor(Math.random()*3)

    if (eleccion === cachipun[ale]) {
    return (
        <>
        <img src="https://media0.giphy.com/media/3pZbeEkuUzDYUCyJGs/giphy.gif" alt="gif" className="w-2/3 mx-auto rounded-md"/>
        <p className="pt-6 text-center text-2xl">
            😒 Empate, ambos hicieron {eleccion}
        </p>
        </>
    )}
    if (eleccion === "🖐️" && cachipun[ale] === "✌️") {
        return (
        <>
        <img src="https://media4.giphy.com/media/2GdACZsbRnTmo/giphy.gif" alt="gif" className="w-2/3 mx-auto rounded-md"/>
            <p className="pt-6 text-center text-2xl">
                💀💀💀💀💀💀💀💀💀💀💀 Te cortaron manitoo {cachipun[ale]}
            </p>
        </>
    )}
    if (eleccion === "✌️" && cachipun[ale] === "✊") {
        return (
        <>
        <img src="https://media1.giphy.com/media/W3gH7rhoXadsFBHc4c/giphy.gif" alt="gif" className="w-2/3 mx-auto rounded-md"/>
            <p className="pt-6 text-center text-2xl">
                💀💀💀💀💀💀💀💀💀💀💀 Piedrazo a tus tijeras {cachipun[ale]}
            </p>
        </>
    )}
    if (eleccion === "✊" && cachipun[ale] === "🖐️") {
        return (
        <>
        <img src="https://media2.giphy.com/media/hfkpPqDA4CH04/giphy.gif" alt="gif" className="w-2/3 mx-auto rounded-md"/>
            <p className="pt-6 text-center text-2xl">
                💀💀💀💀💀💀💀💀💀💀💀 Manita envuelta {cachipun[ale]}
            </p>
        </>
    )}
    if (eleccion === null) {
       return (
    <>
        <img src="https://media1.giphy.com/media/3ohzdGnD5vAud1NCZW/giphy.gif" alt="gif" className="w-2/3 mx-auto rounded-md"/>
       <p className="text-gray-500 text-center">Selecciona una manitooo</p>
    </>
    )}
    return (
        <>
        <div className="text-center">
            <img src="https://media3.giphy.com/media/xT9IgjANI3MsW2Mfmg/giphy.gif" alt="gif" className="w-2/3 mx-auto rounded-md"/>
            <p className="pt-3 text-2xl">
                Ganasteee 
            </p>
            <p className="text-gray-500 pb-3">
                Tu oponente menso hizo:
            </p>
            <p className="text-6xl">
                {cachipun[ale]}
            </p>
        </div>
        </>
    )
}