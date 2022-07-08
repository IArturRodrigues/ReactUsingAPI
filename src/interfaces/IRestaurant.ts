export interface IFood {
   id: number;
   nome: string;
   tag: string;
   imagem: string;
   descricao: string;
   restaurante: number;
}

export interface IRestaurant {
   id: number;
   nome: string;
   pratos: IFood[];
}
