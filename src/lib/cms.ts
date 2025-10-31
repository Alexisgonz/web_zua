import homeData from '../content/home.json';

export async function getHomeData() {
  return homeData;
}

export async function getHeroData() {
  return homeData.hero;
}

export async function getValues() {
  return homeData.values;
}

export async function getFeatures() {
  return homeData.features;
}

export async function getBenefits() {
  return homeData.benefits;
}

export async function getBrands() {
  return homeData.brands;
}

export async function getTestimonials() {
  return homeData.testimonials;
}

export async function getCTA() {
  return homeData.cta;
}