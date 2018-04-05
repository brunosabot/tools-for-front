import { round } from "../math";

const psToRadiant = angle => (180 - angle) * Math.PI / 180;
const psToHShadow = (angle, distance) => Math.cos(angle) * distance;
const psToVShadow = (angle, distance) => Math.sin(angle) * distance;
const psToCssSpread = (size, spread) => size * (spread / 100);
const psToBlur = (size, cssSpread) => size - cssSpread;
const psToInset = inner => (inner ? " inset" : "");
const psToBoxShadowValue = (h, v, blur, cssSpread, color, inset) =>
  `${h}px ${v}px ${blur}px ${cssSpread}px ${color}${inset}`;
const psToBoxShadow = (h, v, blur, cssSpread, color, inset) =>
  `box-shadow: ${psToBoxShadowValue(h, v, blur, cssSpread, color, inset)};`;

export const getBoxShadow = (angle, distance, size, spread, inner, color) => {
  const radiant = psToRadiant(angle);
  const hShadow = round(psToHShadow(radiant, distance), 0);
  const vShadow = round(psToVShadow(radiant, distance), 0);
  const cssSpread = round(psToCssSpread(size, spread), 0);
  const blur = round(psToBlur(size, cssSpread), 0);

  const inset = psToInset(inner);

  return psToBoxShadow(hShadow, vShadow, blur, cssSpread, color, inset);
};

export const getBoxShadowValue = (angle, distance, size, spread, inner, color) => {
  const radiant = psToRadiant(angle);
  const hShadow = round(psToHShadow(radiant, distance), 0);
  const vShadow = round(psToVShadow(radiant, distance), 0);
  const cssSpread = round(psToCssSpread(size, spread), 0);
  const blur = round(psToBlur(size, cssSpread), 0);

  const inset = psToInset(inner);

  return psToBoxShadowValue(hShadow, vShadow, blur, cssSpread, color, inset);
};
