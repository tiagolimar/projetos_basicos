contador = 300

with open('animations.css','w') as css_file:
    for i in range(contador):
        template = '''.i-'''+str(i)+'''{animation: hyperspace'''+str(i)+''' var(--vel) linear infinite;}

@keyframes hyperspace'''+str(i)+'''{
    0%{transform: rotate(var(--ang'''+str(i)+''')) translate(0px,0px);}

    33%{transform: rotate(var(--ang'''+str(i)+''')) translate(0px,33.333vh);
        height: 200px;}

    100%{transform: rotate(var(--ang'''+str(i)+''')) translate(0px,100vh);
        height: 200px;}
}

'''
        css_file.write(template)
