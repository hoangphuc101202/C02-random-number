function random1() : void {
    let input1 : HTMLInputElement = <HTMLInputElement>document.getElementById("min");
    let input2 : HTMLInputElement = <HTMLInputElement>document.getElementById("max");

    let number1 : number= Number(input1.value);
    let number2 : number= Number(input2.value);
    
    let a : number = Math.floor(Math.random() * (number2 - number1 + 1) ) + number1;
    let result = +a;
    
    let NumberLucky: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("result");
    NumberLucky.innerHTML = String(result);

}
export{};