const str = '/site/group/guest/dados-de-beneficiario/acessados';

function removeRepeatedGuest(str) {
  const regex = /\/guest(\/guest)+/g;
  return str.replace(regex, '/guest');
}

const result = removeRepeatedGuest(str);
console.log(result);
