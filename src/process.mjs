import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
const exec=promisify(execFile);
export function runCommand(command,args,options={}){
 if(process.platform!=='win32')return exec(command,args,{...options,shell:false});
 // PowerShell resolves both native executables and npm .cmd/.ps1 shims.
 // Every argument is a literal, single-quoted string; never interpolate shell syntax.
 const quote=s=>"'"+String(s).replaceAll("'","''")+"'";
 const script=`$ErrorActionPreference = 'Stop'; $tool = Get-Command ${quote(command)} -ErrorAction Stop; if ($tool.Source -match '\\.(cmd|bat)$') { throw 'Use a native executable or PowerShell shim for this CLI' }; & $tool.Source ${args.map(quote).join(' ')}; if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }`;
 return exec('powershell.exe',['-NoLogo','-NoProfile','-NonInteractive','-EncodedCommand',Buffer.from(script,'utf16le').toString('base64')],{...options,shell:false,windowsHide:true});
}
