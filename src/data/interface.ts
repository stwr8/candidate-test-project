export interface product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageSrc: null | string;
}

export interface categories {
  all: number;
  [key: string]: number;
}

export interface context {
  products: product[];
  filtered: product[];
  categories: categories;
  setCategories: React.Dispatch<React.SetStateAction<categories>>;
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
  setTriggerFetch: React.Dispatch<React.SetStateAction<number>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  editID: number | null;
  setEditID: React.Dispatch<React.SetStateAction<number | null>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
