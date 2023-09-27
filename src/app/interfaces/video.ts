import { User } from "./user";

export interface Video {
  id: string;
  title: string;
  createdDate: string;
  author: User;
  previewUrl: string;
}
