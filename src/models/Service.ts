import { Model, Asset } from ".";

export interface Service extends Model {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  cover: Asset;
  thumbnail: Asset;
}