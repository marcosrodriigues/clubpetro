import React from 'react';

import Resumo from '../../components/Resumo/Resumo'
import AnaliseVenda from '../../components/AnaliseVenda/AnaliseVenda'

function Antifraude() {
    const resumo = [
        { 
            type: 'Vendas em débito',
            value: '124.800',
            chart: () => <img src={require('../../assets/img/chart-debito.png')} />,
            arrow: 'fa fa-arrow-up green'
        },
        { 
            type: 'Vendas em crédito',
            value: '56.400',
            chart: () => <img src={require('../../assets/img/chart-credito.png')} />,
            arrow: 'fa fa-arrow-up color-alert'
        },
        {
            type: 'Fraudes Confirmadas',
            value: '1.800',
            chart: () => <img src={require('../../assets/img/chart-fraude.png')} />,
            arrow: 'fa fa-arrow-down pink'
        }
    ]

    const analiseVendas = {
        title: 'Análise de vendas',
        vendas: [
            {
                card: '../../assets/img/visa.png',
                cardNumber: '3210 **** **** 4008',
                valor: 88.20,
                compra: {
                    tipo: 'Gasolina',
                    valor: 18.375
                },
                data: '22/06',
                status: 'A validar',
                resposta: {
                    fraude: 62,
                    erro: 32,
                    fiel: 9
                }
            },
            
        ]
    }

    return (
        <>
        <div className="row">
            <Resumo state={resumo} />
        </div>
        <div className="row">
            <AnaliseVenda analise={analiseVendas} />
        </div>
        </>
    )
}

export default Antifraude;