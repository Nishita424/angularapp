export interface User {
  fName: string;
  lName: string;
  age?: number;
  address?: {
    street: string;
    city: string;
    state: string;
  };
  isActive?: boolean;
  registered?: any;
}
