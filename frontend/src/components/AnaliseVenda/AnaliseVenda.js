import React, { useState, useEffect } from 'react';

import './AnaliseVenda.css'

import MastercardIcon from '../../assets/img/mastercard.png'
import VisaIcon from '../../assets/img/visa.png'

import ModalAlgoritmo from '../../modal/ModalAlgoritmo/ModalAlgoritmo'
import formatFloat from '../../util/Util';

function AnaliseVenda(props) {
    const [analises, setAnalise] = useState([])
    const title = props.title;

    const cardsIcon = {
        "master": MastercardIcon,
        "visa": VisaIcon,
    }

    useEffect(() => {
        function initAnalise() {
            const { analise } = props;
            setAnalise(analise);
        }
        initAnalise();
    }, [analises, props]);

   return (
        <div className="col-sm-12 mt-25">
            <p className="description strong mb-25">{title}</p>
            <table className="table">
                <tbody>
                    {(analises.length > 0) ?
                        analises.map((venda, index) => {
                            return (
                                <tr className="table-analise" key={index}>
                                    <td className="card-image-td">
                                        <img src={cardsIcon[venda.card]} className={"card-image-" + venda.card} alt={venda.card} />
                                    </td>
                                    <td className="va-middle">
                                        <p>{venda.cardNumber}</p>
                                        <p className="description">Número do cartão</p>
                                    </td>

                                    <td className="va-middle">
                                        <p>R$ {formatFloat(venda.valor, 2)}</p>
                                        <p className="description">Valor da compra</p>
                                    </td>
                                    <td className="va-middle">
                                        <p>{formatFloat(venda.compra.valor, 4)} L</p>
                                        <p className="description">{venda.compra.tipo}</p>
                                    </td>
                                    <td className="va-middle">
                                        <p>{venda.data}</p>
                                        <p className="description">Dia</p>    
                                    </td>
                                    <td className="va-middle">
                                        <p>{venda.status}</p>
                                        <p className="description">Status</p>
                                    </td>
                                    <td>
                                        <button className="button-href" data-target={"#modalAlgoritmo_"+index} data-toggle="modal">
                                            <i className="fs-20 gray fa fa-ellipsis-h"></i>
                                        </button>
                                        <ModalAlgoritmo venda={venda} id={index} callbackFunction={props.callbackFunction} />
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