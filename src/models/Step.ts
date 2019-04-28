import { Model, Asset } from ".";

export interface Step extends Model {
  id: string;
  name: string;
  order: number;
  description: string;
  picture: Asset;
}