import json

# lendo a partir de um texto
with open("pokemons.json") as file:
    content = file.read()
    pokemons = json.loads(content)["results"]

print(pokemons[0])


# lendo a partir do arquivo direto
with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

print(pokemons[0])


# escrita no JSON com texto
with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

with open("grass_pokemons.json", mode="w") as file:
    json_to_write = json.dumps(
        grass_type_pokemons
    )
    file.write(json_to_write)


# escrita direta
with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

with open("grass_pokemons.json", mode="w") as file:
    json.dump(grass_type_pokemons, file)