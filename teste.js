const bene = [
  {
    nome: "Luciano Dias Scheffer",
    tipo: "Dependente",
    situacao: "ATIVO",
    cartao: "0 056 869700123425 8",
    nascimento: "06/10/1980",
    dt_inicio: "16/05/2022",
    carencia: "Isento carência",
  },
  {
    nome: "Rafaela Dias Scheffer",
    tipo: "Dependente",
    situacao: "INATIVO",
    cartao: "0 056 935145000247 5",
    nascimento: "06/10/1980",
    dt_inicio: "16/05/2022",
    carencia: "Isento carência",
  },
  {
    nome: "Lídia Maria Dias Scheffer",
    tipo: "Titular",
    situacao: "ATIVO",
    cartao: "0 056 844600065478 9",
    nascimento: "06/10/1980",
    dt_inicio: "16/05/2022",
    carencia: "Isento carência",
  },
  {
    nome: "Bernardo Silveira Dias",
    tipo: "Dependente",
    situacao: "ATIVO",
    cartao: "0 056 785600145002 3",
    nascimento: "06/10/1980",
    dt_inicio: "16/05/2022",
    carencia: "Isento carência",
  },
];
bene.sort((a, b) => {
  if (a.tipo === "Titular" && b.tipo !== "Titular") {
    return -1;
  } else if (a.tipo !== "Titular" && b.tipo === "Titular") {
    return 1;
  } else {
    if (a.situacao === "ATIVO" && b.situacao !== "ATIVO") {
      return -1;
    } else if (a.situacao !== "ATIVO" && b.situacao === "ATIVO") {
      return 1;
    } else {
      return 0;
    }
  }
});


console.log(bene);
