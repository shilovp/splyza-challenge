import { User } from "./user";
import { Video } from "./video";

export interface Reaction {
  videoId: string;
  type: VideoReactionType;
  timeframe: number;
  author: User;
  video: Video;
  postedDate?: Date;
}

export enum VideoReactionType {
  star = 'star',
  snapshot = 'snapshot'
}
