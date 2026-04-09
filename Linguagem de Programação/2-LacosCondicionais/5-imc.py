peso = float(input("Digite o peso em Kg: "))
altura = float(input("Digite a altura em metros: "))

imc  = peso / (altura * altura)

if imc <= 18.5:
    print("Abaixo do peso ideal!!")
elif imc < 25:
    print("Dentro do peso ideal!!")
elif imc < 30:
    print("Dentro da faixa de sobrepeso!!")
else:
    print("Dentro da faixa de obesidade!!")


