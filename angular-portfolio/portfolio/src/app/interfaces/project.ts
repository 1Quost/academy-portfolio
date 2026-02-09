import { ICategory } from './category';

export interface IProject {
    id: number;
    name: string;
    status: string;
    categoryIds: number[];
    categories?: ICategory[];

    imageUrl: string;
    githubUrl: string;
    demoUrl: string;
}
