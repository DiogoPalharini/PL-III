import React from "react";

const FormularioCadastroServico = ({ tema }) => {
    return (
        <div className="container-fluid">
            <h1>Cadastro de Serviço</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="nomeServico">Nome do Serviço</label>
                    <input type="text" className="form-control" id="nomeServico" placeholder="Nome do Serviço" />
                </div>
                <div className="form-group">
                    <label htmlFor="descricaoServico">Descrição do Serviço</label>
                    <textarea className="form-control" id="descricaoServico" placeholder="Descrição do Serviço"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="valorServico">Valor do Serviço</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                        <input type="text" className="form-control" id="valorServico" placeholder="Valor do Serviço" />
                    </div>
                </div>
                <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar Serviço</button>
            </form>
        </div>
    );
}

export default FormularioCadastroServico;
