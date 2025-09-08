# Fluxo Git Colaborativo no VS Code (com GitHub)

Este guia mostra **exatamente** como seu colaborador deve trabalhar usando **Visual Studio Code** + **Git** + **GitHub**.

---

## ✅ Pré‑requisitos
- **Git** instalado (verifique com `git --version`).
- **VS Code** instalado.
- Extensões VS Code (recomendado):
  - **GitHub Pull Requests and Issues** (ms-vscode.github-browser)
  - **GitLens** (eamodio.gitlens)

---

## 1) Clonar o repositório
**Opção A — VS Code GUI**
1. Abra o VS Code.
2. `Ctrl+Shift+P` → **Git: Clone**.
3. Cole a URL do repositório GitHub.
4. Escolha a pasta local e **Open**.

**Opção B — Terminal integrado**
```bash
git clone <URL_DO_REPO>
cd <PASTA_DO_REPO>
code .
```

---

## 2) Garantir que a `main` está atualizada
No VS Code (source control) ou no terminal integrado:
```bash
git checkout main
git pull origin main
```

> Dica: No canto inferior esquerdo do VS Code, confirme que a branch atual é **main** antes de criar a nova branch.

---

## 3) Criar uma branch de trabalho
**GUI**
- Clique no nome da branch (canto inferior esquerdo) → **Create new branch** → exemplo: `feature/nome-da-tarefa`

**Terminal**
```bash
git checkout -b feature/nome-da-tarefa
```

---

## 4) Desenvolver e comitar
- Faça as mudanças nos arquivos.
- Abra o painel **Source Control** (ícone de raminho).
- Selecione os arquivos alterados → **+** (Stage).
- Escreva uma mensagem de commit (ex.: `feat: nova seção no README`).
- Clique em **Commit**.

**Terminal equivalente**
```bash
git add .
git commit -m "feat: nova seção no README"
```

> Dica: Commits pequenos e frequentes facilitam o review.

---

## 5) Enviar a branch para o GitHub
No topo do Source Control, clique em **Publish Branch** (ou **Sync Changes**).

**Terminal**
```bash
git push origin feature/nome-da-tarefa
```

---

## 6) Abrir Pull Request no VS Code
Com a extensão **GitHub Pull Requests and Issues**:
1. Abra a aba **GitHub** (ícone do gato).
2. Clique em **Create Pull Request**.
3. Selecione **base: main** ← **compare: feature/nome-da-tarefa**.
4. Título e descrição → **Create**.

> Alternativa: abrir o PR pelo site do GitHub após o push.

---

## 7) Revisão e aprovação (CODEOWNERS)
- O repositório exige **aprovação do code owner** (você).
- O colaborador aguarda a revisão.
- Você aprova pelo GitHub (web) ou pela aba **GitHub** do VS Code.

> Se configurado para permitir, você pode aprovar o próprio PR.

---

## 8) Merge na `main`
Após aprovado, faça **Merge Pull Request** (GitHub Web) ou **Complete → Merge** (na aba de PRs do VS Code).

> Se o repo estiver configurado para *squash*/**rebase**, siga o padrão da equipe.

---

## 9) Atualizar o repositório local após o merge
No **terminal integrado** do VS Code:
```bash
git checkout main
git pull origin main
# (opcional) apagar a branch local de trabalho
git branch -d feature/nome-da-tarefa
# (opcional) apagar a branch remota
git push origin --delete feature/nome-da-tarefa
```

---

## 🌟 Fluxo resumido (cola na parede)
1. **Pull da main** → `git pull origin main`
2. **Nova branch** → `git checkout -b feature/xyz`
3. **Commits** → `git add . && git commit -m "mensagem"`
4. **Push** → `git push origin feature/xyz`
5. **PR** → abrir e aguardar aprovação
6. **Merge** → após aprovação
7. **Atualizar local** → `git checkout main && git pull`

---

## 🔧 Dicas de VS Code úteis
- **Ctrl+Shift+G** → abre o **Source Control**.
- Clicar na **branch (canto inferior esquerdo)** para trocar/criar branch.
- **Timeline** do arquivo (via GitLens) para ver histórico rápido.
- **Compare changes**: botão direito no arquivo → **Open Changes**.

---

## ❓ Problemas comuns
- *“Meu PR não dá merge”* → Falta aprovação (Branch Protection). Aguarde o code owner.
- *“Não vejo minha branch para abrir PR”* → Faltou **push**.
- *“Conflitos”* → No VS Code, os conflitos aparecem nos arquivos. Escolha `Accept Current/Incoming/Both`, depois `git add .` e `git commit`.

---

Pronto! Esse é o fluxo colaborativo oficial via VS Code. 🚀
