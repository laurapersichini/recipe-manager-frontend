export interface Recipe {
    name: string;
    difficulty: string;
    time_required?: number;
    steps_list?: string[];
    description?: string;
    ingredients_list?: string[];
    image?: string;
  }