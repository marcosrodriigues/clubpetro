import React, { useState, useEffect } from 'react';

import './ModalConfirmDialog.css'

function ModalConfirmDialog(props) {
    const [venda, setVenda] = useState({});
    const [message, setMessage] = useState({});
    const [color, setColor] = useState("");
    const { id } = props;

    useEffect(() => {
        const { venda, message } = props;
        
        setColor((venda.status === "Fraude") ?
            "red" : "green");

        setVenda(venda);
        setMessage(message);
    }, [props]);

    function handleClick(e) {
        e.preventDefault();
        venda.status = "A validar";
        props.callbackFunction(venda);
    }

    return (
        <div className="modal fade" id={"modalConfirmDialog_"+id } tabIndex="-1" role="dialog" aria-labelledby="ModalAlgoritmo">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className={"my-modal-header modal-header mt-" + color}>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                        <div className="container custom-font">
                            <p className="strong">{message.title}</p>
                            <p className="description justify">{message.description}</p>

                            <div className="modal-button">
                                <div className="center">
                                    <p className="strong">Você deseja voltar atras?</p>
                                    <button className="btn btn-danger btn-modal" data-dismiss="modal"><span className="strong">NÃO</span></button>
                                    <button className="btn btn-success btn-modal" data-dismiss="modal" onClick={handleClick}><span className="strong">SIM, DESEJO</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalConfirmDialog