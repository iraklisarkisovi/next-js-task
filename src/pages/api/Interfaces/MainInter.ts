export interface Recipe {
  id: number;
  title: string;
  difficulty: string;  
  prepTime: number;  
  cookTime: number;  
  servings: number;
  ingredients: string[];
  instructions: string[];
  cuisine: string;
  imageUrl: string;
  tags: string[];
}
