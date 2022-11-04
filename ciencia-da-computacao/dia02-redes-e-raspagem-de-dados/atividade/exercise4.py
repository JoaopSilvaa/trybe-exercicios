import requests
from parsel import Selector

response = requests.get("http://books.toscrape.com/catalogue/the-grand-design_405/index.html")
page = response.text
selector = Selector(page)
title = selector.css("h1::text").get()
price = selector.css(".product_main > .price_color::text").re_first(r"\d+\.\d{2}")
description = selector.css("#product_description ~ p::text").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]
img = "http://books.toscrape.com/catalogue/the-grand-design_405/index.html" + selector.css("#product_gallery img::attr(src)").get()
#exercise 5
availability = selector.css(".product_main .availability::text").re_first("\d")

print(title, price, description, img, availability, sep=",")