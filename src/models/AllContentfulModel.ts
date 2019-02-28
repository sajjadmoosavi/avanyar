export interface AllContentfulModel<T> {
  edges: { node: T }[];
  totalCount: number;
}