export interface Inputs {
  co2: number;
  def: number;
  ren: number;
  pol: number;
  pop: number;
}

export interface Result {
  index: number;
  tempDrift: number;
  biodiversity: number;
  seaLevel: number;
}

export function computeSymbiosis(vals: Inputs): Result {
  const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

  const co2 = clamp(vals.co2, 0, 100);
  const def = clamp(vals.def, 0, 100);
  const pop = clamp(vals.pop, -20, 80);
  const ren = clamp(vals.ren, 0, 100);
  const pol = clamp(vals.pol, 0, 100);

  const p_co2 = co2 * 0.32;
  const p_def = def * 0.22;
  const p_pop = pop > 0 ? pop * 0.1 : 0;
  const base_positive = ren * 0.28 + pol * 0.18;

  const raw = 50 + base_positive * 0.24 - p_co2 * 0.35 - p_def * 0.28 - p_pop * 0.4;
  const index = Math.round(clamp(raw, 0, 100));

  const tempDrift = Number(((co2 / 100) * 2.5).toFixed(2));
  const biodiversity = Math.round(50 + (index - 50) * 0.6);
  const seaLevel = Number(((def / 100) * 0.15 + (co2 / 100) * 0.1).toFixed(3));

  return { index, tempDrift, biodiversity, seaLevel };
}
