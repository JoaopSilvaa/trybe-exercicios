import requests
import time

request = requests.get("https://www.betrybe.com") 

# status da requisição
request.status_code

# headers da requisição
request.headers

# html da requisição
request.text

request = requests.post("http://httpbin.org/post", data="some content")

# resposta em string do post
request.text

#testando a quantidade de limite de requisições
for _ in range(5):
    response = requests.get("https://www.cloudflare.com/rate-limit-test/")
    print(response.status_code)
    #colocando 6 segundos antes de fazer uma nova requisição
    time.sleep(6)

# testando exceções no site
try:
    reponse = requests.get("http://httpbin.org/delay/10", timeout=2)
except requests.Timeout:
    response = requests.get("http://httpbin.org/delay/10", timeout=15)
finally:
    print(response.status_code)