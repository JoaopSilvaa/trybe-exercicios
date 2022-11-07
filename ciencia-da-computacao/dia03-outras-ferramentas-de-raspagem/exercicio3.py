from selenium import webdriver

from selenium.webdriver.common.by import By

from selenium.common.exceptions import NoSuchElementException

firefox = webdriver.Firefox()


def scrape(url):
    firefox.get(url)

    all_posts = []

    for posts in firefox.find_elements(By.CLASS_NAME, "post-outer"):
        new_item = dict()
        post = posts.find_elements(By.CLASS_NAME, "post-inner")[1]

        new_item["title"] = (
            post.find_element(By.TAG_NAME, "header")
            .find_element(By.TAG_NAME, "h2")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("innerHTML")
        )

        new_item["link"] = (
            post.find_element(By.TAG_NAME, "header")
            .find_element(By.TAG_NAME, "h2")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )

        new_item["description"] = (
            post.find_element(By.TAG_NAME, "div")
            .find_element(By.TAG_NAME, "div")
            .get_attribute("innerHTML")
        )

        all_posts.append(new_item)
    return all_posts

print(scrape("https://diolinux.com.br/"))
