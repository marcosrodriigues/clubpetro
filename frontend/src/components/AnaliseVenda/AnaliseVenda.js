import React, { useState, useEffect } from 'react';

import './AnaliseVenda.css'

function AnaliseVenda(props) {
    const [analises, setAnalise] = useState({ title: '', vendas: []})

    useEffect(() => {
        async function initAnalise() {
            const { analise } = props;
            await setAnalise(analise);
        }
        initAnalise();
    }, [analises]);

    return (
        <div className="col-sm-12 mt-25">
            <p className="description strong mb-25">{analises.title}</p>
            <table className="table">
                <tbody>
                    {(analises.vendas.length > 0) ?
                        analises.vendas.map((venda, index) => {
                            return (
                                <tr scope="row" className="table-analise" key={index}>
                                    <td>
                                        <img src={require('../../assets/img/visa.png')} width="50" height="15" />
                                    </td>
                                    <td>
                                        <p>{venda.cardNumber}</p>
                                        <p className="description">Número do cartão</p>
                                    </td>

                                    <td>
                                        <p>R$ {venda.valor}</p>
                                        <p className="description">Valor da compra</p>
                                    </td>
                                    <td>
                                        <p>{venda.compra.valor} L</p>
                                        <p className="description">{venda.compra.tipo}</p>
                                    </td>
                                    <td>
                                        <p>{venda.data}</p>
                                        <p className="description">Dia</p>    
                                    </td>
                                    <td>
                                        <p>{venda.status}</p>
                                        <p className="description">Status</p>
                                    </td>
                                    <td>
                                        <a href="#">
                                            <i className="fs-20 gray fa fa-ellipsis-h"></i>
                                        </a>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        <tr scope="row" className="table-analise">
                            <td colspan="7" className="center">Nenhuma venda para analisar</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AnaliseVenda;