import {scaffold} from '../src/library.mjs';
console.log(JSON.stringify(scaffold({name:process.argv[2],projectIds:process.argv.slice(3)}),null,2));
