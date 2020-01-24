import React from 'react';

import Resumo from '../../components/Resumo/Resumo'
import AnaliseVenda from '../../components/AnaliseVenda/AnaliseVenda'
import VendaCompleta from '../../components/VendaCompleta/VendaCompleta';

function Antifraude() {
    const resumo = [
        { 
            type: 'Vendas em débito',
            value: '124.800',
            chart: () => <img src={require('../../assets/img/chart-debito.png')} alt="Venda em débito" />,
            arrow: 'fa fa-arrow-up green'
        },
        { 
            type: 'Vendas em crédito',
            value: '56.400',
            chart: () => <img src={require('../../assets/img/chart-credito.png')} alt="Venda em crédito" />,
            arrow: 'fa fa-arrow-up color-alert'
        },
        {
            type: 'Fraudes Confirmadas',
            value: '1.800',
            chart: () => <img src={require('../../assets/img/chart-fraude.png')} alt="Fraudes confirmadas" />,
            arrow: 'fa fa-arrow-down pink'
        }
    ]

    const analiseVendas = {
        title: 'Análise de vendas',
        vendas: [
            {
                profile: {
                    name: 'Marcos Rodrigues'
                },
                card: 'visa',
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
            {
                profile: {
                    name: 'Pedro João'
                },
                card: 'master',
                cardNumber: '4008 **** **** 9464',
                valor: 66.40,
                compra: {
                    tipo: 'Diesel',
                    valor: 21.149
                },
                data: '12/07',
                status: 'A validar',
                resposta: {
                    fraude: 40,
                    erro: 60,
                    fiel:20
                }
            },
            {
                profile: {
                    name: 'João Felipe'
                },
                card: 'visa',
                cardNumber: '3344 **** **** 9018',
                valor: 32.40,
                compra: {
                    tipo: 'Etanol',
                    valor: 9.000
                },
                data: '18/08',
                status: 'A validar',
                resposta: {
                    fraude: 20,
                    erro: 10,
                    fiel:70
                }
            },
        ]
    }

    const vendasFraudulentas = {
        title: 'Vendas fraudulentas confirmadas',
        vendas: [
            {
                profile: {
                    name: 'Pedro Valesse'
                },
                card: 'visa',
                cardNumber: '1234 **** **** 5678',
                valor: 576.00,
                compra: {
                    tipo: 'Gasolina',
                    valor: 120.000
                },
                data: '01/09',
                status: 'Fraude',
                resposta: {
                    fraude: 20,
                    erro: 10,
                    fiel:70
                }
            }
        ]
    }

    const vendasFieis = {
        title: 'Vendas validadas fieis',
        vendas: [
            {
                profile: {
                    name: 'Brenner Batista'
                },
                card: 'visa',
                cardNumber: '1234 **** **** 5678',
                valor: 119.040,
                compra: {
                    tipo: 'Gasolina',
                    valor: 24.800
                },
                data: '14/07',
                status: 'Fiel',
                resposta: {
                    fraude: 20,
                    erro: 10,
                    fiel:70
                }
            },
            {
                profile: {
                    name: 'Thulio Ricomini'
                },
                card: 'visa',
                cardNumber: '1234 **** **** 5678',
                valor: 312.400,
                compra: {
                    tipo: 'Gasolina',
                    valor: 65.000
                },
                data: '22/07',
                status: 'Fiel',
                resposta: {
                    fraude: 20,
                    erro: 10,
                    fiel:70
                }
            }
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
        <div className="row">
            <VendaCompleta vendas={vendasFraudulentas} tipo={"Fraude"} />
        </div>
        <div className="row">
            <VendaCompleta vendas={vendasFieis} tipo={"Fiel"} />
        </div>
        </>
    )
}

export default Antifraude;