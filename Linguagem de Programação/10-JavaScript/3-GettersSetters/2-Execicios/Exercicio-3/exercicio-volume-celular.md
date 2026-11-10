# Exercício: Volume do Celular

**Conteúdo:** Getters e Setters em JavaScript — Turma 202

## Enunciado

Crie um objeto `celular` com a propriedade `_volume`, começando em **50**.

1. Crie o `get volume()`, que apenas retorna o valor de `_volume`.
2. Crie o `set volume(novo)` com estas regras:
   - Se `novo` **não for um número**, imprima `ERRO: o volume precisa ser um número.` e não altere nada.
   - Se for **menor que 0**, trave em 0 e imprima `🔇 Volume no mínimo (0).`
   - Se for **maior que 100**, trave em 100 e imprima `🔊 Volume no máximo (100).`
   - Caso contrário, grave o valor e imprima `Volume: X` (onde X é o novo volume).
3. Teste com o código abaixo. **Antes de rodar**, anote ao lado de cada linha o que você acha que vai aparecer:

```javascript
celular.volume += 20;     // ?
celular.volume += 50;     // ?
celular.volume -= 30;     // ?
celular.volume = -10;     // ?
celular.volume = "alto";  // ?
console.log("Volume final:", celular.volume); // ?
```

## Pergunta

Na linha `celular.volume += 20`, quem é chamado primeiro: o **get** ou o **set**? Por quê?
