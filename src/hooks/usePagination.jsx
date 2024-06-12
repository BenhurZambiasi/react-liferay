import { useState } from "react";

export const usePagination = ({ data = [] }) => {
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const totalPage = Math.ceil(data.length / perPage);

  const onChangePerPage = (value) => {
    setPerPage(value);
  };

  const maxItems = 5;
  const maxLeft = (maxItems - 1) / 2;
  const first = Math.max(page - maxLeft, 1);
  const pages = Array.from({ length: Math.min(maxItems, totalPage) })
    .map((_, ind) => ind + first)
    .filter((num) => num <= totalPage);

  const handleNext = () => {
    if (page < totalPage) setPage(page + 1);
  };
  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleClickPage = (value) => {
    setPage(value);
  };

  const goToLastPage = () => {
    setPage(totalPage);
  };

  const gotToFirstPage = () => {
    setPage(1);
  };

  const indexOfLastData = page * perPage;
  const indexOfFirstData = indexOfLastData - perPage;

  const dadosPaginados = data.slice(indexOfFirstData, indexOfLastData);

  const primeiroItem = (page - 1) * perPage + 1;
  const ultimoItem = Math.min(page * perPage, data.length);

  return {
    pages,
    page,
    perPage,
    onChangePerPage,
    handleClickPage,
    handleNext,
    handlePrevious,
    dadosPaginados,
    goToLastPage,
    gotToFirstPage,
    totalPages: totalPage,
    texto: `Exibindo ${primeiroItem} a ${ultimoItem} de ${data.length} itens`,
  };
};
