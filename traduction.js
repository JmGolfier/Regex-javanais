var traducteur = (function () {
    var langueCible = document.getElementById('selectLangue');
    var stringATraduire = document.getElementById('initTrad');
    var stringResult = document.getElementById('resultTrad');

    return {
        getTraduction: getTraduction,
        francaisVersJavanais: francaisVersJavanais,
        javanaisVersFrancais: javanaisVersFrancais
    }

    function getTraduction() {
        if (stringATraduire.value !== '' || stringATraduire.value !== undefined || stringATraduire.value !== null) {
            if (langueCible.value === 'Francais')
                stringResult.value = francaisVersJavanais(stringATraduire.value);
            else
                stringResult.value = javanaisVersFrancais(stringATraduire.value);
        }
    };

    function francaisVersJavanais(string) {
        return string.replace(/^[aeiouy\u00C0-\u017F]|[bcdfghjklmnpqrstvwxz\u00C0-\u017F][aeiouy\u00C0-\u017F]/gi,
            function (match) {
                return match.length > 1 ? match.split('').join('av') : 'av' + match
            });

    }

    function javanaisVersFrancais(string) {
        return string.replace(/^av[aeiou\u00C0-\u017F]|[bcdfghjklmnpqrstvwxz\u00C0-\u017F]av[aeiouy\u00C0-\u017F]/gi,
            function (match) {
                return match.replace('av', '');
            });
    }
})();