import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  selector: false,
  customizer: false,
  currentItem: "tshirt",
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
});

export default state;