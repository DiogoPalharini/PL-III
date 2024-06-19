/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroProduto from "./cadastroProduto";
import FormularioCadastroServico from "./cadastroServico";
import ListaProdutos from "./listaProdutos";
import ListaServicos from "./listaServico";
import ListaPets from "./listaPets";
import FormularioCadastroPet from "./cadastroPets";
import ExemploFiltros from "./filtros";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes');

    const selecionarView = (valor, e) => {
        e.preventDefault();
        setTela(valor);
    };

    const construirView = () => {
        switch (tela) {
            case 'Clientes':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Servicos', 'CadastroCliente', 'ListaProdutos', 'ListaServicos', 'ListaPets', 'CadastroPet', 'Filtros']} />
                        <ListaCliente tema="#e3f2fd" />
                    </>
                );
            case 'Produtos':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Servicos', 'CadastroCliente', 'ListaProdutos', 'ListaServicos', 'ListaPets', 'CadastroPet', 'Filtros']} />
                        <FormularioCadastroProduto tema="#e3f2fd" />
                    </>
                );
            case 'Servicos':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Servicos', 'CadastroCliente', 'ListaProdutos', 'ListaServicos', 'ListaPets', 'CadastroPet', 'Filtros']} />
                        <FormularioCadastroServico tema="#e3f2fd" />
                    </>
                );
            case 'CadastroCliente':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Servicos', 'CadastroCliente', 'ListaProdutos', 'ListaServicos', 'ListaPets', 'CadastroPet', 'Filtros']} />
                        <FormularioCadastroCliente tema="#e3f2fd" />
                    </>
                );
            case 'ListaProdutos':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Servicos', 'CadastroCliente', 'ListaProdutos', 'ListaServicos', 'ListaPets', 'CadastroPet', 'Filtros']} />
                        <ListaProdutos tema="#e3f2fd" />
                    </>
                );
            case 'ListaServicos':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Servicos', 'CadastroCliente', 'ListaProdutos', 'ListaServicos', 'ListaPets', 'CadastroPet', 'Filtros']} />
                        <ListaServicos tema="#e3f2fd" />
                    </>
                );
            case 'ListaPets':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Servicos', 'CadastroCliente', 'ListaProdutos', 'ListaServicos', 'ListaPets', 'CadastroPet', 'Filtros']} />
                        <ListaPets tema="#e3f2fd" />
                    </>
                );
            case 'CadastroPet':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Servicos', 'CadastroCliente', 'ListaProdutos', 'ListaServicos', 'ListaPets', 'CadastroPet', 'Filtros']} />
                        <FormularioCadastroPet tema="#e3f2fd" />
                    </>
                );
            case 'Filtros':
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Servicos', 'CadastroCliente', 'ListaProdutos', 'ListaServicos', 'ListaPets', 'CadastroPet', 'Filtros']} />
                        <ExemploFiltros tema="#e3f2fd" />
                    </>
                );
            default:
                return (
                    <>
                        <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Servicos', 'CadastroCliente', 'ListaProdutos', 'ListaServicos', 'ListaPets', 'CadastroPet', 'Filtros']} />
                        <ListaCliente tema="#e3f2fd" />
                    </>
                );
        }
    };

    return construirView();
}
