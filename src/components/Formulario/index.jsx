import { useState } from 'react'
import styles from './Formulario.module.css'

export default function Formulario() {
    const [imc, setImc] = useState(0)
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)
    const [clicou, setClicou] = useState(false)

    function calculaImc() {
        setImc(peso / (altura * altura))
        setClicou(true)
    }

    function estadoDoImc() {
        if (imc <= 18.5) {
            return (
                <>
                    <p>Seu imc é de {imc.toFixed(2)}</p>
                    <p>Você está <b>abaixo do peso</b></p>
                </>
            )
        } else if (imc <= 24.9) {
            return (
                <>
                    <p>Seu imc é de {imc.toFixed(2)}</p>
                    <p>Você está com peso <b>normal</b></p>
                </>
            )
        } else if (imc >= 25) {
            return (
                <>
                    <p>Seu imc é de {imc.toFixed(2)}</p>
                    <p>Você está com <b>sobrepeso</b></p>
                </>
            )
        } else if (imc >= 30) {
            return (
                <>
                    <p>Seu imc é de {imc.toFixed(2)}</p>
                    <p>Você está com <b>obesidade</b></p>
                </>
            )
        }
    }

    return (
        <form onSubmit={ev => ev.preventDefault()} className={styles.form}>
            <input type="text" placeholder='Digite sua altura' onBlur={(ev) => setAltura(parseFloat(ev.target.value))} />
            <input type="text" placeholder='Digite seu peso' onBlur={(ev) => setPeso(parseFloat(ev.target.value))} />
            <button onClick={calculaImc}>Calcular</button>
            {clicou && (
                estadoDoImc()
            )}
        </form>
    )
}