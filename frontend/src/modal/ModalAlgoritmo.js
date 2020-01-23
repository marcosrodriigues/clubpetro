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
                                    {venda.resposta.fraude} %
                                </div>
                            </div>
                            <div className="row resposta">
                                <p className="strong col-sm-4">Erro do Frentista</p>
                                <div className="col-sm-8">
                                    {venda.resposta.erro} %
                                </div>
                            </div>
                            <div className="row resposta">
                                <p className="strong col-sm-4">Fiel</p>
                                <div className="col-sm-8">
                                    {venda.resposta.fiel} %
                                </div>
                            </div>

                            <div className="modal-button">
                                <div className="center">
                                    <p className="strong">DECISÃO FINAL</p>
                                    <button className="btn btn-danger btn-modal"><span class="strong">VENDA FRAUDULENTA</span></button>
                                    <button className="btn btn-success btn-modal"><span class="strong">VENDA FIEL</span></button>
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