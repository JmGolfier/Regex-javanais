describe('traducteur', function () {

    var dictionnaire = [];

    beforeEach(function () {
        console.log('toto');
        dictionnaire = readJSON('dictionnaire.json');
        console.log(dictionnaire);
    });

    it('Peut traduire de francais a javanais', function () {
        expect(traducteur.francaisVersJavanais('test')).toEqual('tavest');
    });

    it('Peut traduire de javanais a francais', function () {
        expect(traducteur.javanaisVersFrancais('tavest')).toEqual('test');
    });

    it('Peut traduire de francais a javanais avec des accents', function () {
        expect(traducteur.francaisVersJavanais('été')).toEqual('avétavé');
    });

    it('Peut traduire de javanais a francais avec des accents', function () {
        expect(traducteur.javanaisVersFrancais('avétavé')).toEqual('été');
    });

    it('Peut traduire un disctionnaire', function () {
        dictionnaire.forEach(function (item) {
            expect(traducteur.francaisVersJavanais(item.fr)).toEqual(item.ja);
            expect(traducteur.javanaisVersFrancais(item.ja)).toEqual(item.fr);
        });
    });


});