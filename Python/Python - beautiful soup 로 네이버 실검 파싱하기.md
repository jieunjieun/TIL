# Python - beautiful soup 로 네이버 실검 파싱하기



```Python
import urllib
from bs4 import BeautifulSoup

targetUrl = "http://www.naver.com"
soup = BeautifulSoup(urllib.urlopen(targetUrl).read(),"html.parser")
title = soup.ol.find_all("li")

for i in range(0,10):
    print title[i].a['title']
```

