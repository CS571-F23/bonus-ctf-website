build
```
npm run build
docker build . -t ctnelson1997/cs571-f23-bonus
docker push ctnelson1997/cs571-f23-bonus
```


deploy
```
docker pull ctnelson1997/cs571-f23-bonus
docker run --name=cs571_f23_bonus  -d --restart=always -p 38823:80 ctnelson1997/cs571-f23-bonus
```
