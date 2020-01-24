import React, { useState, useEffect } from 'react'

import FraudeIco from '../../assets/img/fraude.png'
import FielIco from '../../assets/img/fiel.png'
import formatFloat from '../../util/Util';
import ModalConfirmDialog from '../../modal/ModalConfirmDialog/ModalConfirmDialog';

function VendaCompleta(props) {
    const [vendas, setVendas] = useState({title: '', vendas: []});
    const [config, setConfig] = useState({});

    useEffect(() => {
        function loadVendas() {
            const { vendas, tipo } = props;
            setVendas(vendas);

            let config = { };

            config.icon = (tipo === "Fiel") ? FielIco : FraudeIco;
            config.title = (tipo === "Fiel") ? "Venda Fiel" : "Venda Fraudelenta";

            setConfig(config);
        }
        loadVendas();
    }, [props]);

    return (
        <div className="col-sm-12 mt-25">
            <p className="description strong mb-25">{vendas.title}</p>
            <table className="table">
                <tbody>
                    {(vendas.vendas.length > 0) ?
                        vendas.vendas.map((venda, index) => {
                            return (
                                <tr className="table-analise" key={index}>
                                    <td className="card-image-td">
                                        <img src={config.icon} alt={venda.profile.name} />
                                    </td>
                                    <td className="va-middle">
                                        <p>{config.title}</p>
                                        <p className="description">{venda.profile.name}</p>
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
                                        <button className="button-href" data-target={"#modalConfirmDialog_"+index} data-toggle="modal">
                                            <i className="fs-20 gray fa fa-ellipsis-h"></i>
                                        </button>
                                        <ModalConfirmDialog venda={venda} id={index} />
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

export default VendaCompleta