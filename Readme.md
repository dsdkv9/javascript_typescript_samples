install tsc: // https://stackoverflow.com/questions/35369501/tsc-is-not-recognized-as-internal-or-external-command
     npm install -g typescript
     tsc -v
install ts-node: 
    npm install -g ts-node
    ts-node -v

tsc -init
https://code.visualstudio.com/api/advanced-topics/tslint-eslint-migration

Typescript doc: https://www.typescripttutorial.net/

ES6: https://www.javascripttutorial.net/es6/

Create TS dist: 


node_modules/.bin/tsc src/app.ts --outDir dist/
node dist/app.js