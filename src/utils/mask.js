import IMask from "imask";
export const Mask = (mask, value) => {
  const createMask = IMask.createMask({ mask });
  return createMask.resolve(value);
};

export function mascaraRG(rg) {
  // Remove todos os caracteres não numéricos
  let rgNumerico = rg.replace(/\D/g, "");

  // Limita o tamanho a 10 caracteres
  rgNumerico = rgNumerico.slice(0, 10);

  // Aplica a máscara
  if (rgNumerico.length === 9) {
    // Formato 9 dígitos: 12.345.678-9
    return rgNumerico.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4");
  } else if (rgNumerico.length === 8) {
    // Formato 8 dígitos: 12.345.678
    return rgNumerico.replace(/(\d{2})(\d{3})(\d{3})/, "$1.$2.$3");
  } else if (rgNumerico.length === 10) {
    // Formato 10 dígitos: 12.345.678-90
    return rgNumerico.replace(/(\d{2})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  } else {
    // Retorna o RG sem máscara se não corresponder a nenhum formato esperado
    return rgNumerico;
  }
}
