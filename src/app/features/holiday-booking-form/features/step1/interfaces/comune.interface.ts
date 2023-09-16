export interface IComune {
    codice: string;
    nome: string;
    nomeStraniero: null;
    codiceCatastale: string;
    cap: string;
    prefisso: string;
    provincia: Provincia;
    email: string;
    pec: string;
    telefono: string;
    fax: string;
    coordinate: Coordinate;
}

interface Coordinate {
    lat: number;
    lng: number;
}

interface Provincia {
    nome: string;
    regione: string;
}
