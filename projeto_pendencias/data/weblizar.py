import os
import pandas as pd

def comentario():
    """
    Fase 01
        1. Criar um arquivo python que converte a tabela do excel em um arquivo html
        2. Fazer configuração básica dos arquivos html e css (exibição resumida dos dados)

    Fase 02
        1. Fazer configuração avançada dos arquivos html e css (exibição completa dos dados)
        2. Fazer integração com alterações no excel (botão no html que atuliza as alterações
                                                    realizadas do excel para o próprio html)

    Fase 03
        1. Criação de interface web que vai permitir a inclusão de novas pendências
        2. Fazer integração dessa funcionalidade com o excel (e com o próprio html retroativamente)
    """

class ToHtml ():
    def __init__(self):
        self.nome_arq_excel = self.definir_nome()
        self.nome_arq_html_base = "index_base.html"
        self.campos = ["Nº DA OBRA ","NOME DA OBRA","DESCRIÇÃO","OBSERVAÇÃO","STATUS"]

        self.dados = pd.read_excel(self.nome_arq_excel)

        self.personalizar_html()


    def definir_nome(self,sem_caminho_e_extensao=None):
        sem_caminho_e_extensao = False if sem_caminho_e_extensao == None else True

        endereco_atual = os.getcwd()
        os.chdir(os.path.dirname(os.getcwd()))

        for arquivo in os.listdir():
            if arquivo.endswith(".xlsx"):
                nome_arq = arquivo

        if sem_caminho_e_extensao:
            nome_arq = nome_arq.replace(".xlsx","")
        else:
            nome_arq = f'{os.getcwd()}\\{nome_arq}'

            os.chdir(endereco_atual)
            return nome_arq


    def personalizar_html(self):
        
        with open(self.nome_arq_html_base,'r',encoding='utf-8') as arquivo:
            self.html_base = ''.join(arquivo.readlines())
        
        self.personalizar_title_html()
        self.criar_conteudo_html()
        self.html_base = self.html_base.replace('<<<>>>',self.conteudo_html)

        with open('index.html','w',encoding='utf-8') as arquivo:
            arquivo.writelines(self.html_base)


    def criar_conteudo_html(self):
        self.conteudo_html = ''

        for item in range(len(self.dados)):

            num_obra = self.dados[self.campos[0]][item]
            nome_obra = self.dados[self.campos[1]][item]
            descricao = self.dados[self.campos[2]][item]

            trecho = f'\t<div class="titulo"><h1>{num_obra}</h1><h2> - {nome_obra}</h2></div>\n\t<p>{descricao}</p>\n'

            self.conteudo_html += trecho


    def personalizar_title_html(self):
        nome_title = self.definir_nome(sem_caminho_e_extensao=True)

        antigo_title = '<title>Document</title>'
        novo_title = f'<title>{nome_title}</title>'
        
        self.html_base = self.html_base.replace(antigo_title,novo_title)


ToHtml()
os.system('pause')