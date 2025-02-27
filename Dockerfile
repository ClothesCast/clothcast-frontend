# 1️⃣ Node.js 환경에서 빌드 수행
FROM node:18 AS build

# 2️⃣ 작업 디렉토리 설정
WORKDIR /app

# 3️⃣ package.json과 package-lock.json 복사 후 의존성 설치
COPY package.json package-lock.json ./
RUN npm install

# 4️⃣ Node.js 내장 모듈을 TypeScript에서 사용할 수 있도록 설정
RUN npm install --save-dev @types/node

# 5️⃣ 환경 변수 설정 (GitHub Actions에서 전달)
ARG GOOGLE_MAPS_API_KEY

# 6️⃣ Vite에서 사용할 환경 변수 파일 생성
RUN echo "VITE_GOOGLE_MAPS_API_KEY=$GOOGLE_MAPS_API_KEY" > .env.local

# 7️⃣ 전체 소스 코드 복사
COPY . .

# 8️⃣ 빌드 실행 (dist 폴더 생성)
RUN npm run build

# 9️⃣ Nginx를 사용하여 배포
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]