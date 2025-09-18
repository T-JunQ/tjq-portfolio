/* eslint-disable @typescript-eslint/no-explicit-any */

const importImages = (modules: Record<string, any>): string[] => {
  return Object.values(modules).map((mod: any) => mod.default);
};

// Project main images import
const mainImages = import.meta.glob("@/assets/projects/*/main.png", {
  eager: true,
});

const mainImageMap: Record<string, string> = Object.fromEntries(
  Object.entries(mainImages).map(([path, mod]: [string, any]) => {
    const projectKey = path.split("/projects/")[1].split("/")[0];
    return [projectKey, mod.default];
  })
);

// Technologies images import
const languageIcons = import.meta.glob("@/assets/languages/*.png", {
  eager: true,
});

const languageMap: Record<string, string> = Object.fromEntries(
  Object.entries(languageIcons).map(([path, mod]: [string, any]) => {
    const name = path.split("/languages/")[1].replace(".png", "");
    return [name, mod.default];
  })
);

// Software images import
const softwareIcons = import.meta.glob("@/assets/software/*.png", {
  eager: true,
});

const softwareMap: Record<string, string> = Object.fromEntries(
  Object.entries(softwareIcons).map(([path, mod]: [string, any]) => {
    const name = path.split("/software/")[1].replace(".png", "");
    return [name, mod.default];
  })
);

export { mainImageMap, languageMap, softwareMap, importImages };
