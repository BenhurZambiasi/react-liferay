const test = [
  {
    codigoAnexo: '2',
    codigoTipo: '0',
    descricaoTipo: null,
    nomeAnexo: '2073541408_unnamed.png',
    pendenteAnexo: 'False',
  },
  {
    codigoAnexo: '2',
    codigoTipo: '0',
    descricaoTipo: null,
    nomeAnexo: '2073541408_unnamed.png',
    pendenteAnexo: 'False',
  },
  {
    codigoAnexo: '2',
    codigoTipo: '0',
    descricaoTipo: null,
    nomeAnexo: '2073541408_unnamed.png',
    pendenteAnexo: 'False',
  },
  {
    codigoAnexo: '1',
    codigoTipo: '10',
    descricaoTipo: 'Orçamento',
    nomeAnexo: '2073541408_040243288.jpg',
    pendenteAnexo: 'False',
  },
  {
    codigoAnexo: '1',
    codigoTipo: '10',
    descricaoTipo: 'Orçamento',
    nomeAnexo: '2073541408_040243288.jpg',
    pendenteAnexo: 'False',
  },
];

const formatListAnexos = (anexos = []) => {
  const groupedByDescricaoTipo = anexos.reduce((acc, item) => {
    const { descricaoTipo } = item;
    const descricaoNome = descricaoTipo || '-';
    if (!acc[descricaoNome]) {
      acc[descricaoNome] = [];
    }
    acc[descricaoNome].push(item);
    return acc;
  }, {});

  const newArrayGroupedByDescricaoTipo = Object.entries(groupedByDescricaoTipo).map(([descricaoTipo, items]) => ({
    descricaoTipo,
    items,
  }));

  return newArrayGroupedByDescricaoTipo;
};

console.log(formatListAnexos(test));
