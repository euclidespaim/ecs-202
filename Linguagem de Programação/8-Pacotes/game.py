import pygame

# 1. Inicializa o módulo
pygame.init()

# 2. Cria a tela: (Largura, Altura) em pixels
tela = pygame.display.set_mode((800, 600))
pygame.display.set_caption("Meu Primeiro Jogo - Turma 202")

# 3. O Loop Principal do Jogo
rodando = True
while rodando:
    # Pinta o fundo da tela de Branco (R=255, G=255, B=255)
    tela.fill((255, 255, 255))

    # Desenha um Círculo Vermelho
    # Sintaxe: pygame.draw.circle(onde_desenhar, cor, (pos_x, pos_y), raio)
    pygame.draw.circle(tela, (255, 0, 0), (400, 300), 50)

    # Desenha um Retângulo Azul
    # Sintaxe: pygame.draw.rect(onde_desenhar, cor, (pos_x, pos_y, largura, altura))
    pygame.draw.rect(tela, (0, 0, 255), (100, 100, 200, 80))

    # Atualiza a tela para os desenhos aparecerem de fato
    pygame.display.flip()
    
    # 4. Verifica eventos (ex: cliques e botões)
    for evento in pygame.event.get():
        if evento.type == pygame.QUIT:  # Se clicar no 'X' da janela
            rodando = False

# 5. Encerra o jogo quando o loop terminar
pygame.quit()