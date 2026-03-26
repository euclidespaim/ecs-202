




idade = int(input("Digite sua idade: "))
tem_licenca = input("Você tem carteira? Digite Sim ou Não: ")

print(type(tem_licenca))

if tem_licenca == "Sim":
    tem_licenca = True;
else:
    tem_licenca = False;
    

resultado = idade >= 18 and tem_licenca

# Don't change the line below
print("Pode dirigir:", resultado)

print(type(tem_licenca))
print(type(resultado))