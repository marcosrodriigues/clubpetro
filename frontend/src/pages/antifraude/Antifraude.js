import React from 'react';

function Antifraude() {
    const states = [
        { 
            type: 'Vendas em débito',
            value: '124.800',
            chart: () => <div>chart-debito</div>
        },
        { 
            type: 'Vendas em crédito',
            value: '56.400',
            chart: () => <div>chart-credito</div>
        },
        {
            type: 'Fraudes Confirmadas',
            value: '1.800',
            chart: () => <div>chart-fraudes</div>
        }
    ]

    return (
        <>
        <div className="row">
        {states.map((state, index) => (
            <div className="col-sm-4 mt-25" key={index}>
                <div className="card card-state">
                    <div className="card-body">
                        <div className="card-title col-sm-6 left">
                            <div classsName="row card-value">R$ {state.value}</div>
                            <div className="row card-type">{state.type}</div>
                        </div>
                        <div className="col-sm-6 right">{<state.chart />}</div>
                    </div>
                </div>
            </div>
        ))}
        </div>
        </>
    )
}

export default Antifraude;