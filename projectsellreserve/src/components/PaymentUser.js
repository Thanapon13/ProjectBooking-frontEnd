export default function PaymentUser({
  PaymentId,
  creditCardNumber,
  expirationDate,
  cvv,
  zipCode,
  country
}) {
  return (
    <>
      <div className="flex flex-grow">
        <div className="font-bold">
          {PaymentId && <h1>PaymentId</h1>}
          <h1>Credit Card Number:</h1>
          <h1>Expiration Date:</h1>
          <h1>CVV:</h1>
          <h1>Zip Code:</h1>
          <h1>Country:</h1>
        </div>
        <div>
          <h1>{PaymentId}</h1>
          <h1>{creditCardNumber}</h1>
          <h1>{expirationDate}</h1>
          <h1>{cvv}</h1>
          <h1>{zipCode}</h1>
          <h1>{country}</h1>
        </div>
      </div>
    </>
  );
}
