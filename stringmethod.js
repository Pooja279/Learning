let s1 = "pooja"
s2 = s1.concat(" Gyanchandani")
console.log(s2)

//String literelas
let strlit = `hello  my name is ${s1}
                <h1> this is heading </h1>
my full name is ${s2}`;
document.body.innerHTML = strlit;