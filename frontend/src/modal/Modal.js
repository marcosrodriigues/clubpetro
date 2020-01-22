import React from 'react'

function Modal(props) {
    const { profile, message, button } = props;

    return (
        <div className="modal fade" id="defaultModal" tabIndex="-1" role="dialog" aria-labelledby="modalTitle">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="container">
                            <div className="profile">
                                profile
                            </div>
                            <div className="message">
                                message
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal