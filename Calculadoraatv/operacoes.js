var continuar;

do {
    var num1 = prompt("Qual o 1° número? ");
    var n1 = Number(num1);
    var opcao = prompt("Escolha dentre as operações matemáticas:\n Soma( + )\n Subtração( - )\n Multiplicação( * )\n Divisão( / )");

    while (opcao !== "+" && opcao !== "-" && opcao !== "*" && opcao !== "/") {
        opcao = prompt("Digite uma operação válida\n Soma( + )\n Subtração( - )\n Multiplicação( * )\n Divisão( / )");
    }

    switch (opcao) {
        case "+":
            var num2 = prompt(`Qual número deseja somar com ${num1}?`);
            var n2 = Number(num2);
            var resul = n1 + n2;
            alert(`A soma desses números é ${resul}`);
            break;

        case "-":
            num2 = prompt(`Qual número deseja subtrair de ${num1}?`);
            n2 = Number(num2);
            resul = n1 - n2;
            alert(`A subtração desses números é ${resul}`);
            break;

        case "*":
            num2 = prompt(`Qual número deseja multiplicar com ${num1}?`);
            n2 = Number(num2);
            resul = n1 * n2;
            alert(`A multiplicação desses números é ${resul}`);
            break;

        case "/":
            num2 = prompt(`Digite o número pela qual deseja dividir ${num1}`);
            n2 = Number(num2);
            while (n2 == 0) {
                num2 = prompt(`Não é possível dividir por 0, digite um número válido`);
                n2 = Number(num2);
            }
            resul = n1 / n2;
            alert(`A divisão desses números é ${resul}`);
            break;

        default:
            alert("Operação inválida.");
    }

    continuar = prompt("Você gostaria de fazer outra conta? (s/n)").toLowerCase();
} while (continuar === "s");

alert("Obrigado por usar a calculadora!");
