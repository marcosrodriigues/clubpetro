import React, { useState, useEffect } from 'react';

function ModalConfirmDialog(props) {
    const [venda, setVenda] = useState({});
    const { id } = props;

    useEffect(() => {
        const { venda } = props;
        setVenda(venda);
    }, [props]);

    return (
        <div className="modal fade" id={"modalConfirmDialog_"+id } tabIndex="-1" role="dialog" aria-labelledby="ModalAlgoritmo">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                        <div className="container custom-font">
                            <p className="strong">Resposta do algoritmo {venda.valor}</p>
                            <p className="description justify">A resposta dada pelo nosso algoritmo sobre essa venda é dada pelos indicadores a baixo, além de analisar eles, entre em contato com os frentistas e tire suas próprias conclusões.</p>

                            <div className="modal-button">
                                <div className="center">
                                    <p className="strong">DECISÃO FINAL</p>
                                    <button className="btn btn-danger btn-modal"><span className="strong">VENDA FRAUDULENTA</span></button>
                                    <button className="btn btn-success btn-modal"><span className="strong">VENDA FIEL</span></button>
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