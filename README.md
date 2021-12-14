# lonelyfoodie-web

고독한 시식가 프론트엔드 개발 레포지토리

(2021/10/20~2021/12/10)




## Setting up environment variable

- https://developers.kakao.com/ 에서 개발자 계정으로 로그인합니다.
- 등록한 애플리케이션의 JavaScript 키와 REST API 키를 복사합니다.
- 루트에 아래와 같은 내용으로 `.env` 파일을 만듭니다.

```
KAKAO_KEY=복사한_JavaScript_키
REST_API_KEY=복사한_REST_API_키
REDIRECT_URI=http://localhost:8080/oauth
```

- <u><b>`복사한_JavaScript_키`와 `복사한_REST_API_키`가 유출되지 않도록 주의하세요.</b></u>




## Getting started with yarn

```bash
git clone https://github.com/LonelyFoodie/lonelyfoodie-web.git
cd lonelyfoodie-web
yarn install
yarn start
```

Go to http://localhost:8080/

