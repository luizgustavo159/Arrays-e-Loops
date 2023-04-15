let Nome = 'aaaaaaaaaa';
let ContLetra =0;
for(let Letra of Nome){
    if(Letra === 'a'){
        ContLetra ++;
    };
};
if(ContLetra === 1 ){
    console.log("tem exatamente " + ContLetra + " letra a" );

}else{
    console.log("tem exatamente " + ContLetra + " letras a" );

};