import { UserInterface } from "./UserInterface";

export interface GetPostsInterface {
    id: number,
    user: UserInterface,
    title: string,
    content: string
}