import { Request, Response } from 'express';
import * as functions from 'firebase-functions';
import * as paypal from '@paypal/checkout-server-sdk';
import { PaypalOrdersApiCreateOrderRequestBody } from 'src/models/paypal-orders-api-create-order-request-body';
import { ApiCreateOrderRequestBody } from 'src/models/api-create-order-request-body';

const environment = new paypal.core.SandboxEnvironment(
  functions.config().paypal.publickey,
  functions.config().paypal.privatekey
);
const client = new paypal.core.PayPalHttpClient(environment);

export const createOrder = async (req: Request, res: Response) => {
  const request = new paypal.orders.OrdersCreateRequest();
  console.log(JSON.stringify(req.body));
  request.requestBody(parsePaypalOrdersApiCreateOrderRequestBody(req.body));

  try {
    const response = await client.execute(request);
    res.status(200).json({
      orderID: response.result.id,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

const parsePaypalOrdersApiCreateOrderRequestBody = (
  apiCreateOrderRequestBody: ApiCreateOrderRequestBody
): PaypalOrdersApiCreateOrderRequestBody => {
  const {
    emailInformation,
    addressInformation: {
      shippingAddressInformation,
      billingAddressInformation,
    },
  } = apiCreateOrderRequestBody;
  return {
    intent: 'CAPTURE',
    payer: {
      name: {
        given_name: billingAddressInformation.name.firstName,
        surname: billingAddressInformation.name.lastName,
      },
      email_address: emailInformation.email,
      address: {
        address_line_1: billingAddressInformation.address.street,
        address_line_2: billingAddressInformation.address.addition,
        admin_area_2: billingAddressInformation.address.city,
        postal_code: billingAddressInformation.address.postCode,
        country_code: 'DE',
      },
    },
    purchase_units: [
      {
        amount: {
          currency_code: 'EUR',
          value: '1000',
        },
        description: 'Das hier ist ein super angebot',
        shipping: {
          name: {
            full_name: `${shippingAddressInformation.name.firstName} ${shippingAddressInformation.name.lastName}`,
          },
          address: {
            address_line_1: shippingAddressInformation.address.street,
            address_line_2: shippingAddressInformation.address.addition,
            admin_area_2: shippingAddressInformation.address.city,
            postal_code: shippingAddressInformation.address.postCode,
            country_code: 'DE',
          },
        },
      },
    ],
    application_context: {
      brand_name: "programmers' print",
      locale: 'de-DE',
      landing_page: 'LOGIN',
      shipping_preference: 'SET_PROVIDED_ADDRESS',
      user_action: 'PAY_NOW',
    },
  };
};

export const captureOrder = async (req: Request, res: Response) => {
  const orderID = req.body.orderID;
  const request = new paypal.orders.OrdersCaptureRequest(orderID);
  request.requestBody({});
  try {
    await client.execute(request);
    res.status(200).end();
  } catch (err) {
    res.status(500).send(err);
  }
};
