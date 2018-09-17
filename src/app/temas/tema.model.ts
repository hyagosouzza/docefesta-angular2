export interface Tema {
    color: string,
    nome: string,
    tag: string,
    url: string,
    imgs: string[]
}

export const TEMAS: Tema[] = [
    {
        color: 'bg-danger',
        nome: 'Chapeuzinho',
        tag: 'menina',
        url: 'assets/img/chapeuzinho.png',
        imgs: ['assets/img/chapeuzinho1.png','assets/img/chapeuzinho2.png']
    },
    {
        color: 'bg-orangered',
        nome: 'Bem-Vindo a Selva',
        tag: 'menino',
        url: 'assets/img/selva.png',
        imgs:['assets/img/selva1.png','assets/img/selva2.png']
    }
]