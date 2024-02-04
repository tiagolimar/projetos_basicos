import os
import subprocess
from datetime import datetime

nome_html = 'index.html'
nome_readme = 'README.md'

excludente_de_pastas = ['_','.']
local_html_base = os.getcwd()+'\\'+'_annotate\\index_base.html'

identificador_conteudo = '<<<>>>'
novo_conteudo = ''
texto_html = ''
texto_readme = '\n'

def obter_data_commit_mais_recente(subprojeto, arquivo):
    comando = ['git', 'log', '-1', '--format=%cd', '--', f'{subprojeto}/{arquivo}']
    resultado = subprocess.run(comando, capture_output=True, text=True)
    data_commit = resultado.stdout.strip().split()

    mes = datetime.strptime(data_commit[1],"%b").month
    mes = '0'+str(mes) if mes<10 else mes

    data_commit = f'{data_commit[2]}/{mes}/{data_commit[4]} {data_commit[3][:5]}'
    return data_commit

def obter_data_modificacao(nome_da_pasta):
    info_pasta = os.stat(pasta).st_mtime
    data = datetime.fromtimestamp(info_pasta)
    data_de_modificacao = datetime.strftime(data,"%d/%m/%Y %H:%M")
    return data_de_modificacao


def organizar_ordem(lista):
    dicionario_lista = {}
    indices = []
    nova_lista = []

    for item in lista:
        indice = int(item.split('.')[0])
        dicionario_lista[indice] = item
        indices.append(indice)

    indices.sort()

    for indice in indices:
        nova_lista.append(dicionario_lista[indice])

    return nova_lista


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
pastas = organizar_ordem(pastas)

for num,pasta in enumerate(pastas):
    data_de_modificacao = obter_data_commit_mais_recente(pasta,nome_html)

    nome_pasta = pasta.upper().replace('_',' ')
    texto_html += f'''\t\t<div class="projeto link{num}" >
            <a target="_blank" id="link{num}" href="{pasta}\\{nome_html}">{nome_pasta}</a>
            <p>Modificado em: {data_de_modificacao}</p>
        </div>\n'''

    nome_pasta_readme = ' '.join(nome_pasta.split('.')[1:])
    endereco_pasta = pasta.replace(' ','%20')
    texto_readme += f'''1. [{nome_pasta_readme.strip()}]({endereco_pasta}/{nome_html}) - Modificado em: {data_de_modificacao}\n\n'''

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


def substituir_readme():
    identificador_inicio = '## Lista de Projetos'
    ignorar = False
    identificador_final = '## Como Usar'
    
    novo_conteudo = ''

    with open('README.md','r',encoding='utf-8') as arquivo:
        conteudo = arquivo.readlines()

    for linha in conteudo:
        if identificador_inicio in linha:
            novo_conteudo += linha
            ignorar = True

        if identificador_final in linha:
            ignorar = False
            novo_conteudo += texto_readme

        if not ignorar:
            novo_conteudo += linha


    with open(nome_readme,'w',encoding='utf-8') as arquivo:
        arquivo.writelines(novo_conteudo)

substituir_readme()
