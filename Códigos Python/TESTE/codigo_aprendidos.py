def aprender_stack():
    #Como funciona um stack em POO
    stack = []

        #Coloca o elemento no Topo
    def push(val):
            stack.append(val)

        #Remove o elemento do topo
    def pop():
            val = stack[-1]
            del stack[-1]
            return val

        #Exemplo dentro do ensinamento
    push(3)
    push(2)
    push(1)

    print(pop())
    print(pop())
    print(pop())
