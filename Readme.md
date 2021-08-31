install tsc: // https://stackoverflow.com/questions/35369501/tsc-is-not-recognized-as-internal-or-external-command
     npm install -g typescript
     npm install -g @babel/core @babel/register @babel/preset-env
     npm install -g @babel/preset-typescript
     tsc -v
install ts-node: 
    npm install -g ts-node
    ts-node -v

TypeScript tutorial:
    namespace: 
        https://levelup.gitconnected.com/namespaces-in-typescript-7bab2fa31d75
        https://www.typescriptlang.org/docs/handbook/namespaces.html
    Training: https://www.tutorialsteacher.com
        TODO: Project compilation

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
    https://newbedev.com/how-to-export-a-class-instance-in-typescript
    https://betterprogramming.pub/a-handy-guide-to-export-and-import-modules-for-javascript-and-typescript-6cff8e47d554
    
ES6: https://www.javascripttutorial.net/es6/

Create TS dist: 


node_modules/.bin/tsc src/app.ts --outDir dist/
node dist/app.js