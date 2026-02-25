export const generateQuoteHTML = (quote: any) => {
  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("fr-MA");

  const subtotal = Number(quote.subtotal);
  const tax = Number(quote.taxAmount);
  const total = Number(quote.totalAmount);

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8" />
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 40px;
        color: #333;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .title {
        font-size: 28px;
        font-weight: bold;
      }

      .section {
        margin-top: 25px;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
      }

      th, td {
        border: 1px solid #ddd;
        padding: 8px;
      }

      th {
        background-color: #f2f2f2;
      }

      .right {
        text-align: right;
      }

      .totals {
        margin-top: 20px;
        width: 40%;
        margin-left: auto;
      }

      .totals td {
        border: none;
        padding: 5px;
      }

      .final {
        font-size: 18px;
        font-weight: bold;
      }

      .status {
        margin-top: 10px;
        font-weight: bold;
      }

      .footer {
        margin-top: 40px;
        font-size: 12px;
        color: #777;
      }

      .draft {
        color: red;
        font-size: 16px;
        font-weight: bold;
      }
    </style>
  </head>

  <body>

    <div class="header">
      <div>
        <div class="title">DEVIS</div>
        <p><strong>N°:</strong> ${quote.quoteNumber}</p>
        <p><strong>Date:</strong> ${formatDate(quote.issueDate)}</p>
        <p><strong>Valable jusqu'au:</strong> ${formatDate(
          quote.validityDate
        )}</p>
      </div>

      <div>
        <p class="status">Statut: ${quote.status}</p>
        ${quote.status === "DRAFT" ? `<div class="draft">BROUILLON</div>` : ""}
      </div>
    </div>

    <div class="section">
      <h3>Client</h3>
      <p>${quote.customer.user.firstName} ${
    quote.customer.user.lastName
  }</p>
      <p>${quote.customer.user.address}</p>
      <p>${quote.customer.city}, ${quote.customer.country}</p>
      <p>Email: ${quote.customer.user.email}</p>
      <p>Téléphone: ${quote.customer.user.phone}</p>
      <p>ICE: ${quote.customer.ice}</p>
    </div>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Description</th>
          <th>Quantité</th>
          <th>Prix Unitaire</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>

        ${quote.quoteLines
          .map((line: any, index: number) => {
            const quantity = Number(line.quantity);
            const unitPrice = Number(line.unitPrice);
            const totalLine = quantity * unitPrice;

            const description =
              line.description ||
              line.product?.item?.name ||
              "Service";

            return `
              <tr>
                <td>${index + 1}</td>
                <td>${description}</td>
                <td class="right">${quantity}</td>
                <td class="right">${unitPrice.toFixed(2)} MAD</td>
                <td class="right">${totalLine.toFixed(2)} MAD</td>
              </tr>
            `;
          })
          .join("")}

      </tbody>
    </table>

    <table class="totals">
      <tr>
        <td>Sous-total:</td>
        <td class="right">${subtotal.toFixed(2)} MAD</td>
      </tr>
      <tr>
        <td>TVA:</td>
        <td class="right">${tax.toFixed(2)} MAD</td>
      </tr>
      <tr class="final">
        <td>Total:</td>
        <td class="right">${total.toFixed(2)} MAD</td>
      </tr>
    </table>

    ${
      quote.notes
        ? `<div class="section"><strong>Notes:</strong><p>${quote.notes}</p></div>`
        : ""
    }

    <div class="footer">
      Ce devis n'a pas valeur de facture.
      <br />
      Généré le ${new Date().toLocaleDateString()}
    </div>

  </body>
  </html>
  `;
};