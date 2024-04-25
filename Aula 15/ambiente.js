let num = [1,2,3]
num[3] = 4 
num.push(5)
num.sort()


for (let pos = 0;pos<num.length; pos++) {
    console.log(num[pos])
}
let bus = num.indexOf(0)
if (bus == -1) {
    console.log('não encontrado')
}
console.log(`valor de busca é ${bus}`)