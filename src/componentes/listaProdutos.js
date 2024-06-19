import React from "react";

const ListaProdutos = ({ tema }) => {
    return (
        <div className="container-fluid">
            <h1>Lista de Produtos</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Produto 1</td>
                        <td>R$ 100,00</td>
                        <td>
                            <button className="btn btn-warning">Editar</button>
                            <button className="btn btn-danger">Deletar</button>
                        </td>
                    </tr>
                    {/* Adicione mais produtos conforme necessário */}
                </tbody>
            </table>
        </div>
    );
}

export default ListaProdutos;
