# Crie uma função chamada converter_dolar 
# que receba o valor_dolar e a cotacao. 
# A função deve retornar o valor equivalente 
# em Reais. 
# No programa principal, peça os valores 
# ao usuário e exiba o resultado.

def converter_dolar(valor_dolar, cotacao):
    return  valor_dolar * cotacao


valor1 = float(input("Digite o seu saldo em dólar: "))
valor2 = float(input("Digite a cotação do dólar hoje: "))

print("O valor em reias é: ", converter_dolar(valor1, valor2))