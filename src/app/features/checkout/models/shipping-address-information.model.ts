export interface ShippingAddressInformation {
  title: string;
  name: {
    firstName: string;
    lastName: string;
  };
  address: {
    street: string;
    houseNumber: number;
    addition?: string;
    city: string;
    postCode: string;
    country: string;
  };
}
