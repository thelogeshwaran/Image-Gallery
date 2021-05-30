export type Doc = {
  id: string;
  liked: boolean;
  likes: number;
  url: string;
};

export type PersonalDoc = {
  id: string;
  url: string;
  userId: string;
};
type Url = {
  full : string,
  raw : string,
  regular : string,
  small: string,
  thumbs: string
}

export type SearchResult = {
  alt_description: string,
  blur_hash : string,
  categories: [],
  color: string,
  created_at: string,
  current_user_collections: string,
  description:string,
  height: number,
  id:string,
  liked_by_user:boolean,
  likes: number,
  links: {},
  promoted_at: string,
  sponsorship: any,
  tags: []
  updated_at: string,
  urls: Url,
  user: {}
  width:number
};


export type ResultData ={
  results : SearchResult[],
  total:number,
  total_pages: number
}