function gerar() {
    let num = document.querySelector('input#number')
    let tab = document.querySelector('select#seltab')
    if (num.value.length == 0) {
        window.alert('Por favor digite um numero')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}