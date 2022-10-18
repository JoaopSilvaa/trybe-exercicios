def name_vertical():
    name = input("Digite seu nome: ")
    for removed_letters in range(len(name)):
        for index in range(len(name) - removed_letters):
            print(name[index], end="")
        print()


# name_vertical()

import random

def what_this():
    word = random.choice(["alo", "macarrao", "joao", "feijao"])
    scrambled_word = "".join(random.sample(word, len(word)))
    count = 0
    while count < 3:
        name = input(f"Qual é essa palavra? {scrambled_word} \n")
        if name == word:
            print("Parabéns, você acertou!")
            break
        else:
            count += 1

# what_this()

MAX_ATTEMPTS = 3


def retrieve_words(file):
    return [word.strip() for word in file]


def draw_secret_word(words):
    secret_word = random.choice(words)
    scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
    return secret_word, scrambled_word

def collect_guesses():
    guesses = []
    for attempt in range(MAX_ATTEMPTS):
        guess = input("Guess the word: ")
        guesses.append(guess)
    return guesses

def check_game_result(secret_word, guesses):
    if secret_word in guesses:
        print("You win")
    else:
        print("You lose")


if __name__ == "__main__":
    with open("words.txt") as file:
        words = retrieve_words(file)
    secret_word, scrambled_word = draw_secret_word(words)
    print(f"Scrambled word is {scrambled_word}")
    guesses = collect_guesses()
    check_game_result(secret_word, guesses)


    