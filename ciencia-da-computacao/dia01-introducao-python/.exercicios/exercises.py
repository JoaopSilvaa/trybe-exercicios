def max_number(number1: int, number2: int):
    return max(number1, number2)


def average(list: list):
    sum = int()
    for number in list:
        sum += number
    return sum / len(list)


def squared(n: int):
    for row in range(n):
        print(n * '*')


def bigger(listNames: list):
    biggerName = str()
    for name in listNames:
        if len(name) > len(biggerName):
            biggerName = name
    return biggerName


def qtd_tinte(wall: int):
    litros = wall / 3
    if litros <= 18:
        return 1, 80
    else:
        qtdLatas = litros // 18
        price = 80 * qtdLatas
        return qtdLatas, price


def type_of_triangle(side1: int, side2: int, side3: int):
    is_triangle = (
            side1 + side2 > side3 and
            side2 + side3 > side1 and
            side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"


def min_number(list: list):
    min = list[0]

    for number in list:
        if number < min:
            min = number
    return min
# def minimum(numbers):
#    return min(numbers)

# # ou mesmo
# minimum = min


def triangle(n: int):
    number = 0
    while number <= n:
        print(number * '*')
        number += 1
# def draw_triangle(n):
#     for row in range(1, n + 1):
#         print(row * '*')


def sum_numbers(n: int):
    sum = int()
    for number in range(1, n + 1):
        sum += number
    return sum
# def summation(limit):
#     return sum(range(1, limit + 1))


def fuel_price(type, liters):
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total


# print(max_number(1, 2))
# print(average([1, 2, 3]))
# squared(4)
# print(bigger(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
# print(qtd_tinte(240))
# print(type_of_triangle(3, 4, 5))
# print(min_number([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))
# print(triangle(5))
# print(sum_numbers(5))
# print(fuel_price("G", 30))
