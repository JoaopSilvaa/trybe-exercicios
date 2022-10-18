def read_name():
    name = input("Digite seu nome: ")
    for letter in name:
        print(letter)

# read_name()


def natural_numbers():
    numbers = input("Digite seus números com separação de espaço: ")
    list_numbers = numbers.split(" ")
    sum = int()
    
    for number in list_numbers:
        if not number.isdigit():
            print(f"Erro ao somar valores, {number} é um valor inválido")
        else:
            sum += int(number)

    print(f"A soma dos valores válidos é: {sum}")

# natural_numbers()

# leitura de arquivos com contexto
data_students = []
with open("arquivo.txt", mode="r") as grades_file:
    for line in grades_file:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            data_students.append(student_grade[0] + "\n")

with open("data_students.txt", mode="w") as data_students_file:
    data_students_file.writelines(data_students)

