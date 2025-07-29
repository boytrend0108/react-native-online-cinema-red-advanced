export type TypeRootStackParamList = {
  Home: undefined;
  Auth: undefined;
} & TypeRootStackAdminList

export type TypeRootStackAdminList = {
  Admin: undefined
}

export interface IRoute {
  name: keyof TypeRootStackParamList;
  isAdmin?: boolean;
  component: React.ComponentType;
}