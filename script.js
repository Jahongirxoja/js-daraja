let num1 = +prompt('son kiriting')

let num2 = +prompt('darjani kiriting')

answer = 1

for(let i = 0; i < num2; i++) {
  answer = answer * num1
  console.info(answer)
}
alert(answer)
