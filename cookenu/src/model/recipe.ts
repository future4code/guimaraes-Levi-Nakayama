export type recipe = {
    id: string,
    title: string,
    description: string,
    date: string,
    author_id: string
}

export interface RecipeInputDTO {
   
    title: string,
    description: string,
    date: string,
    author_id: string
    
 }