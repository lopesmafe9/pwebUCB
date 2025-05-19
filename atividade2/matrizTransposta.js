<<<<<<< HEAD
function transporMatriz(A) {
    const linhas = A.length
    const colunas = A[0].length

    const transp = []

    for (let j = 0; j < colunas; j++) {
        const novaLinha = []
        for (let i = 0; i < linhas; i++) {
            novaLinha.push(A[i][j])
        }
        transp.push(novaLinha)
    }

    console.log(A)
    console.log(transp)
}

const A = [
    [1, 2],
    [3, 4],
    [5, 6],
]

=======
function transporMatriz(A) {
    const linhas = A.length
    const colunas = A[0].length

    const transp = []

    for (let j = 0; j < colunas; j++) {
        const novaLinha = []
        for (let i = 0; i < linhas; i++) {
            novaLinha.push(A[i][j])
        }
        transp.push(novaLinha)
    }

    console.log(A)
    console.log(transp)
}

const A = [
    [1, 2],
    [3, 4],
    [5, 6],
]

>>>>>>> 462da2a22929c304376ab8a7071b7a2a6823a507
transporMatriz(A)