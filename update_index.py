import os


nome_html = 'index.html'
excludente_de_pastas = ['_','.']
html_base = os.getcwd()+'\\'+'_annotate\\index_base.html'
identificador_conteudo = '<<<>>>'
novo_conteudo = ''

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
texto_html = ''

for pasta in pastas:
    nome_pasta = pasta.upper().replace('_',' ')
    texto_html += f'\t\t<a target="_blank" href="{pasta}\\{nome_html}">{nome_pasta}</a>\n'

with open(html_base,'r',encoding='utf-8') as arquivo:
    conteudo = arquivo.readlines()

for linha in conteudo:
    if identificador_conteudo in linha:
        linha = linha.replace(identificador_conteudo,texto_html)
    novo_conteudo += linha

with open(nome_html,'w',encoding='utf-8') as arquivo:
    arquivo.writelines(novo_conteudo)
