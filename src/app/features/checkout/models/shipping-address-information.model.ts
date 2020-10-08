export interface ShippingAddressInformation {
  name: {
    title: string;
    firstName: string;
    lastName: string;
  };
  address: {
    street: string;
    houseNumber: string;
    addition?: string;
    city: string;
    postCode: string;
    country: string;
  };
}
