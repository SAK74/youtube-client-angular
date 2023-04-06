export interface SearchType {
  kind: string;
  id: Record<'kind' | 'videoId' | 'channelId' | 'playlistId', string>;
}
