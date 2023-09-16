import {FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

export function CFInitialsValidator(): ValidatorFn {
    return (form: FormGroup): Validators | null => {
        const {nome, cognome, codiceFiscale} = form.value;

        if(!nome || !cognome || !codiceFiscale){
            return null;
        }

        const cfNomeCognome = getCFNomeCognome(nome, cognome);

        if(codiceFiscale.startsWith(cfNomeCognome)){
            return null
        } else {
            return {cfShouldStartWith : cfNomeCognome};
        }
    }

}

export function getCFNomeCognome(nome: string, cognome: string): string {
    return cognomeCode(cognome) + nomeCode(nome);
}

function cognomeCode(cognome: string): string{
    const codeSurname = `${extractConsonants(cognome)}${extractVowels(cognome)}XXX`
    return codeSurname.substring(0, 3).toUpperCase()
}
function nomeCode(nome: string): string{
    let codNome = extractConsonants(nome)
    if (codNome.length >= 4) {
        codNome = codNome.charAt(0) + codNome.charAt(2) + codNome.charAt(3)
    } else {
        codNome += `${extractVowels(nome)}XXX`
        codNome = codNome.substring(0, 3)
    }
    return codNome.toUpperCase()
}
function extractVowels (str: string): string {
    return str.replace(/[^AEIOU]/gi, '')
}
function extractConsonants (str: string): string {
    return str.replace(/[^BCDFGHJKLMNPQRSTVWXYZ]/gi, '')
}