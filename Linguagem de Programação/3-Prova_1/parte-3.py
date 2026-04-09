# entrada de dados
idade = int(input("Digite a idade do atleta: "))

# processamento lógico
if idade < 12:
    print("Categoria: Infantil")
elif idade >= 12 and idade <= 17:
    print("Categoria: Juvenil")
else:
    print("Categoria: Adulto")
    seguro = input("O atleta possui seguro saúde? (1-Sim/2-Não): ")
    if seguro == "2":
        print("Atenção: Seguro saúde obrigatório para adultos")
