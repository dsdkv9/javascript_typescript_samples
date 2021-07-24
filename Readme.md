install tsc: // https://stackoverflow.com/questions/35369501/tsc-is-not-recognized-as-internal-or-external-command
     npm install -g typescript
     npm install -g @babel/core @babel/register @babel/preset-env
     npm install -g @babel/preset-typescript
     tsc -v
install ts-node: 
    npm install -g ts-node
    ts-node -v

tsconfig: 
    https://cameronnokes.com/blog/the-30-second-guide-to-publishing-a-typescript-package-to-npm/
    https://howtodoinjava.com/typescript/tsconfig-json/

tsc -init
https://code.visualstudio.com/api/advanced-topics/tslint-eslint-migration

Typescript doc: 
    https://www.tutorialsteacher.com/typescript
    https://www.typescriptlang.org/docs/handbook/2/modules.html
    https://www.koderhq.com/tutorial/typescript/

TS Export/ Import:
    https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html
    
ES6: https://www.javascripttutorial.net/es6/

Create TS dist: 


node_modules/.bin/tsc src/app.ts --outDir dist/
node dist/app.js