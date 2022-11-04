import requests
from parsel import Selector

response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
print(selector)

#seletor css
# acessando todos tag img com class thumbnail por meio de um array
selector.css('img thumbnail').getall()

# acessando a primeira tag img com class thumbnail por meio de um array
selector.css("img thumbnail").get()

# pegar o primeiro elemento filho de uma div
selector.css("div.image_container a").get()

#pegar o atributo específico
thumb_url = selector.css("div.image_container a::attr(href)").get()

#acessando a partir de um atributo
thumbnail = requests.get("http://books.toscrape.com/" + thumb_url)
thumbnail_selector = Selector(text=thumbnail.text)
book_title = thumbnail_selector.css("div.productt_main h1")
