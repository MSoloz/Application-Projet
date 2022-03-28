
import * as fs from 'fs';
import * as path from 'path';

export function readHtmlFromFile(filename:string)
{

    let globalPath = path.join(__dirname, '../../src/');
    
    return fs.readFileSync(globalPath+'Views/'+filename,'utf8');
    
}