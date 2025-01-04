console.log("js code printing");

const person = {
    name: "Muhibullah",
    company: "nighwon",
    language: "angular",
};

function per(strings, ...values) {
    console.log(strings);
    console.log(values);

    // Combine strings and values for demonstration
    let result = "";
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i];
        }
    }
    console.log(result);
}

per`I am ${person.name}. I am working in ${person.company} company. The framework is ${person.language}.`;






// let int=setInterval(Hello,100);
// function Hello(){

//     x=document.getElementById('hello');
//     x.style.backgroundColor='blue';
//     x.style.margin=y+'px';
//     y++;
//     if(y==100){
//     clearInterval(int)
//                         console.log('hello everyone ');
//     }

// }