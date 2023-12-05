import turtle
import time

# Configuração inicial
turtle.speed(2)
turtle.pensize(2)
turtle.pencolor("red")
turtle.fillcolor("red")
turtle.begin_fill()

# Desenhar a forma do coração
turtle.left(50)
turtle.forward(133)
turtle.circle(50, 200)
turtle.right(140)
turtle.circle(50, 200)
turtle.forward(133)
turtle.end_fill()

# Mover para a posição inicial da animação
turtle.penup()
turtle.goto(0, 0)
turtle.pendown()

# Função para animação de batimento cardíaco
def heartbeat():
    for _ in range(2):
        turtle.pulsate()
        time.sleep(0.5)

def pulsate():
    turtle.begin_fill()
    turtle.circle(50, 200)
    turtle.right(140)
    turtle.circle(50, 200)
    turtle.end_fill()

# Executar animação
heartbeat()

# Manter a janela aberta
turtle.mainloop()
