#verifica se acertou o navio
entrada = [ 
            0 0 0 0 1
            0 0 0 0 1
            1 1 1 1 1
            0 0 0 1 0]

#resultado para (0, 4) = True
#resultado para (1, 1) = False

def battleship(grid, line, column):
    if(grid[line][column] == 1): return True

    return False