export const generateInvoiceHTML = (invoice: any) => {
  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("fr-MA");

  const subtotal = Number(invoice.subtotal);
  const discount = Number(invoice.discount);
  const total = Number(invoice.totalAmount);
  const paid = Number(invoice.paidAmount);
  const remaining = Number(invoice.remainingAmount);

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

      .invoice-title {
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
        text-align: left;
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

      .total-final {
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
    </style>
  </head>

  <body>

    <div class="header">
      <div>
        <h2>FACTURE</h2>
        <p><strong>N°:</strong> ${invoice.invoiceNumber}</p>
        <p><strong>Date:</strong> ${formatDate(invoice.issueDate)}</p>
        <p><strong>Échéance:</strong> ${formatDate(invoice.dueDate)}</p>
      </div>

      <div>
        <p><strong>Status:</strong> ${invoice.status}</p>
      </div>
    </div>

    <div class="section">
      <h3>Client</h3>
      <p>${invoice.customer.user.firstName} ${invoice.customer.user.lastName}</p>
      <p>${invoice.customer.user.address}</p>
      <p>${invoice.customer.city}, ${invoice.customer.country}</p>
      <p>Email: ${invoice.customer.user.email}</p>
      <p>Téléphone: ${invoice.customer.user.phone}</p>
      <p>ICE: ${invoice.customer.ice}</p>
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

        ${invoice.invoiceLines
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
        <td>Remise:</td>
        <td class="right">${discount.toFixed(2)} MAD</td>
      </tr>
      <tr class="total-final">
        <td>Total:</td>
        <td class="right">${total.toFixed(2)} MAD</td>
      </tr>
      <tr>
        <td>Payé:</td>
        <td class="right">${paid.toFixed(2)} MAD</td>
      </tr>
      <tr>
        <td>Reste:</td>
        <td class="right">${remaining.toFixed(2)} MAD</td>
      </tr>
    </table>

    ${
      invoice.notes
        ? `<div class="section"><strong>Notes:</strong><p>${invoice.notes}</p></div>`
        : ""
    }

    <div class="footer">
      Document généré automatiquement — ${new Date().toLocaleDateString()}
    </div>

  </body>
  </html>
  `;
};