import React, { useState, useEffect } from 'react';

import './AnaliseVenda.css'

import MastercardIcon from '../../assets/img/mastercard.png'
import VisaIcon from '../../assets/img/visa.png'

function AnaliseVenda(props) {
    const [analises, setAnalise] = useState({ title: '', vendas: []})

    const cardsIcon = {
        "master": MastercardIcon,
        "visa": VisaIcon,
    }

    useEffect(() => {
        async function initAnalise() {
            const { analise } = props;
            await setAnalise(analise);
        }
        initAnalise();
    }, [analises, props]);

    function formatFloat(value, fixed)  {
        return value.toFixed(fixed).replace('.', ',')
    }

    return (
        <div className="col-sm-12 mt-25">
            <p className="description strong mb-25">{analises.title}</p>
            <table className="table">
                <tbody>
                    {(analises.vendas.length > 0) ?
                        analises.vendas.map((venda, index) => {
                            return (
                                <tr className="table-analise" key={index}>
                                    <td className="card-image-td">
                                        <img src={cardsIcon[venda.card]} className={"card-image-" + venda.card} alt={venda.card} />
                                    </td>
                                    <td>
                                        <p>{venda.cardNumber}</p>
                                        <p className="description">Número do cartão</p>
                                    </td>

                                    <td>
                                        <p>R$ {formatFloat(venda.valor, 2)}</p>
                                        <p className="description">Valor da compra</p>
                                    </td>
                                    <td>
                                        <p>{formatFloat(venda.compra.valor, 4)} L</p>
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
                                        <button className="button-href" data-target="#defaultModal" data-toggle="modal" onClick={() => <analises.modal venda={venda} />}>
                                            <i className="fs-20 gray fa fa-ellipsis-h"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        <tr className="table-analise">
                            <td colSpan="7" className="center">Nenhuma venda para analisar</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AnaliseVenda;