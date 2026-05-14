# Validação de Senha (Nível: Difícil)
# Crie uma função chamada login_lab. 
# Dentro dela, use um laço while para pedir uma senha. 
# Enquanto a senha for diferente de "python202", continue 
# pedindo. Quando acertar, a função deve retornar True

def login_lab():
    senha = 0
    while senha != "python202":
        senha = input("Digite sua senha: ")

    return True

if login_lab():
    print("Acesso liberado!!")