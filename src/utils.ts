export function parseClassNames(...names: any){
  let output = '';
  for (let name of names){
    if (typeof name === 'string'){
      output += `${name} `;
    }
  }
  return output.trim();
}