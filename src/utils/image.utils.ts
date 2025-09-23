/* eslint-disable @typescript-eslint/no-explicit-any */

const importImages = (modules: Record<string, any>): string[] => {
  return Object.values(modules).map((mod: any) => mod.default);
};

interface ImageRecord {
  imageIcons: Record<string, { default: string }>;
  path: string;
}

enum ImageType {
  MainImages = "mainImages",
  LanguageImages = "languageImages",
  SoftwareImages = "softwareImages",
  OrganisationImages = "orgImages",
  EducationImages = "eduImages",
}

const ImageCollections: Record<ImageType, ImageRecord> = {
  [ImageType.MainImages]: {
    imageIcons: import.meta.glob("@/assets/projects/*/main.png", {
      eager: true,
    }),
    path: "/projects/",
  },
  [ImageType.LanguageImages]: {
    imageIcons: import.meta.glob("@/assets/languages/*.png", {
      eager: true,
    }),
    path: "/languages/",
  },
  [ImageType.SoftwareImages]: {
    imageIcons: import.meta.glob("@/assets/software/*.png", {
      eager: true,
    }),
    path: "/software/",
  },
  [ImageType.OrganisationImages]: {
    imageIcons: import.meta.glob("@/assets/orgs/*.png", {
      eager: true,
    }),
    path: "/orgs/",
  },
  [ImageType.EducationImages]: {
    imageIcons: import.meta.glob("@/assets/education/*.png", {
      eager: true,
    }),
    path: "/education/",
  },
};

// Function to convert imageIcons into a Record of key → image path
const imageMap = (type: ImageType): Record<string, string> => {
  const record = ImageCollections[type];
  return Object.fromEntries(
    Object.entries(record.imageIcons).map(([path, mod]) => {
      const projectKey = path
        .split(record.path)[1]
        .split("/")[0]
        .split(".png")[0];
      return [projectKey, mod.default];
    })
  );
};

const mainImageMap: Record<string, string> = imageMap(ImageType.MainImages);

const languageMap: Record<string, string> = imageMap(ImageType.LanguageImages);

const softwareMap: Record<string, string> = imageMap(ImageType.SoftwareImages);

const organisationMap: Record<string, string> = imageMap(
  ImageType.OrganisationImages
);
const educationMap: Record<string, string> = imageMap(
  ImageType.EducationImages
);

export {
  mainImageMap,
  languageMap,
  softwareMap,
  organisationMap,
  educationMap,
  importImages,
};
