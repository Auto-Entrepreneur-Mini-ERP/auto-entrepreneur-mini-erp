INSERT INTO `users` (`id`, `email`, `firstName`, `lastName`, `phone`, `address`, `creationDate`, `updateDate`) VALUES
('a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d', 'ahmed.bennani@example.ma', 'Ahmed', 'Bennani', '+212612345678', '45 Rue Mohammed V, Casablanca', '2024-01-15 10:30:00.000', '2024-01-15 10:30:00.000'),
('b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e', 'fatima.alaoui@example.ma', 'Fatima', 'Alaoui', '+212623456789', '12 Avenue Hassan II, Rabat', '2024-01-20 14:20:00.000', '2024-01-20 14:20:00.000'),
('c3d4e5f6-a7b8-4c9d-0e1f-2a3b4c5d6e7f', 'youssef.idrissi@example.ma', 'Youssef', 'Idrissi', '+212634567890', '78 Boulevard Zerktouni, Casablanca', '2024-02-01 09:15:00.000', '2024-02-01 09:15:00.000'),
('d4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a', 'khadija.tazi@example.ma', 'Khadija', 'Tazi', '+212645678901', '23 Rue Allal Ben Abdellah, Fes', '2024-02-10 11:45:00.000', '2024-02-10 11:45:00.000'),
('e5f6a7b8-c9d0-4e1f-2a3b-4c5d6e7f8a9b', 'omar.el.fassi@example.ma', 'Omar', 'El Fassi', '+212656789012', '56 Avenue Ibn Sina, Marrakech', '2024-02-15 16:00:00.000', '2024-02-15 16:00:00.000');

INSERT INTO `auto_entrepreneur` (`id`, `userId`, `password`, `businessName`, `activityType`, `taxRate`, `ice`, `logo`, `creationDate`, `updateDate`, `passwordResetToken`, `passwordResetTokenExpiration`) VALUES
('f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c', 'a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d', '$2a$10$g21uhgQ7hU2zOxKIteq5puT.AY.u2vwJrZ31hhm5qTGdg4CcOqKwC', 'Bennani Tech Solutions', 'SERVICE', 0.01, '001234567890001', 'https://storage.example.com/logos/bennani-tech.png', '2024-01-15 10:35:00.000', '2024-01-15 10:35:00.000', NULL, NULL),
('a7b8c9d0-e1f2-4a3b-4c5d-6e7f8a9b0c1d', 'b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e', '$2b$10$bcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKL', 'Alaoui Import Export', 'COMMERCE', 0.015, '001234567890002', 'https://storage.example.com/logos/alaoui-import.png', '2024-01-20 14:25:00.000', '2024-01-20 14:25:00.000', NULL, NULL),
('b8c9d0e1-f2a3-4b4c-5d6e-7f8a9b0c1d2e', 'c3d4e5f6-a7b8-4c9d-0e1f-2a3b4c5d6e7f', '$2b$10$cdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLM', 'Idrissi Consulting', 'MIXTE', 0.02, '001234567890003', NULL, '2024-02-01 09:20:00.000', '2024-02-01 09:20:00.000', NULL, NULL);

INSERT INTO `users` (`id`, `email`, `firstName`, `lastName`, `phone`, `address`, `creationDate`, `updateDate`) VALUES
('f7a8b9c0-d1e2-4f3a-4b5c-6d7e8f9a0b1c', 'societe.generale@example.ma', 'Mohammed', 'Chakir', '+212667890123', '89 Rue de la Liberté, Casablanca', '2024-01-18 10:00:00.000', '2024-01-18 10:00:00.000'),
('a8b9c0d1-e2f3-4a4b-5c6d-7e8f9a0b1c2d', 'maroc.telecom@example.ma', 'Sanaa', 'Benali', '+212678901234', '34 Avenue Mohamed VI, Rabat', '2024-01-25 11:30:00.000', '2024-01-25 11:30:00.000'),
('b9c0d1e2-f3a4-4b5c-6d7e-8f9a0b1c2d3e', 'atlas.distribution@example.ma', 'Rachid', 'Mansouri', '+212689012345', '67 Boulevard Moulay Youssef, Tangier', '2024-02-05 13:45:00.000', '2024-02-05 13:45:00.000');

