import React, { useState, useEffect } from 'react';

function ModalConfirmDialog(props) {
    const [venda, setVenda] = useState({});
    const [message, setMessage] = useState({});
    const { id } = props;

    useEffect(() => {
        const { venda, message } = props;
        setVenda(venda);
        setMessage(message);
    }, []);

    function handleClick(e) {
        e.preventDefault();
        props.callbackFunction(venda);
    }

    return (
        <div className="modal fade" id={"modalConfirmDialog_"+id } tabIndex="-1" role="dialog" aria-labelledby="ModalAlgoritmo">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                        <div className="container custom-font">
                            <p className="strong">{message.title} - {venda.valor}</p>
                            <p className="description justify">{message.description}</p>

                            <div className="modal-button">
                                <div className="center">
                                    <p className="strong">Você deseja voltar atras?</p>
                                    <button className="btn btn-danger btn-modal" data-dismiss="modal"><span className="strong">NÃO</span></button>
                                    <button className="btn btn-success btn-modal" onClick={handleClick}><span className="strong">SIM, DESEJO</span></button>
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