export type RootStackParamList = {
    categoriesScreen: {id: string};
    categoriesMealsScreen: {id: string, title: string, color: string};
    mealDetailScreen: {meal: MealsDataType, isFavMeal?: boolean};
};

export type RootDrawerParamList = {
    Meals: undefined
    Filter: {save: () => void}
};

export type CategoryDataType = {
    id: string; title: string; color: string
}

export type MealsDataType = {
    id: string;
    categoryIds: string[];
    title: string;
    affordability: string;
    complexity: string;
    imageUrl: string;
    duration: number;
    ingredients: string[];
    steps: string[];
    isGlutenFree: boolean;
    isVegan: boolean;
    isVegetarian: boolean;
    isLactoseFree: boolean;
}

export type filterDataType = {
    isGlutenFree: boolean;
      isLactoseFree: boolean;
      isVegan: boolean;
      isVegetarian: boolean;
}