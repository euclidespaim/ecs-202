# 1. O Personagem de RPG (Games/Lógica)

**Conteúdo:** Getters e Setters em JavaScript — Turma 202

**Objetivo:** trabalhar a ideia de uma barra de vida (HP - Health Points) que não pode "passar do limite" da tela e nem ficar negativa.

## Enunciado

1. Crie um objeto `personagem` com as propriedades `nome` (`"Cyber Ninja"`) e `_hp` (`100`).
2. Crie o `get hp()` para ler a vida.
3. Crie o `set hp(novoHp)`. Atenção: o setter recebe o **valor final** da vida, e não o dano ou a cura.
4. **Regras do Setter:**
   - Se `novoHp` **não for um número**, imprima `"ERRO: o HP precisa ser um número."` e não altere nada.
   - Se `novoHp` for **menor ou igual a 0**, a vida trava em 0 e imprime `"💀 Cyber Ninja: GAME OVER"` (use o `nome` do personagem na mensagem).
   - Se `novoHp` for **maior ou igual a 100**, a vida trava em 100 e imprime `"💚 Vida máxima atingida (100)."`
   - Para qualquer valor **entre 0 e 100**, atualize a vida normalmente e imprima `"HP atualizado para X"`.
5. Teste com o código abaixo. Dano usa `-=` e cura usa `+=`. **Antes de rodar**, anote ao lado de cada linha o que você acha que vai aparecer:

```javascript
personagem.hp -= 30;     // levou um golpe: ?
personagem.hp += 50;     // tomou uma poção: ?
personagem.hp -= 55;     // levou outro golpe: ?
personagem.hp -= 100;    // golpe crítico: ?
personagem.hp = "cura";  // ?
console.log("HP final:", personagem.hp); // ?
```

## Pergunta

Na linha `personagem.hp -= 30`, quantas vezes o **get** é chamado? E o **set**? Explique o que o JavaScript faz por baixo dos panos.
