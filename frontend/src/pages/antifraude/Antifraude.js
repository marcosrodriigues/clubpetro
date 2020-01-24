import React, { useState } from 'react';

import Resumo from '../../components/Resumo/Resumo'
import AnaliseVenda from '../../components/AnaliseVenda/AnaliseVenda'
import VendaCompleta from '../../components/VendaCompleta/VendaCompleta';

import ResumoJson from '../../json/Resumo';
import AnaliseVendaJson from '../../json/AnaliseVenda';
import VendasFraudulentas from '../../json/VendasFraudulentas'
import VendasFieis from '../../json/VendasFieis'

function Antifraude() {
    const [resumo] = useState(ResumoJson);
    const [analiseVendas] = useState(AnaliseVendaJson);
    const [vendasFraudulentas] = useState(VendasFraudulentas);
    const [vendasFieis] = useState(VendasFieis);

    const callbackFraude = function (venda) {
        console.log("fr:" + venda)
    }

    const callbackFiel = function (venda) {
        console.log(venda)
    }

    return (
        <>
        <div className="row">
            <Resumo state={resumo} />
        </div>
        <div className="row">
            <AnaliseVenda analise={analiseVendas} />
        </div>
        <div className="row">
            <VendaCompleta vendas={vendasFraudulentas} callbackFunction={(venda) => callbackFraude(venda)} tipo={"Fraude"} />
        </div>
        <div className="row">
            <VendaCompleta vendas={vendasFieis} tipo={"Fiel"} callbackFunction={callbackFiel} />
        </div>
        </>
    )
}

export default Antifraude;