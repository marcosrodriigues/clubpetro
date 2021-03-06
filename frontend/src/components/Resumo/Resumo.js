import React, { useEffect, useState } from 'react';

import './Resumo.css'

function Resumo(props) {
    const [resumo, setResumo] = useState([]);

    useEffect(() => {
        async function loadInitialResumo() {
            const { state } = props;
            await setResumo(state);
        }

        loadInitialResumo();
    }, [resumo, props]);

    return (
        <>
        {resumo.map((state, index) => (
            <div className="col-sm-4 mt-25" key={index}>
                <div className="card card-state">
                    <div className="card-body">
                        <div className="card-title col-sm-6 left">
                            <div className="row card-value">
                                R$ {state.value} <i className={state.arrow}></i>
                            </div>
                            <div className="row description">{state.type}</div>
                        </div>
                        <div className="col-sm-6 right">
                            <img src={(state.chart.toString())} alt={state.type} />
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}

export default Resumo