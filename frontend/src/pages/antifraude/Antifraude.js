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
    const [analiseVendas, setAnaliseVendas] = useState(AnaliseVendaJson);
    const [vendasFraudulentas, setVendasFraudulentas] = useState(VendasFraudulentas);
    const [vendasFieis, setVendasFieis] = useState(VendasFieis);

    const callbackFraude = function (venda) {
        if(venda) {
            setAnaliseVendas({title: analiseVendas.title, vendas : [...analiseVendas.vendas, venda]});
            let vendas = [...vendasFraudulentas.vendas];
            let novas_vendas = vendas.filter(v => v.id != venda.id)
            setVendasFraudulentas({title: "Vendas fraudulentas confirmadas", vendas: novas_vendas});
        }
    }

    const callbackFiel = function (venda) {
        if(venda) {
            setAnaliseVendas({title: analiseVendas.title, vendas : [...analiseVendas.vendas, venda]});
            let vendas = [...vendasFraudulentas.vendas];
            let novas_vendas = vendas.filter(v => v.id != venda.id)
            setVendasFieis({title: "Vendas validadas fieis", vendas: novas_vendas});
        }
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
            <VendaCompleta vendas={vendasFraudulentas} callbackFunction={callbackFraude} tipo={"Fraude"} />
        </div>
        <div className="row">
            <VendaCompleta vendas={vendasFieis} tipo={"Fiel"} callbackFunction={callbackFiel} />
        </div>
        </>
    )
}

export default Antifraude;