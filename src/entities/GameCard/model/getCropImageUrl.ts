export const getCropImageUrl = (url: string): string => {
  const target: string = 'media/';
  const index: number = url.indexOf(target) + target.length;
  return url.slice(0, index) + `crop/600/400/` + url.slice(index);
};
