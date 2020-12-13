export const isFeatureOn = (name: any): boolean => {
  let obj: any = {
    'showForm': true
  };
  return obj[name];
}