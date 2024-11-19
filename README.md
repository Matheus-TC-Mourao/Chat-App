# 📱 Aplicativo de Chat

Este projeto é um aplicativo de chat em tempo real, desenvolvido para oferecer uma experiência de comunicação intuitiva, segura e moderna. Ele utiliza tecnologias de ponta para garantir desempenho e escalabilidade.

---

## 🌐 Demo

Você pode acessar o aplicativo hospedado no seguinte endereço:
**[Chat App - Clique aqui](https://chat-app-mt.vercel.app/conversations)**

---

## 🛠 Tecnologias Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) - para a construção da interface e roteamento.
- **Banco de Dados:** [Convex](https://www.convex.dev/) - armazenamento de dados escalável e em tempo real.
- **Autenticação:** [Clerk](https://clerk.dev/) - gerenciamento de usuários e autenticação segura.
- **Formulários:** [React Hook Form](https://react-hook-form.com/) - gerenciamento eficiente de formulários.
- **Validações:** [Zod](https://zod.dev/) - validação de dados confiável e poderosa.
- **Componentes UI:** [shadcn-ui](https://ui.shadcn.dev/) - para componentes estilizados e consistência visual.

---

## ✨ Funcionalidades

- **Chat em Tempo Real:** Permite comunicação instantânea entre usuários.
- **Autenticação Segura:** Cadastro, login e gerenciamento de sessão com Clerk.
- **Interface Responsiva:** Design adaptado para dispositivos móveis e desktop.
- **Validações de Formulários:** Campos validados com Zod para evitar erros e inconsistências.
- **Estilo Moderno:** Componentes estilizados com shadcn-ui para uma experiência visual atraente.

---

## 🚀 Configuração do Ambiente de Desenvolvimento

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/usuario/repositorio-chat.git
   cd repositorio-chat
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env.local` com as seguintes informações:

   ```env

   Deployment used by `npx convex dev`

   CONVEX_DEPLOYMENT=
   NEXT_PUBLIC_CONVEX_URL=


   Clerk

   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   CLERK_WEBHOOK_SECRET=

   ```

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

5. Acesse o aplicativo no navegador em `http://localhost:3000`.

---

## 🔐 Segurança e Boas Práticas

- Dados sensíveis como tokens e URLs de APIs são armazenados em variáveis de ambiente.
- As validações de entrada de dados utilizam Zod, reduzindo vulnerabilidades como ataques de injeção.

---

## 📌 Contribuindo

1. Faça um fork do repositório.
2. Crie uma branch para sua funcionalidade (`git checkout -b feature/nova-funcionalidade`).
3. Envie seu código (`git push origin feature/nova-funcionalidade`).
4. Abra um Pull Request.

---

## 📞 Contato

Se você tiver dúvidas ou sugestões, entre em contato:</br>
**Email:** [matheusmouraotc@gmail.com](matheusmouraotc@gmail.com) </br>
**LinkedIn:** [Matheus Mourão](https://www.linkedin.com/in/matheus-mour%C3%A3o-13a838208/)</br>
**GitHub:** [@Matheus-TC-Mourao](https://github.com/Matheus-TC-Mourao)

Contribuições são sempre bem-vindas! 🎉
