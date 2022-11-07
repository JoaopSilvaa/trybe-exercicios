from selenium import webdriver

# Importa o By
from selenium.webdriver.common.by import By

firefox = webdriver.Firefox()

firefox.get("https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/")

paragraphs = firefox.find_elements(
        By.TAG_NAME, "p"
    )

for p in paragraphs:
    print(p.text)


