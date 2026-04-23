n1 = float(input("Digite o primeiro número: "))
n2 = float(input("Digite o segundo núimero: "))

op = input("Digite uma das quatro operações (+, -, *, /): ")

match op:
    case "+":
        print("O resultado da soma é: ", n1 + n2)
    case "-":
        print("O resultado da subtração é: ", n1 - n2)
    case "*":
        print("O resultado da multiplicação é: ", n1 * n2)
    case "/":
        print("O resultado da divisão é: ", n1 / n2)
    case _:
        print("Você não sabe digitar!")
