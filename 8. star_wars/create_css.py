contador = 180

with open('animations.css','w') as css_file:
    for i in range(contador):
        template = '''.i-'''+str(i)+'''{
    animation: hyperspace'''+str(i)+''' var(--vel) ease-in 1;
}

@keyframes hyperspace'''+str(i)+'''{
    0%{
        transform: rotate(var(--ang'''+str(i)+''')) translate(0px,0px);
        background-color: #ffffff50;
    }
    33%{
        transform: rotate(var(--ang'''+str(i)+''')) translate(0px,20vh);
        height: 300px;
        background-color: #ffffff90;
    }
    100%{
        transform: rotate(var(--ang'''+str(i)+''')) translate(0px,100vh);
        height: 300px;
    }
}

'''
        css_file.write(template)
