FROM oven/bun:latest
WORKDIR /app

COPY package*.json ./
RUN bun install --silent
RUN echo "Packages successfully installed"

COPY . ./

CMD ["bun", "--watch", "run", "dev"]


FROM oven/bun:latest
WORKDIR /app

COPY package*.json ./
RUN bun install --silent
RUN echo "Packages successfully installed"

COPY . ./

CMD ["bun", "--watch", "run", "dev"]

