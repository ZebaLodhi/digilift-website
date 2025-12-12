export interface PackageData {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  turnaround: string;
  description: string;
  features: string[];
  ideal: string[];
  notIncluded?: string[];
  addons?: string[];
  priceId: string;
}

export interface PackagesJson {
  packages: PackageData[];
  deliverables: string[];
  process: string[];
}
