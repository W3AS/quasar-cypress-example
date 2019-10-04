FROM rafaeldias97/quasar:firsttry

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install --quiet

# RUN npm install --save-dev cypress

COPY . .

RUN quasar build

ENTRYPOINT ["quasar", "serve", "./dist/spa"]

EXPOSE 4000

# CMD $(npm bin)/cypress run

 
