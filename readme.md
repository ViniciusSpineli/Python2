# 🐍 Python II: Fundamentos e Projetos com Django

Bem-vindo ao repositório do curso **Python II**. Este espaço foi criado para documentar e armazenar todos os exercícios, anotações e projetos desenvolvidos ao longo da disciplina, servindo como um portfólio prático dos conceitos aprendidos.

> O objetivo principal é consolidar o conhecimento nos fundamentos da linguagem Python e aplicá-los no desenvolvimento de aplicações web didáticas com o framework Django.

---

## 📂 Estrutura do Repositório

O conteúdo está organizado em duas seções principais para facilitar a navegação:

* `📁 /fundamentos_python`
    * Contém uma série de exercícios focados em conceitos essenciais e intermediários do Python, como manipulação de estruturas de dados, funções, orientação a objetos, tratamento de exceções e manipulação de arquivos.

* `📁 /projetos_django`
    * Aqui ficam os projetos web desenvolvidos com Django. Cada subpasta representa uma aplicação completa e autocontida.
    * `>/projeto_blog`: Um blog simples com funcionalidades de CRUD.
    * `>/projeto_enquetes`: Aplicação de votação baseada no tutorial oficial do Django.
    * `>/projeto_ecommerce_simples`: Um e-commerce didático para demonstrar conceitos de models, views e templates.

---

## 🛠️ Tecnologias Utilizadas

As principais ferramentas e tecnologias que você encontrará neste repositório são:

* **Linguagem:** Python 3.x
* **Framework Web:** Django 4.x
* **Banco de Dados (desenvolvimento):** SQLite3
* **Gerenciador de Pacotes:** Pip
* **Controle de Versão:** Git e GitHub

---

## 🚀 Como Executar os Projetos Django

Para rodar qualquer um dos projetos Django localmente, siga os passos abaixo.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```

2.  **Navegue até a pasta do projeto desejado:**
    ```bash
    cd seu-repositorio/projetos_django/nome_do_projeto
    ```

3.  **Crie e ative um ambiente virtual:**
    * Isso isola as dependências do projeto.
    ```bash
    # Criar o ambiente
    python -m venv venv

    # Ativar no Windows
    .\venv\Scripts\activate

    # Ativar no Linux/macOS
    source venv/bin/activate
    ```

4.  **Instale as dependências:**
    * Cada projeto possui seu próprio arquivo `requirements.txt`.
    ```bash
    pip install -r requirements.txt
    ```

5.  **Execute as migrações e inicie o servidor:**
    ```bash
    # Aplica as migrações do banco de dados
    python manage.py migrate

    # Inicia o servidor de