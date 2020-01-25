import React, { useEffect, useState } from 'react'

import './ModalAlgoritmo.css'

function ModalAlgoritmo(infos) {
    const [venda, setVenda] = useState({resposta: {}});
    const { id } = infos;

    useEffect(() => {
        const { venda } = infos;
        if (venda) {
            setVenda(venda);
        }
    }, [infos])

    function handleFraude(e) {
        e.preventDefault();
        infos.callbackFunction(venda, "FRAUDE");
    }

    function handleFiel(e) {
        e.preventDefault();
        infos.callbackFunction(venda, "FIEL");
    }

    return (
        <div className="modal fade" id={"modalAlgoritmo_"+id } tabIndex="-1" role="dialog" aria-labelledby="ModalAlgoritmo">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                        <div className="container custom-font">
                            <p className="strong">Resposta do algoritmo</p>
                            <p className="description justify">A resposta dada pelo nosso algoritmo sobre essa venda é dada pelos indicadores a baixo, além de analisar eles, entre em contato com os frentistas e tire suas próprias conclusões.</p>

                            <div className="row resposta">
                                <p className="strong col-sm-4">Fraude</p>
                                <div className="col-sm-8">
                                <div className="row inline">
                                        <div className="col-sm-10">
                                            <div className="progress">
                                            <div className="progress-bar bg-red" role="progressbar" 
                                                aria-valuenow={venda.resposta.fraude}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                style={{"width": venda.resposta.fraude + "%"}} >
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-sm-1 gray">
                                            {venda.resposta.fraude}%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row resposta">
                                <p className="strong col-sm-4">Erro do Frentista</p>
                                <div className="col-sm-8">
                                    <div className="row inline">
                                        <div className="col-sm-10">
                                            <div className="progress">
                                            <div className="progress-bar bg-yellow" role="progressbar" 
                                                aria-valuenow={venda.resposta.erro}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                style={{"width": venda.resposta.erro + "%"}} >
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-sm-1 gray">
                                            {venda.resposta.erro}%
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row resposta">
                                <p className="strong col-sm-4">Fiel</p>
                                <div className="col-sm-8">
                                <div className="row inline">
                                        <div className="col-sm-10">
                                            <div className="progress">
                                            <div className="progress-bar bg-green" role="progressbar" 
                                                aria-valuenow={venda.resposta.fiel}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                style={{"width": venda.resposta.fiel + "%"}} >
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-sm-1 gray">
                                            {venda.resposta.fiel}%
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-button">
                                <div className="center">
                                    <p className="strong">DECISÃO FINAL</p>
                                    <button className="btn btn-danger btn-modal" data-dismiss="modal"><span className="strong" onClick={handleFraude}>VENDA FRAUDULENTA</span></button>
                                    <button className="btn btn-success btn-modal" data-dismiss="modal"><span className="strong" onClick={handleFiel}>VENDA FIEL</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAlgoritmo