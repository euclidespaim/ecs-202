# O Porto de Itajaí precisa de um sistema rápido para classificar o tipo de carga que chega nos containers.

cod = int(input("Digite o código da carga: "))

match cod:
    case 1 | 2 | 3:
        print("Carga Geral / Manufaturados")
    case 4 | 6:
        print("Produtos Precíveis / Refrigerados")
    case _:
        print("Código inválido - Consultar Supervisor")