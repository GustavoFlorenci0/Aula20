const dados = [
    {
        idade: 18,
        opniao: "otimo"
    },
    {
        idade: 50,
        opniao: "bom"
    },
    {
        idade: 35,
        opniao: "otimo"
    },
    {
        idade: 25,
        opniao: "bom"
    },
    {
        idade: 48,
        opniao: "regular"
    },
    {
        idade: 69,
        opniao: "otimo"
    },
    {
        idade: 35,
        opniao: "regular"
    },
    {
        idade: 48,
        opniao: "otimo"
    },
    {
        idade: 38,
        opniao: "regular"
    },
    {
        idade: 28,
        opniao: "otimo"
    },
    {
        idade: 19,
        opniao: "bom"
    },
    {
        idade: 18,
        opniao: "regular"
    },
    {
        idade: 47,
        opniao: "bom"
    },
    {
        idade: 75,
        opniao: "otimo"
    },
    {
        idade: 24,
        opniao: "otimo"
    },
];

const filtro = (dados, tipo ) => dados.filter((dado) => dado.opniao === tipo);

const MediaOtimo = (dado,tipo) => {    
    let somaTotal = 0
   const filtrado = filtro(dado, tipo);
    filtrado.forEach(element => { somaTotal += element.idade});
    somaTotal = (somaTotal/filtrado.length).toFixed(0);
    return `a Média de idade é ${somaTotal}` ;


};
console.log(MediaOtimo(dados,"otimo"));

const qteRegular = (dado, tipo) => {
    const regular = filtro(dado, tipo);
    return `Um total de : ${regular.length} pessoas, acham o filme Regular`;
  }

  console.log(qteRegular(dados, "regular"));


const porcentagemBom = (dado, tipo) => {
    const bom = filtro(dado, tipo);
    const media = ((bom.length/dado.length)*100).toFixed(2);
    return ` A porcetagem de pessoas que opniram ${tipo} é de ${media} % `; 
};

console.log(porcentagemBom(dados, "bom"));
console.log(porcentagemBom(dados, "otimo"));
console.log(porcentagemBom(dados, "regular"));