import React from "react";

const ListaPets = ({ tema }) => {
    return (
        <div className="container-fluid">
            <h1>Lista de Pets</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Raça</th>
                        <th>Tipo</th>
                        <th>CPF do Dono</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pet 1</td>
                        <td>Raça 1</td>
                        <td>Tipo 1</td>
                        <td>000.000.000-00</td>
                        <td>
                            <button className="btn btn-warning">Editar</button>
                            <button className="btn btn-danger">Deletar</button>
                        </td>
                    </tr>
                    {/* Adicione mais pets conforme necessário */}
                </tbody>
            </table>
        </div>
    );
}

export default ListaPets;
