export interface Marca {
    nome: string,
    site: string,
    url: string
}

export const MARCAS: Marca[] = [
    {
        nome: 'Jazam',
        site: 'http://www.jazam.com.br',
        url: 'assets/img/jazam.png'
    },
    {
        nome: 'Fini',
        site: 'http://www.finistore.com.br',
        url: 'assets/img/fini.png'
    },
    {
        nome: 'Junco',
        site: 'http://junco.com.br/v2/',
        url: 'assets/img/junco.png'
    },
    {
        nome: 'Dori',
        site: 'http://dori.com.br',
        url: 'assets/img/dori.png'
    },
    {
        nome: 'Roque',
        site: 'http://baloessaoroque.com.br',
        url: 'assets/img/roque.png'
    }
]