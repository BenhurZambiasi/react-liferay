/* eslint-disable react/prop-types */

const TabelaBody = ({ title }) => {
    return (
        <>
            {title === "Carteiras emitidas" && (
                <>
                    <tr>
                        <td>4</td>
                        <td>Sim</td>
                        <td>02/04/2024</td>
                        <td>02/04/2025</td>
                        <td>Perda do cartão</td>
                        <td>
                            <div className="historico-do-cadastro-container__tabela__btn-detalhes mr-3">
                                Outros detalhes <span className="material-symbols-outlined arrow-ac">
                                    expand_more
                                </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Não</td>
                        <td>25/07/2023</td>
                        <td>25/07/2024</td>
                        <td>Troca de plano</td>
                        <td>
                            <div className="historico-do-cadastro-container__tabela__btn-detalhes mr-3">
                                Outros detalhes <span className="material-symbols-outlined arrow-ac">
                                    expand_more
                                </span>
                            </div>
                        </td>
                    </tr>
                    <tr className="historico-do-cadastro-container__tabela__body-cinza">
                        <td>Motivo do bloqueio <br /> -</td>
                        <td></td>
                        <td>Data de bloqueio <br /> -</td>
                        <td>Usuario <br /> A14992</td>
                        <td>Descrição <br /> Emissão geral</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Não</td>
                        <td>20/01/2022</td>
                        <td>20/01/2023</td>
                        <td>Renovação do cartão</td>
                        <td>
                            <div className="historico-do-cadastro-container__tabela__btn-detalhes mr-3">
                                Outros detalhes <span className="material-symbols-outlined arrow-ac">
                                    expand_more
                                </span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Não</td>
                        <td>20/01/2021</td>
                        <td>20/01/2022</td>
                        <td>Inclusão beneficiário</td>
                        <td>
                            <div className="historico-do-cadastro-container__tabela__btn-detalhes mr-3">
                                Outros detalhes <span className="material-symbols-outlined arrow-ac">
                                    expand_more
                                </span>
                            </div>
                        </td>
                    </tr>
                </>
            )}
            {title === "Carteiras a emitir" && (
                <>
                    <tr>
                        <td>02/04/2024</td>
                        <td>20/01/2022</td>
                        <td>A14992</td>
                        <td>Renovação do cartão</td>
                    </tr>
                    <tr>
                        <td>25/07/2023</td>
                        <td>20/01/2021</td>
                        <td>A01890</td>
                        <td>Inclusão beneficiário</td>
                    </tr>
                </>
            )}
            {title === "Trocas de plano" && (
                <>
                    <tr>
                        <td>Unimed Básico Corp Coletivo Empresarial II</td>
                        <td>20/01/2022</td>
                        <td>20/01/2023</td>
                        <td>20/01/2024</td>
                        <td>A14992</td>
                    </tr>
                    <tr>
                        <td>Unimed Básico Corp Coletivo Empresarial I</td>
                        <td>20/01/2021</td>
                        <td>20/01/2022</td>
                        <td>20/01/2023</td>
                        <td>A01890</td>
                    </tr>
                </>
            )}
        </>
    );
};

export default TabelaBody;



