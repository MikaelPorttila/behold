import { InjectionData } from "./types/injection-data";

const image = document.getElementById("Image") as HTMLImageElement;
const injectedData = (window as any).behold as InjectionData;

if (image && injectedData?.file?.base64File?.data !== undefined) {
  const { mime, base64File } = injectedData.file;
  image.src = `data:${mime};base64, ${base64File.data}`;
}

alert(injectedData);