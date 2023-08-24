import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  }
];

export const customizableItems = [
  {
    itemTitle: "T-shirt",
    itemDescription: "Customize the t-shirt of your dreams.",
    itemModel: "tshirt",
    fov: 25
  },
  {
    itemTitle: "Shoes",
    itemDescription: "Have you ever found the perfect shoes? Design them by yourself!",
    itemModel: "shoes",
    fov: 60
  }
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
