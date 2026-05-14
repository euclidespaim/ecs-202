# Um sensor de temperatura no laboratório precisa monitorar o aquecimento de um componente.

temperatura = 0

while True: 
    temperatura = float(input("Digite a temperatura a temperatura do laboratório: "))
    if temperatura >= 100:
        break
