from selenium import webdriver

# Importa o By
from selenium.webdriver.common.by import By

firefox = webdriver.Firefox()

firefox.get("https://quotes.toscrape.com/")

quote = firefox.find_element(
        By.CLASS_NAME, "quote"
    ).find_element(
        By.TAG_NAME, "span"
    ).get_attribute("innerHTML")

print(quote)

