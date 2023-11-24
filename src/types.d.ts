export interface Owner {
  login: string;
  repos_url: string;
}
export interface Repositories {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
  homepage?: string;
  created_at: string;
  owner: Owner;
}