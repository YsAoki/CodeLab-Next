export type QiitaTag = {
  name: string;
  versions: string[];
};

export type QiitaGroup = {
  created_at: string;
  id: number;
  name: string;
  private: boolean;
  updated_at: string;
  url_name: string;
};

/**QiitaAPIを実行した際に返却されるレスポンス(ユーザー情報) */
export type QiitaUser = {
  description: string;
  facebook_id: string | null;
  followees_count: number;
  followers_count: number;
  github_login_name: string | null;
  id: string;
  items_count: number;
  linkedin_id: string | null;
  location: string | null;
  name: string | null;
  organization: string | null;
  permanent_id: number;
  profile_image_url: string;
  team_only: boolean;
  twitter_screen_name: string | null;
  website_url: string | null;
};

/** QiitaAPIを実行した際に返却されるレスポンス(記事の詳細情報) */
export type QiitaArticle = {
  rendered_body: string;
  body: string;
  coediting: boolean;
  comments_count: number;
  created_at: string;
  group: Group | null;
  id: string;
  likes_count: number;
  private: boolean;
  tags: Tag[];
  title: string;
  updated_at: string;
  url: string;
  user: User;
};
