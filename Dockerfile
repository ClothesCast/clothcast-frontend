# 1. Node.js 환경에서 빌드 수행
FROM node:18 AS build

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. package.json과 package-lock.json 복사 후 의존성 설치
COPY package.json package-lock.json ./
RUN npm install

# 4. Node.js 내장 모듈을 TypeScript에서 사용할 수 있도록 설정
RUN npm install --save-dev @types/node

# 5. 전체 소스 코드 복사
COPY . .

# 6. 빌드 실행 (dist 폴더 생성)
RUN npm run build

# 7. 경량 Nginx로 배포
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]