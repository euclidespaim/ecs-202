clima = int(input("Escolha um número para o clima: \n" \
"1-Sol\n" \
"2-Chuva\n" \
"3-Nublado\n" \
"4-Neve\n" \
))

match clima:
    case 1 | 3:
        print("Leve um óculos escuro.")
    case 2 | 4:
        print("Não esqueça o guarda-chuva ou casaco.")
    case _:
        print("Você digitou um valor inválido!")