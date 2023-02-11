import os
from datetime import datetime

nome_html = 'index.html'
excludente_de_pastas = ['_','.']
local_html_base = os.getcwd()+'\\'+'_annotate\\index_base.html'

identificador_conteudo = '<<<>>>'
novo_conteudo = ''
texto_html = ''

def obter_data_modificacao(nome_da_pasta):
    info_pasta = os.stat(pasta).st_mtime
    data = datetime.fromtimestamp(info_pasta)
    data_de_modificacao = datetime.strftime(data,"%d/%m/%Y %H:%M")
    return data_de_modificacao


def identificar_pastas():
    caminho_atual = os.getcwd()
    diretorios = []

    for diretorio in os.listdir():
        caminho_do_diretorio = caminho_atual + "\\" + diretorio

        if os.path.isdir(caminho_do_diretorio):
            incluir_na_lista = True

            for identificador in excludente_de_pastas:
                if diretorio.startswith(identificador):
                    incluir_na_lista = False

            if incluir_na_lista:
                diretorios.append(diretorio)

    return diretorios


pastas = identificar_pastas()

for num,pasta in enumerate(pastas):
    data_de_modificacao = obter_data_modificacao(pasta)

    nome_pasta = pasta.upper().replace('_',' ')
    texto_html += f'''\t\t<div class="projeto link{num}" >
            <a target="_blank" id="link{num}" href="{pasta}\\{nome_html}">{nome_pasta}</a>
            <p>modificado em: {data_de_modificacao}</p>
        </div>\n'''
else:
    texto_html = texto_html[:-1]

with open(local_html_base,'r',encoding='utf-8') as arquivo:
    conteudo = arquivo.readlines()

for linha in conteudo:
    if identificador_conteudo in linha:
        linha = linha.replace(identificador_conteudo,texto_html)
    novo_conteudo += linha

with open(nome_html,'w',encoding='utf-8') as arquivo:
    arquivo.writelines(novo_conteudo)
