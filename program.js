var salarioInicial = parseFloat(window.prompt("Qual o valor do seu salário? (Responda com números, apenas!)"));
var metaSalarial = parseFloat(window.prompt("Qual é a meta salarial? (Responda com números, apenas!)"));
var mesesContados = 0;
var seisMeses = 6;
var dezPorcento = 0;

do{
    mesesContados += 1;
    if (seisMeses == mesesContados){
        dezPorcento = (salarioInicial * 10) / 100;
        salarioInicial = salarioInicial + dezPorcento;
        seisMeses += 6;
    } 
    
} while(salarioInicial < metaSalarial);


window.alert(`Serão necessários ${mesesContados} meses para atingir a meta salarial de R$${metaSalarial} reais por mês!`);
