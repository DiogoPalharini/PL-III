import React from "react";

const FormularioCadastroProduto = ({ tema }) => {
    return (
        <div className="container-fluid">
            <h1>Cadastro de Produto</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="nomeProduto">Nome do Produto</label>
                    <input type="text" className="form-control" id="nomeProduto" placeholder="Nome do Produto" />
                </div>
                <div className="form-group">
                    <label htmlFor="valorProduto">Valor do Produto</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>R$</span>
                        <input type="text" className="form-control" id="valorProduto" placeholder="Valor do Produto" />
                    </div>
                </div>
                <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar Produto</button>
            </form>
        </div>
    );
}

export default FormularioCadastroProduto;
