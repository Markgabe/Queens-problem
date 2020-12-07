//ACHO QUE VAI TER QUE FAZER UM VETOR DE COLUNAS PARA CADA LINHA PQ MARCAÇÕES DE LINHAS ANTERIORES
//QUE NÃO SÃO VIZINHAS VÃO SE PERDER
export default function nRainhas(n) {
    var rainhas = [];
    var colunas = [];
    var tabuleiro = [];

    tabuleiro[0] = [];
    for (var j = 0; j < n; j++) {
        tabuleiro[0][j] = {
            estado: 'v',
            diagD: -1,
            diagE: -1
        };
    }
    var auxColunas;
    var i = 0;
    var colunaVazia = -1;
    var coluna = -1;
    let colRainhaRetirada;

    while (i < n) {
        for (var j = 0; j < tabuleiro[i].length; j++) {
            if (tabuleiro[i][j].estado == 'v') {
                colunaVazia = j;
                break;
            }
        }
        //posicionando a rainha
        if (colunaVazia > -1) {
            coluna = colunaVazia; //verificar se isso so aponta pra colunaVazia ou se copia
            //andando as diagonais da proxima linha
            rainhas.push({ lin: i, col: coluna });
            tabuleiro[i][coluna].estado = 'o';
            tabuleiro[i][coluna].diagD = i;
            tabuleiro[i][coluna].diagE = i;

            auxColunas = JSON.parse(JSON.stringify(tabuleiro[i]));
            for(let k=0; k<auxColunas.length; k++) {
                if (auxColunas[k].estado == 'm') auxColunas[k].estado = 'v'
            }
            
            for (var j = 0; j < tabuleiro[i].length; j++) { //acho que tem que desmarcar aqui
                if (j < tabuleiro[i].length - 1) {
                    auxColunas[j + 1].diagD = tabuleiro[i][j].diagD;
                    if (j == 0) {
                        auxColunas[j].diagD = -1;
                        if (tabuleiro[i][j].estado == 'v') auxColunas[j].estado = 'v';
                    }
                    if (tabuleiro[i][j+1].estado == 'v') {
                        if (tabuleiro[i][j].diagD > -1 ) {
                            auxColunas[j+1].estado = 'd';
                        } else {
                            auxColunas[j+1].estado = 'v';
                        }
                    }
                    if (tabuleiro[i][j].estado == 'd') { //acho que esse if esta sendo feito na linha 65
                        auxColunas[j].estado = 'v'
                    }
                }
                if (j > 0) {
                    auxColunas[j - 1].diagE = tabuleiro[i][j].diagE;
                    if (j == tabuleiro[i].length-1) {
                        auxColunas[j].diagE = -1;
                        if (auxColunas[j].estado == 'v') auxColunas[j].estado = 'v';
                    }
                    if (auxColunas[j-1].estado == 'v') {
                        if (tabuleiro[i][j].diagE > -1 ) {
                            auxColunas[j-1].estado = 'd';
                        } /* else {
                            if (auxColunas[j-1].estado == 'v') auxColunas[j-1].estado = 'v';
                        } */
                    }
                    //if (tabuleiro[i][j].estado == 'd' && auxColunas[j].estado == '')
                }
            }
            //mandar a pagina mostrar a linha retornando o vetor rainhas e talvez colunas também
            //desenha(rainhas, i, colunas, "insere");
            i++;
            tabuleiro[i] = JSON.parse(JSON.stringify(auxColunas));
            colunaVazia = -1;
        }
        else {
            i--;
            if (i < 0)
                i = n + 1;
            else {
                if (i > 0) {
                    tabuleiro.pop();
                    for(let j=0; j<tabuleiro[i].length; j++) {
                        if(tabuleiro[i][j].diagE > -1 && tabuleiro[i][j].diagE == tabuleiro[i][j].diagE) {
                            colRainhaRetirada = j;
                        }
                    }
                    tabuleiro[i][colRainhaRetirada].estado = 'm';
                } else {
                    //esse i tem que ser igual a 0
                    for(let j=0; j<tabuleiro[i].length; j++) {
                        if (tabuleiro[i][j].estado == 'o') {
                            tabuleiro[i][j].estado = 'm';
                            colRainhaRetirada = j;
                        }
                        tabuleiro[i][j].diagD = -1;
                        tabuleiro[i][j].diagE = -1;
                    }
                }
                rainhas.push({lin: i, col: colRainhaRetirada});
            }
        }
	}
	return rainhas
}