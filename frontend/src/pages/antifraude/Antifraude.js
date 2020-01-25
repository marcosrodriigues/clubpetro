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
            setAnaliseVendas([...analiseVendas, venda]);
            let vendas = vendasFraudulentas;
            let novas_vendas = vendas.filter(v => v.id !== venda.id)
            setVendasFraudulentas(novas_vendas);
        }
    }

    const callbackFiel = function (venda) {
        if(venda) {
            setAnaliseVendas([...analiseVendas, venda]);
            let vendas = vendasFieis;
            let novas_vendas = vendas.filter(v => v.id !== venda.id)
            setVendasFieis(novas_vendas);
        }
    }

    const callbackAnalise = function(venda, novo_status) {
        let analises = analiseVendas;
        let novas_analises = analises.filter(a => a.id !== venda.id);
        setAnaliseVendas(novas_analises);
        if (novo_status === "FIEL") {
            venda.status = "Fiel";
            setVendasFieis([...vendasFieis, venda])
        } else if (novo_status === "FRAUDE") {
            venda.status = "Fraude";
            setVendasFraudulentas([...vendasFraudulentas, venda])
        }
        return;
    }

    return (
        <>
        <div className="row">
            <Resumo state={resumo} />
        </div>
        <div className="row">
            <AnaliseVenda analise={analiseVendas} callbackFunction={callbackAnalise} title={"Análise de vendas"} />
        </div>
        <div className="row">
            <VendaCompleta vendas={vendasFraudulentas} callbackFunction={callbackFraude} tipo={"Fraude"} title={"Vendas fraudulentas confirmadas"} />
        </div>
        <div className="row">
            <VendaCompleta vendas={vendasFieis} callbackFunction={callbackFiel} tipo={"Fiel"} title={"Vendas validadas fieis"} />
        </div>
        </>
    )
}

export default Antifraude;