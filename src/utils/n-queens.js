//ACHO QUE VAI TER QUE FAZER UM VETOR DE COLUNAS PARA CADA LINHA PQ MARCAÇÕES DE LINHAS ANTERIORES
//QUE NÃO SÃO VIZINHAS VÃO SE PERDER
export default function nRainhas(n) {
    var rainhas = [];
    var colunas = [];
    for (var j = 0; j < n; j++) {
        colunas[j] = {
            estado: 'v',
            diagD: -1,
            diagE: -1
        };
    }
    var auxColunas;
    var i = 0;
    var colunaVazia = -1;
    var coluna = -1;
    while (i < n) {
        for (var j = 0; j < colunas.length; j++) {
            if (colunas[j].estado == 'v') {
                colunaVazia = j;
                break;
            }
        }
        //posicionando a rainha
        if (colunaVazia > -1) {
            coluna = colunaVazia; //verificar se isso so aponta pra colunaVazia ou se copia
            rainhas.push({ lin: i, col: coluna });
            colunas[coluna].estado = 'o';
            colunas[coluna].diagD = i;
            colunas[coluna].diagE = i;
            //andando as diagonais da proxima linha
            auxColunas = JSON.parse(JSON.stringify(colunas));
            for (var j = 0; j < colunas.length; j++) { //acho que tem que desmarcar aqui
                if (colunas[j].estado == 'd')
                    auxColunas[j].estado = 'v';
                if (j > 0) {
                    if (colunas[j].diagE >= 0) {
                        auxColunas[j - 1].diagE = colunas[j].diagE;
                        auxColunas[j].diagE = -1;
                        if (colunas[j - 1].estado == 'v')
                            auxColunas[j - 1].estado = 'd'; //talvez tenha que fazer só quando o estado é vazio
                    }
                }
                if (j < colunas.length - 1) {
                    if (colunas[j].diagD >= 0) {
                        auxColunas[j + 1].diagD = colunas[j].diagD;
                        auxColunas[j].diagD = -1;
                        if (colunas[j + 1].estado == 'v')
                            auxColunas[j + 1].estado = 'd'; //talvez tenha que fazer só quando o estado é vazio
                    }
                }
            }
            //mandar a pagina mostrar a linha retornando o vetor rainhas e talvez colunas também
            //desenha(rainhas, i, colunas, "insere");
            colunas = JSON.parse(JSON.stringify(auxColunas));
            i++;
            colunaVazia = -1;
        }
        else {
            i--;
            if (i == 0)
                i = n + 1;
            else {
                //voltando com as diagonais da linha anterior
                auxColunas = JSON.parse(JSON.stringify(colunas));
                for (var j = 0; j < colunas.length; j++) {
                    // se colunas[j].estado == 'd' então auxColunas[j].estado = 'v'
                    if (colunas[j].estado == 'd')
                        auxColunas[j].estado = 'v';
                    if (j > 0) {
                        if (colunas[j].diagD >= 0) {
                            auxColunas[j - 1].diagD = colunas[j].diagD;
                            auxColunas[j].diagD = -1;
                            if (colunas[j - 1].estado == 'v')
                                auxColunas[j - 1].estado = 'd'; //talvez tenha que fazer só quando o estado é vazio
                        }
                    }
                    if (j < colunas.length - 1) {
                        if (colunas[j].diagE >= 0) {
                            auxColunas[j + 1].diagE = colunas[j].diagE;
                            auxColunas[j + 1].diagE = -1;
                            if (colunas[j + 1].estado == 'v')
                                auxColunas[j + 1].estado = 'd'; //talvez tenha que fazer só quando o estado é vazio
                        }
                    }
                }
                colunas = JSON.parse(JSON.stringify(auxColunas));
                //enviar a rainha que foi retirada
                //desenha(rainhas, i, colunas, "retira");
                colunas[coluna].estado = 'm';
                colunas[coluna].diagD = -1;
                colunas[coluna].diagE = -1;
                rainhas.pop();
            }
        }
	}
	return rainhas
}
