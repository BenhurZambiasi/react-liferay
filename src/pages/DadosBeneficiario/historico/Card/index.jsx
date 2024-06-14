import React from 'react';

const data = {
    "Carteiras emitidas": [
        {
            "Nº da via": 4,
            "Houve cobrança?": "Sim",
            "Data de emissão": "02/04/2024",
            "Validade": "02/04/2025",
            "Motivo": "Perda do cartão"
        },
        {
            "Nº da via": 3,
            "Houve cobrança?": "Não",
            "Data de emissão": "25/07/2023",
            "Validade": "25/07/2024",
            "Motivo": "Troca de plano"
        },
        {
            "Nº da via": 2,
            "Houve cobrança?": "Não",
            "Data de emissão": "20/01/2022",
            "Validade": "20/01/2023",
            "Motivo": "Renovação do cartão"
        },
        {
            "Nº da via": 1,
            "Houve cobrança?": "Não",
            "Data de emissão": "20/01/2021",
            "Validade": "20/01/2022",
            "Motivo": "Inclusão beneficiário"
        }
    ],
    "Carteiras a emitir": [
        {
            "Data da solicitação": "02/04/2024",
            "Validade": "20/01/2022",
            "Usuário": "A14992",
            "Motivo": "Renovação do cartão"
        },
        {
            "Data da solicitação": "25/07/2023",
            "Validade": "20/01/2021",
            "Usuário": "A01890",
            "Motivo": "Inclusão beneficiário"
        }
    ],
    "Trocas de plano": [
        {
            "Plano": "Unimed Básico Corp Coletivo Empresarial II",
            "Data histórico": "20/01/2022",
            "Início": "20/01/2022",
            "Fim": "20/01/2023",
            "Usuário": "A14992"
        },
        {
            "Plano": "Unimed Básico Corp Coletivo Empresarial I",
            "Data histórico": "20/01/2021",
            "Início": "20/01/2021",
            "Fim": "20/01/2022",
            "Usuário": "A01890"
        }
    ]
};

const Card = ({ title }) => {
    return (
        <div className="historico-do-cadastro-container__card">
        {data[title]?.map((details, index) => (
            <div 
                key={index} 
                className={
                    details["Houve cobrança?"] === "Sim" 
                    ? "historico-do-cadastro-container__card__body__verde" 
                    : "historico-do-cadastro-container__card__body"
                }
            >
                {Object.entries(details).map(([key, value]) => (
                    <div key={key} className='historico-do-cadastro-container__card__body__container'>
                        <span className='historico-do-cadastro-container__card__body__container__categoria'>{key}:</span>
                        <span className='historico-do-cadastro-container__card__body__container__data'>{value}</span>
                        {key === 'Motivo' && title === "Carteiras emitidas" && (
                            <div className="historico-do-cadastro-container__tabela__btn-detalhes mt-3 mb-1">
                                Outros detalhes <span className="material-symbols-outlined arrow-ac">
                                    expand_more
                                </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        ))}
    </div>
    );
};

export default Card;