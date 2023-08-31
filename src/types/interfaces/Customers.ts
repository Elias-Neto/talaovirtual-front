export interface Customer {
  id?: number;
  name: string;
  phone: string;
  address_id: string;
}

export interface Address {
  id?: number;
  city: string;
  state: string;
}