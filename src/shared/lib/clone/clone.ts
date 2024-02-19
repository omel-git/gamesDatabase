export function clone(o: any): any {
  return JSON.parse(JSON.stringify(o));
}
