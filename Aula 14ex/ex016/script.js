function contar() {
    var ini = document.querySelector('input#txti')
    var fim = document.querySelector('input#txtf')
    var passo = document.querySelector('input#txtp')
    var res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('digite')

    } else {
        res.innerHTML = 'contando <br> '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0 ) {
            window.alert('passo invalido, consideramos passo =1')
            p = 1
        }

        if (i < f) { 
            for(let c = i; c <= f; c += p ) {
                res.innerHTML += `${c}  \u{1F600}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c}  \u{1F600}`
            }
        }
        res.innerHTML += `${c}  \u{1F600}`
    }
}