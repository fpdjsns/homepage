# withhamIT 홈페이지

ver 1. 그림 올리는 게시판.
only Read만.
쓰기, 수정, 삭제는 추후 구현.

# Deploy
- port : 8080

### Development
```docker
docker build --build-arg script=build-dev -t homepage .
docker run -it -p 8080:80 --rm --name homepage-1.0.0 homepage
```

### Production
```docker
docker build --build-arg script=build -t homepage .
docker run -it -p 8080:80 --rm --name homepage-1.0.0 homepage
```