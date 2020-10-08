export interface PaypalOrdersApiCreateOrderRequestBody {
  intent: 'CAPTURE';
  payer: {
    name: {
      given_name: string;
      surname: string;
    };
    email_address: string;
    payer_id?: string;
    phone?: {
      phone_number: {
        national_number: string;
      };
    };
    birth_date?: string;
    address: {
      address_line_1: string;
      address_line_2?: string;
      admin_area_1?: string;
      admin_area_2: string;
      postal_code: string;
      country_code: 'DE';
    };
  };
  purchase_units: {
    reference_id?: string;
    amount: {
      currency_code: 'EUR';
      value: string;
      breakdown?: {
        item_total: {
          currency_code: 'EUR';
          value: string;
        };
        shipping: {
          currency_code: 'EUR';
          value: string;
        };
        handling: {
          currency_code: 'EUR';
          value: string;
        };
        tax_total: {
          currency_code: 'EUR';
          value: string;
        };
        insurance: {
          currency_code: 'EUR';
          value: string;
        };
        shipping_discount: {
          currency_code: 'EUR';
          value: string;
        };
        discount: {
          currency_code: 'EUR';
          value: string;
        };
      };
    };
    payee?: {
      email_address: string;
      merchant_id: string;
    };
    description: string;
    custom_id?: string;
    invoice_id?: string;
    soft_descriptor?: string;
    items?: {
      name: string;
      unit_amount: {
        currency_code: 'EUR';
        value: string;
      };
      tax: {
        currency_code: 'EUR';
        value: string;
      };
      quantity: string;
      description: string;
      sku?: string;
      category: 'PHYSICAL_GOODS';
    }[];
    shipping: {
      name: {
        full_name: string;
      };
      address: {
        address_line_1: string;
        address_line_2?: string;
        admin_area_1?: string;
        admin_area_2: string;
        postal_code: string;
        country_code: 'DE';
      };
    };
  }[];
  application_context: {
    brand_name: "programmers' print";
    locale: 'de-DE';
    landing_page: 'LOGIN';
    shipping_preference: 'SET_PROVIDED_ADDRESS';
    user_action: 'PAY_NOW';
  };
}
