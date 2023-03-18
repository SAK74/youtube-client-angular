export interface ItemType {
  etag: string;
  id: string;
  kind: string;
  snippet: {
    categoryId: string;
    channelId: string;
    channelTitle: string;
    defaultAudioLanguage: string;
    description: string;
    liveBroadcastContent: string;
    localized: { title: string; description: string };
    publishedAt: string;
    tags: string[];
    thumbnails: {
      default: ThumbType;
      medium: ThumbType;
      hight: ThumbType;
      standart: ThumbType;
      maxres: ThumbType;
    };
    title: string;
    statistics: Record<
    | 'commentCount'
    | 'dislikeCount'
    | 'favoriteCount'
    | 'likeCount'
    | 'viewCount',
    string
    >;
  };
}

interface ThumbType {
  height: number;
  url: string;
  width: number;
}
