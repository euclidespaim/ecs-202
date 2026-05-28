import requests

resposta = requests.get('https://viacep.com.br/ws/88301230/json/')
dados = resposta.json()

print(dados)
print("Rua: ", dados['logradouro'])
print("Estado: ", dados['uf'])
print("DDD: ", )
print("Cidade: ", )
print("Região: ", )