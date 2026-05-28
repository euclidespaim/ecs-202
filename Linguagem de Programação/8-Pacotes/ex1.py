# Importando as funções do módulo instalado
from colorama import Fore, Back, Style, init

# Inicializa o colorama (necessário no Windows)
#init()

# Usando as variáveis do módulo para colorir o texto
print(Fore.GREEN + "Olá, Turma! Este texto é verde.")
print(Back.RED + Fore.WHITE + "Fundo vermelho e texto branco!")
print(Style.RESET_ALL + "Texto normal novamente.")