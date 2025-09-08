🚀 Tutorial – Commit até atualização da branch (VS Code)
1. Fazer Commit

Abra o Source Control (ícone de “raminho” no menu lateral ou Ctrl+Shift+G).

Digite uma mensagem de commit no campo superior.

Clique no botão Commit (✔️).

Isso grava suas alterações apenas localmente.

2. Enviar Commit para o GitHub (Push)

Clique com o botão direito no painel do Source Control.

Vá em Pull, Push → Push

ou use Push to… para escolher manualmente a branch remota.

O VS Code vai enviar seus commits locais para o repositório remoto no GitHub.

3. Criar ou Trocar de Branch

Clique com o botão direito no painel do Source Control.

Vá em Branch → Create Branch…

Digite o nome (ex.: feature/login).

Isso cria e muda para a nova branch.

Se a branch já existe no remoto, escolha Checkout to… e selecione.

4. Publicar Branch no GitHub

Depois de criar a branch local, publique-a.

Clique em Branch → Publish Branch…

Isso cria a branch também no GitHub.

Agora ela já pode ser usada em Pull Requests.

5. Atualizar Branch Local

Sempre que quiser trazer as últimas mudanças da main ou da sua própria branch:

Clique com o botão direito no painel do Source Control.

Vá em Pull, Push → Pull.

Isso traz atualizações da branch remota para sua branch local.

Se quiser atualizar todas, pode usar Pull from… ou Sync.

👉 Esse fluxo cobre Commit → Push → Branch → Atualizar direto pelo VS Code, sem precisar do terminal