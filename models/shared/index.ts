// export type ResponseModel<T> =
//   | {
//       statusCode: number;
//       msg: string;
//       data: T;
//     }
//   | undefined;
export type ResponseModel<T> = {
  loading: boolean;
  refresh: () => void;
  data?: T;
};

export type ListModel<T> = {
  total: number;
  list: T[];
};