INSERT INTO `customers` (`id`, `userId`, `ice`, `city`, `country`, `isActive`, `AutoEntrepreneurId`, `creationDate`, `updateDate`) VALUES
('c0d1e2f3-a4b5-4c6d-7e8f-9a0b1c2d3e4f', 'f7a8b9c0-d1e2-4f3a-4b5c-6d7e8f9a0b1c', '002345678901001', 'Casablanca', 'Morocco', true, 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c', '2024-01-18 10:05:00.000', '2024-01-18 10:05:00.000'),
('d1e2f3a4-b5c6-4d7e-8f9a-0b1c2d3e4f5a', 'a8b9c0d1-e2f3-4a4b-5c6d-7e8f9a0b1c2d', '002345678901002', 'Rabat', 'Morocco', true, 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c', '2024-01-25 11:35:00.000', '2024-01-25 11:35:00.000'),
('e2f3a4b5-c6d7-4e8f-9a0b-1c2d3e4f5a6b', 'b9c0d1e2-f3a4-4b5c-6d7e-8f9a0b1c2d3e', '002345678901003', 'Tangier', 'Morocco', true, 'a7b8c9d0-e1f2-4a3b-4c5d-6e7f8a9b0c1d', '2024-02-05 13:50:00.000', '2024-02-05 13:50:00.000');

INSERT INTO `items` (`id`, `name`, `description`, `unit`, `category`, `isActive`, `creationDate`, `updateDate`) VALUES
('f3a4b5c6-d7e8-4f9a-0b1c-2d3e4f5a6b7c', 'Website Development', 'Custom website development service', 'hour', 'Web Development', true, '2024-01-16 09:00:00.000', '2024-01-16 09:00:00.000'),
('a4b5c6d7-e8f9-4a0b-1c2d-3e4f5a6b7c8d', 'SEO Optimization', 'Search engine optimization service', 'project', 'Digital Marketing', true, '2024-01-16 09:15:00.000', '2024-01-16 09:15:00.000'),
('b5c6d7e8-f9a0-4b1c-2d3e-4f5a6b7c8d9e', 'Laptop HP ProBook', 'HP ProBook 450 G8 laptop', 'unit', 'Electronics', true, '2024-01-21 10:00:00.000', '2024-01-21 10:00:00.000'),
('c6d7e8f9-a0b1-4c2d-3e4f-5a6b7c8d9e0f', 'Office Chair', 'Ergonomic office chair', 'unit', 'Furniture', true, '2024-01-21 10:30:00.000', '2024-01-21 10:30:00.000'),
('d7e8f9a0-b1c2-4d3e-4f5a-6b7c8d9e0f1a', 'Business Consulting', 'Strategic business consulting', 'hour', 'Consulting', true, '2024-02-02 11:00:00.000', '2024-02-02 11:00:00.000');

INSERT INTO `products` (`id`, `itemId`, `unitPrice`, `reference`, `stockQuantity`, `alertThreshold`, `AutoEntrepreneurId`) VALUES
('e8f9a0b1-c2d3-4e4f-5a6b-7c8d9e0f1a2b', 'b5c6d7e8-f9a0-4b1c-2d3e-4f5a6b7c8d9e', 6500.00, 'PROD-HP-001', 15, 5, 'a7b8c9d0-e1f2-4a3b-4c5d-6e7f8a9b0c1d'),
('f9a0b1c2-d3e4-4f5a-6b7c-8d9e0f1a2b3c', 'c6d7e8f9-a0b1-4c2d-3e4f-5a6b7c8d9e0f', 1200.00, 'PROD-CHAIR-001', 25, 10, 'a7b8c9d0-e1f2-4a3b-4c5d-6e7f8a9b0c1d');

INSERT INTO `services` (`id`, `itemId`, `hourlyRate`, `fixedRate`, `estimatedDuration`, `AutoEntrepreneurId`) VALUES
('a0b1c2d3-e4f5-4a6b-7c8d-9e0f1a2b3c4d', 'f3a4b5c6-d7e8-4f9a-0b1c-2d3e4f5a6b7c', 500.00, NULL, 40, 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c'),
('b1c2d3e4-f5a6-4b7c-8d9e-0f1a2b3c4d5e', 'a4b5c6d7-e8f9-4a0b-1c2d-3e4f5a6b7c8d', NULL, 8000.00, 30, 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c'),
('c2d3e4f5-a6b7-4c8d-9e0f-1a2b3c4d5e6f', 'd7e8f9a0-b1c2-4d3e-4f5a-6b7c8d9e0f1a', 800.00, NULL, 20, 'b8c9d0e1-f2a3-4b4c-5d6e-7f8a9b0c1d2e');

INSERT INTO `quotes` (`id`, `quoteNumber`, `issueDate`, `validityDate`, `status`, `subtotal`, `taxAmount`, `totalAmount`, `notes`, `pdfUrl`, `AutoEntrepreneurId`, `customerId`, `creationDate`, `updateDate`, `invoiceId`) VALUES
('d3e4f5a6-b7c8-4d9e-0f1a-2b3c4d5e6f7a', 'QUO-2024-001', '2024-01-19 10:00:00.000', '2024-02-19 10:00:00.000', 'ACCEPTED', 20000.00, 200.00, 20200.00, 'Website development project for Société Générale', 'https://storage.example.com/quotes/QUO-2024-001.pdf', 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c', 'c0d1e2f3-a4b5-4c6d-7e8f-9a0b1c2d3e4f', '2024-01-19 10:00:00.000', '2024-01-22 15:30:00.000', NULL),
('e4f5a6b7-c8d9-4e0f-1a2b-3c4d5e6f7a8b', 'QUO-2024-002', '2024-01-26 11:00:00.000', '2024-02-26 11:00:00.000', 'SENT', 8000.00, 80.00, 8080.00, 'SEO optimization service', NULL, 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c', 'd1e2f3a4-b5c6-4d7e-8f9a-0b1c2d3e4f5a', '2024-01-26 11:00:00.000', '2024-01-26 11:00:00.000', NULL),
('f5a6b7c8-d9e0-4f1a-2b3c-4d5e6f7a8b9c', 'QUO-2024-003', '2024-02-06 09:30:00.000', '2024-03-06 09:30:00.000', 'DRAFT', 19500.00, 292.50, 19792.50, 'Laptop and office furniture supply', NULL, 'a7b8c9d0-e1f2-4a3b-4c5d-6e7f8a9b0c1d', 'e2f3a4b5-c6d7-4e8f-9a0b-1c2d3e4f5a6b', '2024-02-06 09:30:00.000', '2024-02-06 09:30:00.000', NULL);

INSERT INTO `quote_lines` (`id`, `lineType`, `description`, `quantity`, `unitPrice`, `totalPrice`, `order`, `quoteId`, `productId`, `serviceId`) VALUES
('a6b7c8d9-e0f1-4a2b-3c4d-5e6f7a8b9c0d', 'SERVICE', 'Website development - 40 hours', 40.00, 500.00, 20000.00, 1, 'd3e4f5a6-b7c8-4d9e-0f1a-2b3c4d5e6f7a', NULL, 'a0b1c2d3-e4f5-4a6b-7c8d-9e0f1a2b3c4d'),
('b7c8d9e0-f1a2-4b3c-4d5e-6f7a8b9c0d1e', 'SERVICE', 'SEO Optimization - Fixed project', 1.00, 8000.00, 8000.00, 1, 'e4f5a6b7-c8d9-4e0f-1a2b-3c4d5e6f7a8b', NULL, 'b1c2d3e4-f5a6-4b7c-8d9e-0f1a2b3c4d5e'),
('c8d9e0f1-a2b3-4c4d-5e6f-7a8b9c0d1e2f', 'PRODUCT', 'HP ProBook Laptop', 3.00, 6500.00, 19500.00, 1, 'f5a6b7c8-d9e0-4f1a-2b3c-4d5e6f7a8b9c', 'e8f9a0b1-c2d3-4e4f-5a6b-7c8d9e0f1a2b', NULL);

INSERT INTO `invoices` (`id`, `invoiceNumber`, `issueDate`, `dueDate`, `status`, `subtotal`, `discount`, `totalAmount`, `paidAmount`, `remainingAmount`, `notes`, `pdfUrl`, `AutoEntrepreneurId`, `customerId`, `creationDate`, `updateDate`, `quoteId`) VALUES
('d9e0f1a2-b3c4-4d5e-6f7a-8b9c0d1e2f3a', 'INV-2024-001', '2024-01-23 09:00:00.000', '2024-02-23 09:00:00.000', 'PAID', 20000.00, 0.00, 20200.00, 20200.00, 0.00, 'Payment received - Website development project', 'https://storage.example.com/invoices/INV-2024-001.pdf', 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c', 'c0d1e2f3-a4b5-4c6d-7e8f-9a0b1c2d3e4f', '2024-01-23 09:00:00.000', '2024-02-15 10:00:00.000', 'd3e4f5a6-b7c8-4d9e-0f1a-2b3c4d5e6f7a'),
('e0f1a2b3-c4d5-4e6f-7a8b-9c0d1e2f3a4b', 'INV-2024-002', '2024-02-07 10:30:00.000', '2024-03-07 10:30:00.000', 'PARTIALLY_PAID', 19500.00, 500.00, 19292.50, 10000.00, 9292.50, 'Partial payment received for laptop order', 'https://storage.example.com/invoices/INV-2024-002.pdf', 'a7b8c9d0-e1f2-4a3b-4c5d-6e7f8a9b0c1d', 'e2f3a4b5-c6d7-4e8f-9a0b-1c2d3e4f5a6b', '2024-02-07 10:30:00.000', '2024-02-20 14:00:00.000', NULL),
('f1a2b3c4-d5e6-4f7a-8b9c-0d1e2f3a4b5c', 'INV-2024-003', '2024-02-12 11:00:00.000', '2024-03-12 11:00:00.000', 'SENT', 16000.00, 0.00, 16320.00, 0.00, 16320.00, 'Business consulting services invoice', 'https://storage.example.com/invoices/INV-2024-003.pdf', 'b8c9d0e1-f2a3-4b4c-5d6e-7f8a9b0c1d2e', 'd1e2f3a4-b5c6-4d7e-8f9a-0b1c2d3e4f5a', '2024-02-12 11:00:00.000', '2024-02-12 11:00:00.000', NULL);

INSERT INTO `invoice_lines` (`id`, `lineType`, `description`, `quantity`, `unitPrice`, `totalPrice`, `order`, `invoiceId`, `productId`, `serviceId`) VALUES
('a2b3c4d5-e6f7-4a8b-9c0d-1e2f3a4b5c6d', 'SERVICE', 'Website development - 40 hours', 40.00, 500.00, 20000.00, 1, 'd9e0f1a2-b3c4-4d5e-6f7a-8b9c0d1e2f3a', NULL, 'a0b1c2d3-e4f5-4a6b-7c8d-9e0f1a2b3c4d'),
('b3c4d5e6-f7a8-4b9c-0d1e-2f3a4b5c6d7e', 'PRODUCT', 'HP ProBook Laptop', 3.00, 6500.00, 19500.00, 1, 'e0f1a2b3-c4d5-4e6f-7a8b-9c0d1e2f3a4b', 'e8f9a0b1-c2d3-4e4f-5a6b-7c8d9e0f1a2b', NULL),
('c4d5e6f7-a8b9-4c0d-1e2f-3a4b5c6d7e8f', 'SERVICE', 'Business consulting - 20 hours', 20.00, 800.00, 16000.00, 1, 'f1a2b3c4-d5e6-4f7a-8b9c-0d1e2f3a4b5c', NULL, 'c2d3e4f5-a6b7-4c8d-9e0f-1a2b3c4d5e6f');

INSERT INTO `payments` (`id`, `reference`, `amount`, `paymentDate`, `paymentMethod`, `notes`, `transactionNumber`, `isReconciled`, `AutoEntrepreneurId`, `invoiceId`, `creationDate`) VALUES
('d5e6f7a8-b9c0-4d1e-2f3a-4b5c6d7e8f9a', 'PAY-2024-001', 20200.00, '2024-02-15 10:00:00.000', 'BANK_TRANSFER', 'Full payment for website development', 'TRX-20240215-001', true, 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c', 'd9e0f1a2-b3c4-4d5e-6f7a-8b9c0d1e2f3a', '2024-02-15 10:05:00.000'),
('e6f7a8b9-c0d1-4e2f-3a4b-5c6d7e8f9a0b', 'PAY-2024-002', 10000.00, '2024-02-20 14:00:00.000', 'CHECK', 'Partial payment for laptop order', 'CHK-5678901', true, 'a7b8c9d0-e1f2-4a3b-4c5d-6e7f8a9b0c1d', 'e0f1a2b3-c4d5-4e6f-7a8b-9c0d1e2f3a4b', '2024-02-20 14:10:00.000');

INSERT INTO `expenses` (`id`, `category`, `description`, `amount`, `date`, `supplier`, `paymentMethod`, `receiptUrl`, `isDeductible`, `AutoEntrepreneurId`, `creationDate`, `updateDate`) VALUES
('f7a8b9c0-d1e2-4f3a-4b5c-6d7e8f9a0b1c', 'Office Supplies', 'Monthly office supplies purchase', 850.00, '2024-01-30 10:00:00.000', 'Marjane Casablanca', 'CREDIT_CARD', 'https://storage.example.com/receipts/receipt-001.pdf', true, 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c', '2024-01-30 10:30:00.000', '2024-01-30 10:30:00.000'),
('a8b9c0d1-e2f3-4a4b-5c6d-7e8f9a0b1c2d', 'Software', 'Adobe Creative Cloud annual subscription', 3500.00, '2024-02-05 14:00:00.000', 'Adobe Systems', 'BANK_TRANSFER', 'https://storage.example.com/receipts/receipt-002.pdf', true, 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c', '2024-02-05 14:15:00.000', '2024-02-05 14:15:00.000'),
('b9c0d1e2-f3a4-4b5c-6d7e-8f9a0b1c2d3e', 'Transportation', 'Fuel expenses for business deliveries', 1200.00, '2024-02-10 16:30:00.000', 'Afriquia Gas Station', 'CASH', NULL, true, 'a7b8c9d0-e1f2-4a3b-4c5d-6e7f8a9b0c1d', '2024-02-10 16:45:00.000', '2024-02-10 16:45:00.000');

INSERT INTO `documents` (`id`, `name`, `type`, `category`, `fileUrl`, `fileSize`, `uploadDate`, `description`, `AutoEntrepreneurId`) VALUES
('c0d1e2f3-a4b5-4c6d-7e8f-9a0b1c2d3e4f', 'Business License 2024', 'PDF', 'Legal', 'https://storage.example.com/documents/license-2024.pdf', 245678, '2024-01-16 09:00:00.000', 'Official business license for 2024', 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c'),
('d1e2f3a4-b5c6-4d7e-8f9a-0b1c2d3e4f5a', 'Tax Certificate Q4 2023', 'PDF', 'Tax', 'https://storage.example.com/documents/tax-q4-2023.pdf', 156789, '2024-01-22 11:30:00.000', 'Q4 2023 tax declaration certificate', 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c'),
('e2f3a4b5-c6d7-4e8f-9a0b-1c2d3e4f5a6b', 'Insurance Policy 2024', 'PDF', 'Insurance', 'https://storage.example.com/documents/insurance-2024.pdf', 312456, '2024-02-01 10:00:00.000', 'Business insurance policy for 2024', 'a7b8c9d0-e1f2-4a3b-4c5d-6e7f8a9b0c1d');

INSERT INTO `tax_declarations` (`id`, `period`, `year`, `month`, `totalRevenue`, `taxRate`, `taxAmount`, `status`, `dueDate`, `paymentDate`, `pdfUrl`, `AutoEntrepreneurId`, `creationDate`) VALUES
('f3a4b5c6-d7e8-4f9a-0b1c-2d3e4f5a6b7c', 'Q4-2023', 2023, 12, 75000.00, 0.01, 750.00, 'PAID', '2024-01-15 23:59:59.000', '2024-01-12 10:00:00.000', 'https://storage.example.com/tax/tax-q4-2023.pdf', 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c', '2024-01-05 09:00:00.000'),
('a4b5c6d7-e8f9-4a0b-1c2d-3e4f5a6b7c8d', 'Q1-2024', 2024, 3, 42000.00, 0.01, 420.00, 'SUBMITTED', '2024-04-15 23:59:59.000', NULL, 'https://storage.example.com/tax/tax-q1-2024.pdf', 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c', '2024-04-01 09:00:00.000'),
('b5c6d7e8-f9a0-4b1c-2d3e-4f5a6b7c8d9e', 'Q4-2023', 2023, 12, 58000.00, 0.015, 870.00, 'PAID', '2024-01-15 23:59:59.000', '2024-01-10 14:00:00.000', NULL, 'a7b8c9d0-e1f2-4a3b-4c5d-6e7f8a9b0c1d', '2024-01-03 10:00:00.000');

INSERT INTO `contributions` (`id`, `period`, `year`, `quarter`, `amount`, `dueDate`,paymentDate, status, reference, AutoEntrepreneurId, creationDate) VALUES
('c6d7e8f9-a0b1-4c2d-3e4f-5a6b7c8d9e0f', 'Q4-2023', 2023, 4, 2500.00, '2024-01-31 23:59:59.000', '2024-01-28 10:00:00.000', 'PAID', 'CONT-2023-Q4-001', 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c', '2024-01-15 09:00:00.000'),
('d7e8f9a0-b1c2-4d3e-4f5a-6b7c8d9e0f1a', 'Q1-2024', 2024, 1, 2800.00, '2024-04-30 23:59:59.000', NULL, 'PENDING', 'CONT-2024-Q1-001', 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c', '2024-04-01 09:00:00.000'),
('e8f9a0b1-c2d3-4e4f-5a6b-7c8d9e0f1a2b', 'Q4-2023', 2023, 4, 2200.00, '2024-01-31 23:59:59.000', '2024-01-25 11:00:00.000', 'PAID', 'CONT-2023-Q4-002', 'a7b8c9d0-e1f2-4a3b-4c5d-6e7f8a9b0c1d', '2024-01-12 10:00:00.000');
INSERT INTO notifications (id, type, title, message, associatedEntityType, associatedEntityId, isRead, priority, AutoEntrepreneurId, creationDate) VALUES
('f9a0b1c2-d3e4-4f5a-6b7c-8d9e0f1a2b3c', 'PAYMENT', 'Payment Received', 'Payment of 20200.00 MAD received for invoice INV-2024-001', 'invoice', 'd9e0f1a2-b3c4-4d5e-6f7a-8b9c0d1e2f3a', true, 'high', 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c', '2024-02-15 10:05:00.000'),
('a0b1c2d3-e4f5-4a6b-7c8d-9e0f1a2b3c4d', 'INVOICE', 'Invoice Due Soon', 'Invoice INV-2024-003 is due in 15 days', 'invoice', 'f1a2b3c4-d5e6-4f7a-8b9c-0d1e2f3a4b5c', false, 'medium', 'b8c9d0e1-f2a3-4b4c-5d6e-7f8a9b0c1d2e', '2024-02-25 09:00:00.000'),
('b1c2d3e4-f5a6-4b7c-8d9e-0f1a2b3c4d5e', 'TAX', 'Tax Declaration Submitted', 'Your Q1 2024 tax declaration has been submitted successfully', 'tax_declaration', 'a4b5c6d7-e8f9-4a0b-1c2d-3e4f5a6b7c8d', true, 'high', 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c', '2024-04-01 09:30:00.000'),
('c2d3e4f5-a6b7-4c8d-9e0f-1a2b3c4d5e6f', 'CONTRIBUTION', 'Contribution Payment Due', 'Your Q1 2024 social contribution payment is due on April 30', 'contribution', 'd7e8f9a0-b1c2-4d3e-4f5a-6b7c8d9e0f1a', false, 'high', 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c', '2024-04-15 08:00:00.000'),
('d3e4f5a6-b7c8-4d9e-0f1a-2b3c4d5e6f7a', 'QUOTE', 'Quote Accepted', 'Quote QUO-2024-001 has been accepted by Société Générale', 'quote', 'd3e4f5a6-b7c8-4d9e-0f1a-2b3c4d5e6f7a', true, 'high', 'f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c', '2024-01-22 15:30:00.000');