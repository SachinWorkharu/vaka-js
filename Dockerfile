FROM node:22

# COPY applications/web3-app/package.json /app/applications/web3-app/package.json
COPY packages /app/packages
COPY package.json yarn.lock tsconfig.json /app/

WORKDIR /app

RUN yarn install


COPY .storybook /app/.storybook
WORKDIR /app

ENTRYPOINT ["/usr/bin/bash", "-c"]

CMD [ "yarn install && yarn dev" ]