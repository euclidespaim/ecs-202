"""Peça para o usuário digitar números inteiros. O programa 
deve continuar pedindo números até que o usuário digite 0. Ao 
final, mostre a soma de todos os números digitados (exceto o zero)."""

soma = 0

while True:
    numero = int(input("Digite um número inteiro (0 para sair): "))
    if numero == 0:
        break
    soma += numero

print(f"A soma dos números digitados é: {soma}")





