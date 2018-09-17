export interface Produto {
    nome: string,
    tag: string,
    url: string,
    marca: string
}

export const PRODUTOS: Produto[] = [
    {
        nome: 'BALA GOTA COLA 30X150G',
        tag: 'bala',
        url: 'assets/img/bala.jpg',
        marca: 'Dori'
    },
    {
        nome: 'BALA HORTELA MINT 30X150G',
        tag: 'bala',
        url: 'assets/img/bala2.jpg',
        marca: 'Dori'
    },
    {
        nome: 'GOMETS GOMA SINO 10X1KG',
        tag: 'goma',
        url: 'assets/img/bala8.jpg',
        marca: 'Dori'
    },
    {
        nome: 'GRANULADO CHOCOLATE DORI COPO 24x215G',
        tag: 'choco',
        url: 'assets/img/choco3.jpg',
        marca: 'Dori'
    },
    {
        nome: 'BOMBOM HAPPY END SORTIDO 50X400',
        tag: 'choco',
        url: 'assets/img/choco.png',
        marca: 'Jazam'
    },
    {
        nome: 'COLORETI MINI BRANCO PACOTE 300G',
        tag: 'choco',
        url: 'assets/img/choco2.png',
        marca: 'Jazam'
    },

]