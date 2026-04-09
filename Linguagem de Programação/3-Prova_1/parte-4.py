# entrada de dados
valor_produto = float(input("Digite o valor do produto: "))
forma_pagamento = input("Digite a forma de pagamento (1-À Vista/2-Parcelado): ")

# processamento lógico
if forma_pagamento == "1":
    valor_final = valor_produto * 0.90
    print("Valor final com desconto de 10%: R$", valor_final)
elif forma_pagamento == "2":
    valor_parcela = valor_produto / 3
    print("Valor de cada parcela (3x): R$", valor_parcela)
else:
    print("Forma de pagamento inválida!")