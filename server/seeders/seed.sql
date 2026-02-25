 

 

-- -- =====================================================
-- -- 1. INSERT USERS (5 regular users + 1 for autoentrepreneur)
-- -- =====================================================
-- INSERT INTO users (id, email, firstName, lastName, phone, address, creationDate, updateDate) VALUES
-- -- Auto-entrepreneur user (will be referenced by autoentrepreneur table)
-- ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'contact@smartbiz.ma', 'Karim', 'Benzema', '+212 6 12 34 56 78', '15 Rue Allal Ben Abdellah, Casablanca 20000', '2023-01-15 09:30:00', '2024-02-20 14:25:00'),

-- -- Customer users
-- ('b1f2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', 'hassan.elouafi@company.ma', 'Hassan', 'El Ouafi', '+212 6 23 45 67 89', '45 Boulevard Mohammed V, Rabat 10000', '2023-02-10 11:20:00', '2024-01-15 10:30:00'),
-- ('c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7f', 'fatima.zahra@store.ma', 'Fatima Zahra', 'Benjelloun', '+212 6 34 56 78 90', '28 Rue Oued Zem, Casablanca 20200', '2023-03-05 14:45:00', '2024-02-10 16:20:00'),
-- ('d3e4f5a6-7b8c-9d0e-1f2a-3b4c5d6e7f8a', 'mohamed.bennis@tech.ma', 'Mohamed', 'Bennis', '+212 6 45 67 89 01', '7 Avenue Hassan II, Marrakech 40000', '2023-04-12 09:15:00', '2024-01-20 11:40:00'),
-- ('e4f5a6b7-8c9d-0e1f-2a3b-4c5d6e7f8a9b', 'laila.alami@consulting.ma', 'Laïla', 'Alami', '+212 6 56 78 90 12', '33 Rue de France, Tanger 90000', '2023-05-18 13:30:00', '2024-02-05 09:50:00'),
-- ('f5a6b7c8-9d0e-1f2a-3b4c-5d6e7f8a9b0c', 'youssef.chraibi@resto.ma', 'Youssef', 'Chraibi', '+212 6 67 89 01 23', '12 Avenue des FAR, Fès 30000', '2023-06-22 10:00:00', '2024-01-28 15:15:00');

-- -- =====================================================
-- -- 2. INSERT AUTO_ENTREPRENEUR (Exactly 1 row)
-- -- =====================================================
-- INSERT INTO auto_entrepreneur (
--     id, userId, password, businessName, activityType, taxRate, ice, 
--     logo, creationDate, updateDate, passwordResetToken, passwordResetTokenExpiration
-- ) VALUES (
--     'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 
--     'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 
--     '$2a$12$ctoGu6I9OeQc4Z3mZyqdS.a18IBktj.GMzH7Dvk7IwwcMD3MJ93u2', -- Hashed password: "SecurePass123"
--     'SmartBiz Solutions', 
--     'MIXTE', 
--     0.25, 
--     'ICE00123456789012', 
--     '/uploads/logos/smartbiz-logo.png', 
--     '2023-01-15 10:00:00', 
--     '2024-02-20 14:30:00', 
--     NULL, 
--     NULL
-- );

-- -- =====================================================
-- -- 3. INSERT CUSTOMERS (5 rows)
-- -- =====================================================
-- INSERT INTO customers (id, userId, ice, city, country, isActive, AutoEntrepreneurId, creationDate, updateDate) VALUES
-- ('b7c8d9e0-1f2a-3b4c-5d6e-7f8a9b0c1d2e', 'b1f2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', 'ICE12345678901234', 'Rabat', 'Morocco', true, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2023-02-10 11:30:00', '2024-01-15 10:45:00'),
-- ('c8d9e0f1-2a3b-4c5d-6e7f-8a9b0c1d2e3f', 'c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7f', 'ICE23456789012345', 'Casablanca', 'Morocco', true, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2023-03-05 15:00:00', '2024-02-10 16:30:00'),
-- ('d9e0f1a2-3b4c-5d6e-7f8a-9b0c1d2e3f4a', 'd3e4f5a6-7b8c-9d0e-1f2a-3b4c5d6e7f8a', 'ICE34567890123456', 'Marrakech', 'Morocco', true, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2023-04-12 09:30:00', '2024-01-20 11:50:00'),
-- ('e0f1a2b3-4c5d-6e7f-8a9b-0c1d2e3f4a5b', 'e4f5a6b7-8c9d-0e1f-2a3b-4c5d6e7f8a9b', 'ICE45678901234567', 'Tanger', 'Morocco', true, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2023-05-18 13:45:00', '2024-02-05 10:00:00'),
-- ('f1a2b3c4-5d6e-7f8a-9b0c-1d2e3f4a5b6c', 'f5a6b7c8-9d0e-1f2a-3b4c-5d6e7f8a9b0c', 'ICE56789012345678', 'Fès', 'Morocco', false, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2023-06-22 10:15:00', '2024-01-28 15:30:00');

-- -- =====================================================
-- -- 4. INSERT ITEMS (10 items - 5 products + 5 services)
-- -- =====================================================
-- INSERT INTO items (id, name, description, unit, category, isActive, creationDate, updateDate) VALUES
-- -- Products
-- ('a2b3c4d5-6e7f-8a9b-0c1d-2e3f4a5b6c7d', 'Laptop Dell XPS 13', 'High-performance laptop with Intel i7, 16GB RAM, 512GB SSD', 'piece', 'Electronics', true, '2023-01-20 09:00:00', '2024-02-01 11:30:00'),
-- ('b3c4d5e6-7f8a-9b0c-1d2e-3f4a5b6c7d8e', 'Office Chair Ergonomique', 'Ergonomic mesh chair with lumbar support', 'piece', 'Furniture', true, '2023-01-25 10:15:00', '2024-01-10 14:20:00'),
-- ('c4d5e6f7-8a9b-0c1d-2e3f-4a5b6c7d8e9f', 'Printer HP LaserJet Pro', 'All-in-one wireless laser printer', 'piece', 'Office Equipment', true, '2023-02-01 11:30:00', '2024-02-05 09:45:00'),
-- ('d5e6f7a8-9b0c-1d2e-3f4a-5b6c7d8e9f0a', 'External SSD 1TB', 'Portable SSD USB-C, 1TB storage', 'piece', 'Storage', true, '2023-02-10 13:45:00', '2024-01-18 16:30:00'),
-- ('e6f7a8b9-0c1d-2e3f-4a5b-6c7d8e9f0a1b', 'Monitor 24" Full HD', 'LED monitor with HDMI and VGA ports', 'piece', 'Electronics', true, '2023-02-15 14:30:00', '2024-02-12 10:15:00'),

-- -- Services
-- ('f7a8b9c0-1d2e-3f4a-5b6c-7d8e9f0a1b2c', 'Maintenance Informatique', 'Monthly computer maintenance and troubleshooting', 'hour', 'IT Services', true, '2023-01-18 08:30:00', '2024-02-08 13:20:00'),
-- ('a8b9c0d1-2e3f-4a5b-6c7d-8e9f0a1b2c3d', 'Consulting en Marketing Digital', 'Digital marketing strategy and implementation', 'hour', 'Consulting', true, '2023-01-22 09:45:00', '2024-01-25 11:10:00'),
-- ('b9c0d1e2-3f4a-5b6c-7d8e-9f0a1b2c3d4e', 'Formation Excel Avancé', 'Advanced Excel training with VBA', 'session', 'Training', true, '2023-02-05 10:30:00', '2024-02-15 09:30:00'),
-- ('c0d1e2f3-4a5b-6c7d-8e9f-0a1b2c3d4e5f', 'Développement Web', 'Custom website development', 'project', 'Development', true, '2023-02-12 11:15:00', '2024-01-30 14:45:00'),
-- ('d1e2f3a4-5b6c-7d8e-9f0a-1b2c3d4e5f6a', 'Support Technique Téléphonique', 'Phone support for software issues', 'hour', 'Support', true, '2023-02-18 13:00:00', '2024-02-03 15:50:00');

-- -- =====================================================
-- -- 5. INSERT PRODUCTS (5 rows)
-- -- =====================================================
-- INSERT INTO products (id, itemId, unitPrice, reference, stockQuantity, alertThreshold, AutoEntrepreneurId) VALUES
-- ('e2f3a4b5-6c7d-8e9f-0a1b-2c3d4e5f6a7b', 'a2b3c4d5-6e7f-8a9b-0c1d-2e3f4a5b6c7d', 12500.00, 'DELL-XPS13-2023', 15, 5, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'),
-- ('f3a4b5c6-7d8e-9f0a-1b2c-3d4e5f6a7b8c', 'b3c4d5e6-7f8a-9b0c-1d2e-3f4a5b6c7d8e', 2350.50, 'CHAIR-ERG-001', 28, 10, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'),
-- ('a4b5c6d7-8e9f-0a1b-2c3d-4e5f6a7b8c9d', 'c4d5e6f7-8a9b-0c1d-2e3f-4a5b6c7d8e9f', 3450.75, 'HP-LJ-PRO-400', 12, 4, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'),
-- ('b5c6d7e8-9f0a-1b2c-3d4e-5f6a7b8c9d0e', 'd5e6f7a8-9b0c-1d2e-3f4a-5b6c7d8e9f0a', 890.25, 'SSD-EXT-1TB', 42, 15, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'),
-- ('c6d7e8f9-0a1b-2c3d-4e5f-6a7b8c9d0e1f', 'e6f7a8b9-0c1d-2e3f-4a5b-6c7d8e9f0a1b', 1750.00, 'MON-24-FHD', 23, 8, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d');

-- -- =====================================================
-- -- 6. INSERT SERVICES (5 rows)
-- -- =====================================================
-- INSERT INTO services (id, itemId, hourlyRate, fixedRate, estimatedDuration, AutoEntrepreneurId) VALUES
-- ('d7e8f9a0-1b2c-3d4e-5f6a-7b8c9d0e1f2a', 'f7a8b9c0-1d2e-3f4a-5b6c-7d8e9f0a1b2c', 250.00, NULL, 60, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'),
-- ('e8f9a0b1-2c3d-4e5f-6a7b-8c9d0e1f2a3b', 'a8b9c0d1-2e3f-4a5b-6c7d-8e9f0a1b2c3d', 450.00, NULL, 120, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'),
-- ('f9a0b1c2-3d4e-5f6a-7b8c-9d0e1f2a3b4c', 'b9c0d1e2-3f4a-5b6c-7d8e-9f0a1b2c3d4e', NULL, 3500.00, 480, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'),
-- ('a0b1c2d3-4e5f-6a7b-8c9d-0e1f2a3b4c5d', 'c0d1e2f3-4a5b-6c7d-8e9f-0a1b2c3d4e5f', NULL, 15000.00, 2400, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'),
-- ('b1c2d3e4-5f6a-7b8c-9d0e-1f2a3b4c5d6e', 'd1e2f3a4-5b6c-7d8e-9f0a-1b2c3d4e5f6a', 180.00, NULL, 30, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d');

-- -- =====================================================
-- -- 7. INSERT INVOICES (5 rows)
-- -- =====================================================
-- INSERT INTO invoices (
--     id, invoiceNumber, issueDate, dueDate, status, subtotal, 
--     discount, totalAmount, paidAmount, remainingAmount, notes, 
--     pdfUrl, AutoEntrepreneurId, customerId, creationDate, updateDate, quoteId
-- ) VALUES
-- (
--     'c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7f', 'INV-2024-001', '2024-01-05 10:00:00', '2024-02-05 10:00:00', 'PAID', 
--     12500.00, 0.00, 12500.00, 12500.00, 0.00, 
--     'Facture pour achat laptop Dell XPS 13', 
--     '/pdf/invoices/INV-2024-001.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'b7c8d9e0-1f2a-3b4c-5d6e-7f8a9b0c1d2e', 
--     '2024-01-05 10:30:00', '2024-01-20 14:25:00', NULL
-- ),
-- (
--     'd3e4f5a6-7b8c-9d0e-1f2a-3b4c5d6e7f8a', 'INV-2024-002', '2024-01-15 11:30:00', '2024-02-15 11:30:00', 'PAID', 
--     4700.00, 0.00, 4700.00, 4700.00, 0.00, 
--     'Fournitures de bureau et matériel', 
--     '/pdf/invoices/INV-2024-002.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'c8d9e0f1-2a3b-4c5d-6e7f-8a9b0c1d2e3f', 
--     '2024-01-15 12:00:00', '2024-02-01 09:15:00', NULL
-- ),
-- (
--     'e4f5a6b7-8c9d-0e1f-2a3b-4c5d6e7f8a9b', 'INV-2024-003', '2024-02-01 09:15:00', '2024-03-01 09:15:00', 'PARTIALLY_PAID', 
--     8900.50, 5.00, 8455.48, 5000.00, 3455.48, 
--     'Services de conseil et formation - 5% de remise commerciale', 
--     '/pdf/invoices/INV-2024-003.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'd9e0f1a2-3b4c-5d6e-7f8a-9b0c1d2e3f4a', 
--     '2024-02-01 09:45:00', '2024-02-10 11:20:00', NULL
-- ),
-- (
--     'f5a6b7c8-9d0e-1f2a-3b4c-5d6e7f8a9b0c', 'INV-2024-004', '2024-02-10 14:30:00', '2024-03-10 14:30:00', 'SENT', 
--     15000.00, 0.00, 15000.00, 0.00, 15000.00, 
--     'Développement site web e-commerce', 
--     '/pdf/invoices/INV-2024-004.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'e0f1a2b3-4c5d-6e7f-8a9b-0c1d2e3f4a5b', 
--     '2024-02-10 15:00:00', '2024-02-10 15:00:00', NULL
-- ),
-- (
--     'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1e', 'INV-2024-005', '2024-02-20 08:45:00', '2024-03-20 08:45:00', 'DRAFT', 
--     3250.00, 0.00, 3250.00, 0.00, 3250.00, 
--     'Maintenance informatique et support', 
--     '/pdf/invoices/INV-2024-005.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'f1a2b3c4-5d6e-7f8a-9b0c-1d2e3f4a5b6c', 
--     '2024-02-20 09:15:00', '2024-02-20 09:15:00', NULL
-- );

-- -- =====================================================
-- -- 8. INSERT QUOTES (5 rows)
-- -- =====================================================
-- INSERT INTO quotes (
--     id, quoteNumber, issueDate, validityDate, status, subtotal, 
--     taxAmount, totalAmount, notes, pdfUrl, AutoEntrepreneurId, 
--     customerId, creationDate, updateDate, invoiceId
-- ) VALUES
-- (
--     'b7c8d9e0-1f2a-3b4c-5d6e-7f8a9b0c1d2f', 'DEV-2024-001', '2024-01-02 09:00:00', '2024-02-02 09:00:00', 'CONVERTED', 
--     12500.00, 0.00, 12500.00, 
--     'Devis pour achat laptop - accepté et converti en facture', 
--     '/pdf/quotes/DEV-2024-001.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'b7c8d9e0-1f2a-3b4c-5d6e-7f8a9b0c1d2e', 
--     '2024-01-02 09:30:00', '2024-01-05 11:20:00', 'c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7f'
-- ),
-- (
--     'c8d9e0f1-2a3b-4c5d-6e7f-8a9b0c1d2e3g', 'DEV-2024-002', '2024-01-10 10:15:00', '2024-02-10 10:15:00', 'ACCEPTED', 
--     5200.00, 0.00, 5200.00, 
--     'Devis pour équipement bureau et fournitures', 
--     '/pdf/quotes/DEV-2024-002.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'c8d9e0f1-2a3b-4c5d-6e7f-8a9b0c1d2e3f', 
--     '2024-01-10 10:45:00', '2024-01-12 14:30:00', NULL
-- ),
-- (
--     'd9e0f1a2-3b4c-5d6e-7f8a-9b0c1d2e3f4b', 'DEV-2024-003', '2024-01-25 11:30:00', '2024-02-25 11:30:00', 'SENT', 
--     8900.50, 0.00, 8900.50, 
--     'Proposition de services de conseil et formation', 
--     '/pdf/quotes/DEV-2024-003.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'd9e0f1a2-3b4c-5d6e-7f8a-9b0c1d2e3f4a', 
--     '2024-01-25 12:00:00', '2024-01-25 12:00:00', NULL
-- ),
-- (
--     'e0f1a2b3-4c5d-6e7f-8a9b-0c1d2e3f4a5c', 'DEV-2024-004', '2024-02-05 13:45:00', '2024-03-05 13:45:00', 'SENT', 
--     17500.00, 0.00, 17500.00, 
--     'Devis pour développement site web et formation', 
--     '/pdf/quotes/DEV-2024-004.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'e0f1a2b3-4c5d-6e7f-8a9b-0c1d2e3f4a5b', 
--     '2024-02-05 14:15:00', '2024-02-05 14:15:00', NULL
-- ),
-- (
--     'f1a2b3c4-5d6e-7f8a-9b0c-1d2e3f4a5b6d', 'DEV-2024-005', '2024-02-15 08:30:00', '2024-03-15 08:30:00', 'DRAFT', 
--     1800.00, 0.00, 1800.00, 
--     'Devis pour support technique mensuel', 
--     '/pdf/quotes/DEV-2024-005.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'f1a2b3c4-5d6e-7f8a-9b0c-1d2e3f4a5b6c', 
--     '2024-02-15 09:00:00', '2024-02-15 09:00:00', NULL
-- );

-- -- Update invoice 001 to link to quote 001
-- UPDATE invoices SET quoteId = 'b7c8d9e0-1f2a-3b4c-5d6e-7f8a9b0c1d2f' WHERE id = 'c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7f';

-- -- =====================================================
-- -- 9. INSERT INVOICE_LINES (15 rows - 3 per invoice)
-- -- =====================================================
-- INSERT INTO invoice_lines (
--     id, lineType, description, quantity, unitPrice, totalPrice, 
--     `order`, invoiceId, productId, serviceId
-- ) VALUES
-- -- Invoice 001 lines
-- ('a2b3c4d5-6e7f-8a9b-0c1d-2e3f4a5b6c7e', 'PRODUCT', 'Laptop Dell XPS 13 (i7, 16GB, 512GB)', 1, 12500.00, 12500.00, 1, 'c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7f', 'e2f3a4b5-6c7d-8e9f-0a1b-2c3d4e5f6a7b', NULL),
-- ('b3c4d5e6-7f8a-9b0c-1d2e-3f4a5b6c7d8f', 'PRODUCT', 'Monitor 24" Full HD', 2, 1750.00, 3500.00, 2, 'c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7f', 'c6d7e8f9-0a1b-2c3d-4e5f-6a7b8c9d0e1f', NULL),
-- ('c4d5e6f7-8a9b-0c1d-2e3f-4a5b6c7d8e9g', 'PRODUCT', 'External SSD 1TB', 1, 890.25, 890.25, 3, 'c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7f', 'b5c6d7e8-9f0a-1b2c-3d4e-5f6a7b8c9d0e', NULL),

-- -- Invoice 002 lines
-- ('d5e6f7a8-9b0c-1d2e-3f4a-5b6c7d8e9f0b', 'PRODUCT', 'Office Chair Ergonomique', 2, 2350.50, 4701.00, 1, 'd3e4f5a6-7b8c-9d0e-1f2a-3b4c5d6e7f8a', 'f3a4b5c6-7d8e-9f0a-1b2c-3d4e5f6a7b8c', NULL),
-- ('e6f7a8b9-0c1d-2e3f-4a5b-6c7d8e9f0a1c', 'PRODUCT', 'External SSD 1TB', 3, 890.25, 2670.75, 2, 'd3e4f5a6-7b8c-9d0e-1f2a-3b4c5d6e7f8a', 'b5c6d7e8-9f0a-1b2c-3d4e-5f6a7b8c9d0e', NULL),
-- ('f7a8b9c0-1d2e-3f4a-5b6c-7d8e9f0a1b2d', 'PRODUCT', 'Printer HP LaserJet Pro', 1, 3450.75, 3450.75, 3, 'd3e4f5a6-7b8c-9d0e-1f2a-3b4c5d6e7f8a', 'a4b5c6d7-8e9f-0a1b-2c3d-4e5f6a7b8c9d', NULL),

-- -- Invoice 003 lines
-- ('a8b9c0d1-2e3f-4a5b-6c7d-8e9f0a1b2c3e', 'SERVICE', 'Consulting en Marketing Digital - 10 heures', 10, 450.00, 4500.00, 1, 'e4f5a6b7-8c9d-0e1f-2a3b-4c5d6e7f8a9b', NULL, 'e8f9a0b1-2c3d-4e5f-6a7b-8c9d0e1f2a3b'),
-- ('b9c0d1e2-3f4a-5b6c-7d8e-9f0a1b2c3d4f', 'SERVICE', 'Formation Excel Avancé - 1 session', 1, 3500.00, 3500.00, 2, 'e4f5a6b7-8c9d-0e1f-2a3b-4c5d6e7f8a9b', NULL, 'f9a0b1c2-3d4e-5f6a-7b8c-9d0e1f2a3b4c'),
-- ('c0d1e2f3-4a5b-6c7d-8e9f-0a1b2c3d4e5g', 'PRODUCT', 'External SSD 1TB', 1, 890.25, 890.25, 3, 'e4f5a6b7-8c9d-0e1f-2a3b-4c5d6e7f8a9b', 'b5c6d7e8-9f0a-1b2c-3d4e-5f6a7b8c9d0e', NULL),

-- -- Invoice 004 lines
-- ('d1e2f3a4-5b6c-7d8e-9f0a-1b2c3d4e5f6b', 'SERVICE', 'Développement site web e-commerce', 1, 15000.00, 15000.00, 1, 'f5a6b7c8-9d0e-1f2a-3b4c-5d6e7f8a9b0c', NULL, 'a0b1c2d3-4e5f-6a7b-8c9d-0e1f2a3b4c5d'),
-- ('e2f3a4b5-6c7d-8e9f-0a1b-2c3d4e5f6a7c', 'PRODUCT', 'Laptop Dell XPS 13', 1, 12500.00, 12500.00, 2, 'f5a6b7c8-9d0e-1f2a-3b4c-5d6e7f8a9b0c', 'e2f3a4b5-6c7d-8e9f-0a1b-2c3d4e5f6a7b', NULL),
-- ('f3a4b5c6-7d8e-9f0a-1b2c-3d4e5f6a7b8d', 'PRODUCT', 'Office Chair Ergonomique', 1, 2350.50, 2350.50, 3, 'f5a6b7c8-9d0e-1f2a-3b4c-5d6e7f8a9b0c', 'f3a4b5c6-7d8e-9f0a-1b2c-3d4e5f6a7b8c', NULL),

-- -- Invoice 005 lines
-- ('a4b5c6d7-8e9f-0a1b-2c3d-4e5f6a7b8c9e', 'SERVICE', 'Maintenance Informatique - 8 heures', 8, 250.00, 2000.00, 1, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1e', NULL, 'd7e8f9a0-1b2c-3d4e-5f6a-7b8c9d0e1f2a'),
-- ('b5c6d7e8-9f0a-1b2c-3d4e-5f6a7b8c9d0f', 'PRODUCT', 'Printer HP LaserJet Pro', 1, 3450.75, 3450.75, 2, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1e', 'a4b5c6d7-8e9f-0a1b-2c3d-4e5f6a7b8c9d', NULL),
-- ('c6d7e8f9-0a1b-2c3d-4e5f-6a7b8c9d0e1g', 'SERVICE', 'Consulting en Marketing Digital - 2 heures', 2, 450.00, 900.00, 3, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1e', NULL, 'e8f9a0b1-2c3d-4e5f-6a7b-8c9d0e1f2a3b');

-- -- =====================================================
-- -- 10. INSERT QUOTE_LINES (15 rows - 3 per quote)
-- -- =====================================================
-- INSERT INTO quote_lines (
--     id, lineType, description, quantity, unitPrice, totalPrice, 
--     `order`, quoteId, productId, serviceId
-- ) VALUES
-- -- Quote 001 lines
-- ('d7e8f9a0-1b2c-3d4e-5f6a-7b8c9d0e1f2b', 'PRODUCT', 'Laptop Dell XPS 13', 1, 12500.00, 12500.00, 1, 'b7c8d9e0-1f2a-3b4c-5d6e-7f8a9b0c1d2f', 'e2f3a4b5-6c7d-8e9f-0a1b-2c3d4e5f6a7b', NULL),
-- ('e8f9a0b1-2c3d-4e5f-6a7b-8c9d0e1f2a3c', 'PRODUCT', 'External SSD 1TB', 2, 890.25, 1780.50, 2, 'b7c8d9e0-1f2a-3b4c-5d6e-7f8a9b0c1d2f', 'b5c6d7e8-9f0a-1b2c-3d4e-5f6a7b8c9d0e', NULL),
-- ('f9a0b1c2-3d4e-5f6a-7b8c-9d0e1f2a3b4d', 'PRODUCT', 'Monitor 24" Full HD', 1, 1750.00, 1750.00, 3, 'b7c8d9e0-1f2a-3b4c-5d6e-7f8a9b0c1d2f', 'c6d7e8f9-0a1b-2c3d-4e5f-6a7b8c9d0e1f', NULL),

-- -- Quote 002 lines
-- ('a0b1c2d3-4e5f-6a7b-8c9d-0e1f2a3b4c5e', 'PRODUCT', 'Office Chair Ergonomique', 2, 2350.50, 4701.00, 1, 'c8d9e0f1-2a3b-4c5d-6e7f-8a9b0c1d2e3g', 'f3a4b5c6-7d8e-9f0a-1b2c-3d4e5f6a7b8c', NULL),
-- ('b1c2d3e4-5f6a-7b8c-9d0e-1f2a3b4c5d6f', 'PRODUCT', 'Printer HP LaserJet Pro', 1, 3450.75, 3450.75, 2, 'c8d9e0f1-2a3b-4c5d-6e7f-8a9b0c1d2e3g', 'a4b5c6d7-8e9f-0a1b-2c3d-4e5f6a7b8c9d', NULL),
-- ('c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7g', 'SERVICE', 'Consulting en Marketing Digital - 4 heures', 4, 450.00, 1800.00, 3, 'c8d9e0f1-2a3b-4c5d-6e7f-8a9b0c1d2e3g', NULL, 'e8f9a0b1-2c3d-4e5f-6a7b-8c9d0e1f2a3b'),

-- -- Quote 003 lines
-- ('d3e4f5a6-7b8c-9d0e-1f2a-3b4c5d6e7f8b', 'SERVICE', 'Consulting en Marketing Digital - 10 heures', 10, 450.00, 4500.00, 1, 'd9e0f1a2-3b4c-5d6e-7f8a-9b0c1d2e3f4b', NULL, 'e8f9a0b1-2c3d-4e5f-6a7b-8c9d0e1f2a3b'),
-- ('e4f5a6b7-8c9d-0e1f-2a3b-4c5d6e7f8a9c', 'SERVICE', 'Formation Excel Avancé', 1, 3500.00, 3500.00, 2, 'd9e0f1a2-3b4c-5d6e-7f8a-9b0c1d2e3f4b', NULL, 'f9a0b1c2-3d4e-5f6a-7b8c-9d0e1f2a3b4c'),
-- ('f5a6b7c8-9d0e-1f2a-3b4c-5d6e7f8a9b0d', 'PRODUCT', 'External SSD 1TB', 1, 890.25, 890.25, 3, 'd9e0f1a2-3b4c-5d6e-7f8a-9b0c1d2e3f4b', 'b5c6d7e8-9f0a-1b2c-3d4e-5f6a7b8c9d0e', NULL),

-- -- Quote 004 lines
-- ('a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1f', 'SERVICE', 'Développement site web', 1, 15000.00, 15000.00, 1, 'e0f1a2b3-4c5d-6e7f-8a9b-0c1d2e3f4a5c', NULL, 'a0b1c2d3-4e5f-6a7b-8c9d-0e1f2a3b4c5d'),
-- ('b7c8d9e0-1f2a-3b4c-5d6e-7f8a9b0c1d2g', 'PRODUCT', 'Monitor 24" Full HD', 2, 1750.00, 3500.00, 2, 'e0f1a2b3-4c5d-6e7f-8a9b-0c1d2e3f4a5c', 'c6d7e8f9-0a1b-2c3d-4e5f-6a7b8c9d0e1f', NULL),
-- ('c8d9e0f1-2a3b-4c5d-6e7f-8a9b0c1d2e3h', 'SERVICE', 'Formation Excel Avancé', 1, 3500.00, 3500.00, 3, 'e0f1a2b3-4c5d-6e7f-8a9b-0c1d2e3f4a5c', NULL, 'f9a0b1c2-3d4e-5f6a-7b8c-9d0e1f2a3b4c'),

-- -- Quote 005 lines
-- ('d9e0f1a2-3b4c-5d6e-7f8a-9b0c1d2e3f4c', 'SERVICE', 'Maintenance Informatique - 6 heures', 6, 250.00, 1500.00, 1, 'f1a2b3c4-5d6e-7f8a-9b0c-1d2e3f4a5b6d', NULL, 'd7e8f9a0-1b2c-3d4e-5f6a-7b8c9d0e1f2a'),
-- ('e0f1a2b3-4c5d-6e7f-8a9b-0c1d2e3f4a5d', 'SERVICE', 'Support Technique - 2 heures', 2, 180.00, 360.00, 2, 'f1a2b3c4-5d6e-7f8a-9b0c-1d2e3f4a5b6d', NULL, 'b1c2d3e4-5f6a-7b8c-9d0e-1f2a3b4c5d6e'),
-- ('f1a2b3c4-5d6e-7f8a-9b0c-1d2e3f4a5b6e', 'PRODUCT', 'External SSD 1TB', 1, 890.25, 890.25, 3, 'f1a2b3c4-5d6e-7f8a-9b0c-1d2e3f4a5b6d', 'b5c6d7e8-9f0a-1b2c-3d4e-5f6a7b8c9d0e', NULL);

-- -- =====================================================
-- -- 11. INSERT PAYMENTS (5 rows)
-- -- =====================================================
-- INSERT INTO payments (
--     id, reference, amount, paymentDate, paymentMethod, notes, 
--     transactionNumber, isReconciled, AutoEntrepreneurId, invoiceId, creationDate
-- ) VALUES
-- (
--     'a2b3c4d5-6e7f-8a9b-0c1d-2e3f4a5b6c7f', 'PAY-2024-001', 12500.00, '2024-01-18 14:30:00', 'BANK_TRANSFER', 
--     'Paiement intégral facture INV-2024-001', 'TRX123456789', true, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7f', '2024-01-18 15:00:00'
-- ),
-- (
--     'b3c4d5e6-7f8a-9b0c-1d2e-3f4a5b6c7d8g', 'PAY-2024-002', 4700.00, '2024-02-01 11:20:00', 'CHECK', 
--     'Chèque n° 123456 - Banque Populaire', 'CHQ123456', true, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'd3e4f5a6-7b8c-9d0e-1f2a-3b4c5d6e7f8a', '2024-02-01 11:45:00'
-- ),
-- (
--     'c4d5e6f7-8a9b-0c1d-2e3f-4a5b6c7d8e9h', 'PAY-2024-003', 5000.00, '2024-02-08 09:15:00', 'CREDIT_CARD', 
--     'Paiement partiel carte de crédit', 'CC789012345', true, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'e4f5a6b7-8c9d-0e1f-2a3b-4c5d6e7f8a9b', '2024-02-08 09:30:00'
-- ),
-- (
--     'd5e6f7a8-9b0c-1d2e-3f4a-5b6c7d8e9f0c', 'PAY-2024-004', 2500.00, '2024-02-15 16:45:00', 'MOBILE_PAYMENT', 
--     'Paiement mobile via Orange Money', 'OM456789012', false, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'e4f5a6b7-8c9d-0e1f-2a3b-4c5d6e7f8a9b', '2024-02-15 17:00:00'
-- ),
-- (
--     'e6f7a8b9-0c1d-2e3f-4a5b-6c7d8e9f0a1d', 'PAY-2024-005', 3500.00, '2024-02-22 10:30:00', 'CASH', 
--     'Espèces déposées en agence', NULL, false, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'f5a6b7c8-9d0e-1f2a-3b4c-5d6e7f8a9b0c', '2024-02-22 10:45:00'
-- );

-- -- =====================================================
-- -- 12. INSERT EXPENSES (5 rows)
-- -- =====================================================
-- INSERT INTO expenses (
--     id, category, description, amount, date, supplier, 
--     paymentMethod, receiptUrl, isDeductible, AutoEntrepreneurId, creationDate, updateDate
-- ) VALUES
-- (
--     'f7a8b9c0-1d2e-3f4a-5b6c-7d8e9f0a1b2e', 'Loyer', 'Loyer mensuel bureau - Janvier 2024', 4500.00, '2024-01-05 00:00:00', 
--     'SCI Immobilière', 'BANK_TRANSFER', '/receipts/loyer-jan2024.pdf', true, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 
--     '2024-01-05 10:30:00', '2024-01-05 10:30:00'
-- ),
-- (
--     'a8b9c0d1-2e3f-4a5b-6c7d-8e9f0a1b2c3f', 'Fournitures', 'Achat fournitures de bureau', 1250.50, '2024-01-12 00:00:00', 
--     'Bureau Store', 'CREDIT_CARD', '/receipts/fournitures-jan2024.pdf', true, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 
--     '2024-01-12 14:15:00', '2024-01-12 14:15:00'
-- ),
-- (
--     'b9c0d1e2-3f4a-5b6c-7d8e-9f0a1b2c3d4g', 'Internet/Télécom', 'Abonnement internet et téléphone', 650.00, '2024-01-20 00:00:00', 
--     'Maroc Telecom', 'BANK_TRANSFER', '/receipts/internet-jan2024.pdf', true, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 
--     '2024-01-20 09:45:00', '2024-01-20 09:45:00'
-- ),
-- (
--     'c0d1e2f3-4a5b-6c7d-8e9f-0a1b2c3d4e5h', 'Déplacement', 'Transport et déplacements professionnels', 850.00, '2024-02-03 00:00:00', 
--     'Various', 'CASH', '/receipts/deplacements-fev2024.pdf', true, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 
--     '2024-02-03 16:20:00', '2024-02-03 16:20:00'
-- ),
-- (
--     'd1e2f3a4-5b6c-7d8e-9f0a-1b2c3d4e5f6c', 'Formation', 'Formation continue - Marketing digital', 2500.00, '2024-02-10 00:00:00', 
--     'CFP Formation', 'BANK_TRANSFER', '/receipts/formation-fev2024.pdf', true, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 
--     '2024-02-10 11:00:00', '2024-02-10 11:00:00'
-- );

-- -- =====================================================
-- -- 13. INSERT DOCUMENTS (5 rows)
-- -- =====================================================
-- INSERT INTO documents (
--     id, name, type, category, fileUrl, fileSize, 
--     uploadDate, description, AutoEntrepreneurId
-- ) VALUES
-- (
--     'e2f3a4b5-6c7d-8e9f-0a1b-2c3d4e5f6a7d', 'RC_SmartBiz.pdf', 'pdf', 'legal', '/documents/RC_SmartBiz.pdf', 245760, 
--     '2023-01-20 11:30:00', 'Registre de commerce - SmartBiz Solutions', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'
-- ),
-- (
--     'f3a4b5c6-7d8e-9f0a-1b2c-3d4e5f6a7b8e', 'Patente_2024.pdf', 'pdf', 'tax', '/documents/Patente_2024.pdf', 184320, 
--     '2024-01-05 09:15:00', 'Patente 2024 - Quittance', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'
-- ),
-- (
--     'a4b5c6d7-8e9f-0a1b-2c3d-4e5f6a7b8c9f', 'Contrat_Customer001.pdf', 'pdf', 'contract', '/documents/Contrat_Customer001.pdf', 512000, 
--     '2023-02-10 14:20:00', 'Contrat de prestation avec Hassan El Ouafi', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'
-- ),
-- (
--     'b5c6d7e8-9f0a-1b2c-3d4e-5f6a7b8c9d0g', 'Logo_Company.png', 'image', 'branding', '/uploads/logos/company-logo.png', 102400, 
--     '2023-01-15 16:45:00', 'Logo officiel de entreprise', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'
-- ),
-- (
--     'c6d7e8f9-0a1b-2c3d-4e5f-6a7b8c9d0e1h', 'Devis_Type.docx', 'doc', 'template', '/documents/Devis_Type.docx', 307200, 
--     '2023-03-01 10:00:00', 'Modèle de devis standard', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'
-- );

-- -- =====================================================
-- -- 14. INSERT TAX_DECLARATIONS (5 rows)
-- -- =====================================================
-- INSERT INTO tax_declarations (
--     id, period, year, month, totalRevenue, taxRate, 
--     taxAmount, status, dueDate, paymentDate, pdfUrl, AutoEntrepreneurId, creationDate
-- ) VALUES
-- (
--     'd7e8f9a0-1b2c-3d4e-5f6a-7b8c9d0e1f2c', 'Monthly', 2024, 1, 17500.00, 0.25, 4375.00, 
--     'PAID', '2024-02-28 23:59:59', '2024-02-15 10:30:00', 
--     '/pdf/tax/declaration-jan2024.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2024-02-01 09:00:00'
-- ),
-- (
--     'e8f9a0b1-2c3d-4e5f-6a7b-8c9d0e1f2a3d', 'Monthly', 2024, 2, 23450.50, 0.25, 5862.63, 
--     'SUBMITTED', '2024-03-31 23:59:59', NULL, 
--     '/pdf/tax/declaration-fev2024.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2024-03-01 08:45:00'
-- ),
-- (
--     'f9a0b1c2-3d4e-5f6a-7b8c-9d0e1f2a3b4e', 'Quarterly', 2023, NULL, 45890.00, 0.25, 11472.50, 
--     'PAID', '2024-01-31 23:59:59', '2024-01-25 14:20:00', 
--     '/pdf/tax/declaration-q4-2023.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2024-01-10 11:15:00'
-- ),
-- (
--     'a0b1c2d3-4e5f-6a7b-8c9d-0e1f2a3b4c5f', 'Monthly', 2024, 3, 18500.00, 0.25, 4625.00, 
--     'PENDING', '2024-04-30 23:59:59', NULL, 
--     '/pdf/tax/declaration-mars2024.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2024-04-01 10:00:00'
-- ),
-- (
--     'b1c2d3e4-5f6a-7b8c-9d0e-1f2a3b4c5d6g', 'Annual', 2023, NULL, 187450.00, 0.25, 46862.50, 
--     'PAID', '2024-04-30 23:59:59', '2024-04-25 16:30:00', 
--     '/pdf/tax/declaration-annuelle-2023.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2024-04-05 09:30:00'
-- );

-- -- =====================================================
-- -- 15. INSERT CONTRIBUTIONS (5 rows)
-- -- =====================================================
-- INSERT INTO contributions (
--     id, period, year, quarter, amount, dueDate, paymentDate, 
--     status, reference, AutoEntrepreneurId, creationDate
-- ) VALUES
-- (
--     'c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7h', 'Quarterly', 2024, 1, 3250.00, '2024-04-30 23:59:59', '2024-04-20 11:45:00', 
--     'PAID', 'CNSS-2024-Q1-001', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2024-03-15 09:00:00'
-- ),
-- (
--     'd3e4f5a6-7b8c-9d0e-1f2a-3b4c5d6e7f8c', 'Monthly', 2024, NULL, 1080.00, '2024-02-28 23:59:59', '2024-02-25 10:30:00', 
--     'PAID', 'CNSS-2024-02-001', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2024-01-20 14:15:00'
-- ),
-- (
--     'e4f5a6b7-8c9d-0e1f-2a3b-4c5d6e7f8a9d', 'Monthly', 2024, NULL, 1080.00, '2024-03-31 23:59:59', '2024-03-28 09:20:00', 
--     'PAID', 'CNSS-2024-03-001', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2024-02-20 11:30:00'
-- ),
-- (
--     'f5a6b7c8-9d0e-1f2a-3b4c-5d6e7f8a9b0e', 'Monthly', 2024, NULL, 1080.00, '2024-04-30 23:59:59', NULL, 
--     'PENDING', 'CNSS-2024-04-001', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2024-03-20 10:45:00'
-- ),
-- (
--     'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1f', 'Quarterly', 2024, 2, 3350.00, '2024-07-31 23:59:59', NULL, 
--     'PENDING', 'CNSS-2024-Q2-001', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2024-04-15 08:30:00'
-- );

-- -- =====================================================
-- -- 16. INSERT NOTIFICATIONS (5 rows)
-- -- =====================================================
-- INSERT INTO notifications (
--     id, type, title, message, associatedEntityType, associatedEntityId, 
--     isRead, priority, AutoEntrepreneurId, creationDate
-- ) VALUES
-- (
--     'b7c8d9e0-1f2a-3b4c-5d6e-7f8a9b0c1d2h', 'INVOICE', 'Nouvelle facture créée', 'La facture INV-2024-001 a été créée avec succès', 
--     'invoice', 'c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7f', true, 'medium', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2024-01-05 10:35:00'
-- ),
-- (
--     'c8d9e0f1-2a3b-4c5d-6e7f-8a9b0c1d2e3i', 'PAYMENT', 'Paiement reçu', 'Paiement de 12 500,00 MAD reçu pour la facture INV-2024-001', 
--     'payment', 'a2b3c4d5-6e7f-8a9b-0c1d-2e3f4a5b6c7f', true, 'high', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2024-01-18 15:05:00'
-- ),
-- (
--     'd9e0f1a2-3b4c-5d6e-7f8a-9b0c1d2e3f4d', 'TAX', 'Déclaration fiscale à soumettre', 'La déclaration de janvier 2024 doit être soumise avant le 28/02/2024', 
--     'tax_declaration', 'd7e8f9a0-1b2c-3d4e-5f6a-7b8c9d0e1f2c', false, 'high', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2024-02-01 09:05:00'
-- ),
-- (
--     'e0f1a2b3-4c5d-6e7f-8a9b-0c1d2e3f4a5e', 'CONTRIBUTION', 'Échéance CNSS approche', 'La contribution du 1er trimestre 2024 est due le 30/04/2024', 
--     'contribution', 'c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7h', false, 'medium', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2024-04-01 08:00:00'
-- );



use auto_entrepreneur_erp_db;




-- =====================================================
-- 1. INSERT USERS (5 regular users + 1 for autoentrepreneur)
-- =====================================================
INSERT INTO users (id, email, firstName, lastName, phone, address, creationDate, updateDate) VALUES
-- Auto-entrepreneur user (will be referenced by autoentrepreneur table)
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'contact@smartbiz.ma', 'Karim', 'Benzema', '+212 6 12 34 56 78', '15 Rue Allal Ben Abdellah, Casablanca 20000', '2026-01-15 09:30:00', '2026-02-20 14:25:00'),

-- Customer users
('b1f2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', 'hassan.elouafi@company.ma', 'Hassan', 'El Ouafi', '+212 6 23 45 67 89', '45 Boulevard Mohammed V, Rabat 10000', '2026-02-10 11:20:00', '2026-01-15 10:30:00'),
('c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7f', 'fatima.zahra@store.ma', 'Fatima Zahra', 'Benjelloun', '+212 6 34 56 78 90', '28 Rue Oued Zem, Casablanca 20200', '2026-01-05 14:45:00', '2026-02-10 16:20:00'),
('d3e4f5a6-7b8c-9d0e-1f2a-3b4c5d6e7f8a', 'mohamed.bennis@tech.ma', 'Mohamed', 'Bennis', '+212 6 45 67 89 01', '7 Avenue Hassan II, Marrakech 40000', '2026-02-12 09:15:00', '2026-01-20 11:40:00'),
('e4f5a6b7-8c9d-0e1f-2a3b-4c5d6e7f8a9b', 'laila.alami@consulting.ma', 'Laïla', 'Alami', '+212 6 56 78 90 12', '33 Rue de France, Tanger 90000', '2026-01-18 13:30:00', '2026-02-05 09:50:00'),
('f5a6b7c8-9d0e-1f2a-3b4c-5d6e7f8a9b0c', 'youssef.chraibi@resto.ma', 'Youssef', 'Chraibi', '+212 6 67 89 01 23', '12 Avenue des FAR, Fès 30000', '2026-01-22 10:00:00', '2026-01-28 15:15:00');

-- =====================================================
-- 2. INSERT AUTO_ENTREPRENEUR (Exactly 1 row)
-- =====================================================
INSERT INTO auto_entrepreneur (
    id, userId, password, businessName, activityType, taxRate, ice, 
    logo, creationDate, updateDate, passwordResetToken, passwordResetTokenExpiration
) VALUES (
    'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 
    'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 
    '$2a$12$ctoGu6I9OeQc4Z3mZyqdS.a18IBktj.GMzH7Dvk7IwwcMD3MJ93u2', -- Hashed password: "SecurePass123"
    'SmartBiz Solutions', 
    'MIXTE', 
    0.25, 
    'ICE00123456789012', 
    '/uploads/logos/smartbiz-logo.png', 
    '2026-01-15 10:00:00', 
    '2026-02-20 14:30:00', 
    NULL, 
    NULL
);

-- =====================================================
-- 3. INSERT CUSTOMERS (5 rows)
-- =====================================================
INSERT INTO customers (id, userId, ice, city, country, isActive, AutoEntrepreneurId, creationDate, updateDate) VALUES
('b7c8d9e0-1f2a-3b4c-5d6e-7f8a9b0c1d2e', 'b1f2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d', 'ICE12345678901234', 'Rabat', 'Morocco', true, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2026-02-10 11:30:00', '2026-01-15 10:45:00'),
('c8d9e0f1-2a3b-4c5d-6e7f-8a9b0c1d2e3f', 'c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7f', 'ICE23456789012345', 'Casablanca', 'Morocco', true, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2026-01-05 15:00:00', '2026-02-10 16:30:00'),
('d9e0f1a2-3b4c-5d6e-7f8a-9b0c1d2e3f4a', 'd3e4f5a6-7b8c-9d0e-1f2a-3b4c5d6e7f8a', 'ICE34567890123456', 'Marrakech', 'Morocco', true, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2026-02-12 09:30:00', '2026-01-20 11:50:00'),
('e0f1a2b3-4c5d-6e7f-8a9b-0c1d2e3f4a5b', 'e4f5a6b7-8c9d-0e1f-2a3b-4c5d6e7f8a9b', 'ICE45678901234567', 'Tanger', 'Morocco', true, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2026-01-18 13:45:00', '2026-02-05 10:00:00'),
('f1a2b3c4-5d6e-7f8a-9b0c-1d2e3f4a5b6c', 'f5a6b7c8-9d0e-1f2a-3b4c-5d6e7f8a9b0c', 'ICE56789012345678', 'Fès', 'Morocco', false, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2026-01-22 10:15:00', '2026-01-28 15:30:00');



-- =====================================================
-- 4. INSERT ITEMS (10 items - 5 products + 5 services)
-- =====================================================
INSERT INTO items (id, name, description, unit, category, isActive, creationDate, updateDate) VALUES
-- Products
('a2b3c4d5-6e7f-8a9b-0c1d-2e3f4a5b6c7d', 'Laptop Dell XPS 13', 'High-performance laptop with Intel i7, 16GB RAM, 512GB SSD', 'piece', 'Electronics', true, '2026-01-20 09:00:00', '2026-02-01 11:30:00'),
('b3c4d5e6-7f8a-9b0c-1d2e-3f4a5b6c7d8e', 'Office Chair Ergonomique', 'Ergonomic mesh chair with lumbar support', 'piece', 'Furniture', true, '2026-01-25 10:15:00', '2026-01-10 14:20:00'),
('c4d5e6f7-8a9b-0c1d-2e3f-4a5b6c7d8e9f', 'Printer HP LaserJet Pro', 'All-in-one wireless laser printer', 'piece', 'Office Equipment', true, '2026-02-01 11:30:00', '2026-02-05 09:45:00'),
('d5e6f7a8-9b0c-1d2e-3f4a-5b6c7d8e9f0a', 'External SSD 1TB', 'Portable SSD USB-C, 1TB storage', 'piece', 'Storage', true, '2026-02-10 13:45:00', '2026-01-18 16:30:00'),
('e6f7a8b9-0c1d-2e3f-4a5b-6c7d8e9f0a1b', 'Monitor 24" Full HD', 'LED monitor with HDMI and VGA ports', 'piece', 'Electronics', true, '2026-02-15 14:30:00', '2026-02-12 10:15:00'),

-- Services
('f7a8b9c0-1d2e-3f4a-5b6c-7d8e9f0a1b2c', 'Maintenance Informatique', 'Monthly computer maintenance and troubleshooting', 'hour', 'IT Services', true, '2026-01-18 08:30:00', '2026-02-08 13:20:00'),
('a8b9c0d1-2e3f-4a5b-6c7d-8e9f0a1b2c3d', 'Consulting en Marketing Digital', 'Digital marketing strategy and implementation', 'hour', 'Consulting', true, '2026-01-22 09:45:00', '2026-01-25 11:10:00'),
('b9c0d1e2-3f4a-5b6c-7d8e-9f0a1b2c3d4e', 'Formation Excel Avancé', 'Advanced Excel training with VBA', 'session', 'Training', true, '2026-02-05 10:30:00', '2026-02-15 09:30:00'),
('c0d1e2f3-4a5b-6c7d-8e9f-0a1b2c3d4e5f', 'Développement Web', 'Custom website development', 'project', 'Development', true, '2026-02-12 11:15:00', '2026-01-30 14:45:00'),
('d1e2f3a4-5b6c-7d8e-9f0a-1b2c3d4e5f6a', 'Support Technique Téléphonique', 'Phone support for software issues', 'hour', 'Support', true, '2026-02-18 13:00:00', '2026-02-03 15:50:00');

-- =====================================================
-- 5. INSERT PRODUCTS (5 rows)
-- =====================================================
INSERT INTO products (id, itemId, unitPrice, reference, stockQuantity, alertThreshold, AutoEntrepreneurId) VALUES
('e2f3a4b5-6c7d-8e9f-0a1b-2c3d4e5f6a7b', 'a2b3c4d5-6e7f-8a9b-0c1d-2e3f4a5b6c7d', 12500.00, 'DELL-XPS13-2023', 15, 5, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'),
('f3a4b5c6-7d8e-9f0a-1b2c-3d4e5f6a7b8c', 'b3c4d5e6-7f8a-9b0c-1d2e-3f4a5b6c7d8e', 2350.50, 'CHAIR-ERG-001', 28, 10, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'),
('a4b5c6d7-8e9f-0a1b-2c3d-4e5f6a7b8c9d', 'c4d5e6f7-8a9b-0c1d-2e3f-4a5b6c7d8e9f', 3450.75, 'HP-LJ-PRO-400', 12, 4, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'),
('b5c6d7e8-9f0a-1b2c-3d4e-5f6a7b8c9d0e', 'd5e6f7a8-9b0c-1d2e-3f4a-5b6c7d8e9f0a', 890.25, 'SSD-EXT-1TB', 42, 15, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'),
('c6d7e8f9-0a1b-2c3d-4e5f-6a7b8c9d0e1f', 'e6f7a8b9-0c1d-2e3f-4a5b-6c7d8e9f0a1b', 1750.00, 'MON-24-FHD', 23, 8, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d');

-- =====================================================
-- 6. INSERT SERVICES (5 rows)
-- =====================================================
INSERT INTO services (id, itemId, hourlyRate, fixedRate, estimatedDuration, AutoEntrepreneurId) VALUES
('d7e8f9a0-1b2c-3d4e-5f6a-7b8c9d0e1f2a', 'f7a8b9c0-1d2e-3f4a-5b6c-7d8e9f0a1b2c', 250.00, NULL, 60, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'),
('e8f9a0b1-2c3d-4e5f-6a7b-8c9d0e1f2a3b', 'a8b9c0d1-2e3f-4a5b-6c7d-8e9f0a1b2c3d', 450.00, NULL, 120, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'),
('f9a0b1c2-3d4e-5f6a-7b8c-9d0e1f2a3b4c', 'b9c0d1e2-3f4a-5b6c-7d8e-9f0a1b2c3d4e', NULL, 3500.00, 480, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'),
('a0b1c2d3-4e5f-6a7b-8c9d-0e1f2a3b4c5d', 'c0d1e2f3-4a5b-6c7d-8e9f-0a1b2c3d4e5f', NULL, 15000.00, 2400, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'),
('b1c2d3e4-5f6a-7b8c-9d0e-1f2a3b4c5d6e', 'd1e2f3a4-5b6c-7d8e-9f0a-1b2c3d4e5f6a', 180.00, NULL, 30, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d');

-- =====================================================
-- 7. INSERT INVOICES (5 rows)
-- =====================================================
INSERT INTO invoices (
    id, invoiceNumber, issueDate, dueDate, status, subtotal, 
    discount, totalAmount, paidAmount, remainingAmount, notes, 
    pdfUrl, AutoEntrepreneurId, customerId, creationDate, updateDate, quoteId
) VALUES
(
    'c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7f', 'INV-2026-001', '2026-01-05 10:00:00', '2026-02-05 10:00:00', 'PAID', 
    12500.00, 0.00, 12500.00, 12500.00, 0.00, 
    'Facture pour achat laptop Dell XPS 13', 
    '/pdf/invoices/INV-2026-001.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'b7c8d9e0-1f2a-3b4c-5d6e-7f8a9b0c1d2e', 
    '2026-01-05 10:30:00', '2026-01-20 14:25:00', NULL
),
(
    'd3e4f5a6-7b8c-9d0e-1f2a-3b4c5d6e7f8a', 'INV-2026-002', '2026-01-15 11:30:00', '2026-02-15 11:30:00', 'PAID', 
    4700.00, 0.00, 4700.00, 4700.00, 0.00, 
    'Fournitures de bureau et matériel', 
    '/pdf/invoices/INV-2026-002.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'c8d9e0f1-2a3b-4c5d-6e7f-8a9b0c1d2e3f', 
    '2026-01-15 12:00:00', '2026-02-01 09:15:00', NULL
),
(
    'e4f5a6b7-8c9d-0e1f-2a3b-4c5d6e7f8a9b', 'INV-2026-003', '2026-02-01 09:15:00', '2026-03-01 09:15:00', 'PARTIALLY_PAID', 
    8900.50, 5.00, 8455.48, 5000.00, 3455.48, 
    'Services de conseil et formation - 5% de remise commerciale', 
    '/pdf/invoices/INV-2026-003.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'd9e0f1a2-3b4c-5d6e-7f8a-9b0c1d2e3f4a', 
    '2026-02-01 09:45:00', '2026-02-10 11:20:00', NULL
),
(
    'f5a6b7c8-9d0e-1f2a-3b4c-5d6e7f8a9b0c', 'INV-2026-004', '2026-02-10 14:30:00', '2026-03-10 14:30:00', 'SENT', 
    15000.00, 0.00, 15000.00, 0.00, 15000.00, 
    'Développement site web e-commerce', 
    '/pdf/invoices/INV-2026-004.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'e0f1a2b3-4c5d-6e7f-8a9b-0c1d2e3f4a5b', 
    '2026-02-10 15:00:00', '2026-02-10 15:00:00', NULL
),
(
    'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1e', 'INV-2026-005', '2026-02-20 08:45:00', '2026-03-20 08:45:00', 'DRAFT', 
    3250.00, 0.00, 3250.00, 0.00, 3250.00, 
    'Maintenance informatique et support', 
    '/pdf/invoices/INV-2026-005.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'f1a2b3c4-5d6e-7f8a-9b0c-1d2e3f4a5b6c', 
    '2026-02-20 09:15:00', '2026-02-20 09:15:00', NULL
);

-- =====================================================
-- 8. INSERT QUOTES (5 rows)
-- =====================================================
INSERT INTO quotes (
    id, quoteNumber, issueDate, validityDate, status, subtotal, 
    taxAmount, totalAmount, notes, pdfUrl, AutoEntrepreneurId, 
    customerId, creationDate, updateDate, invoiceId
) VALUES
(
    'b7c8d9e0-1f2a-3b4c-5d6e-7f8a9b0c1d2f', 'DEV-2026-001', '2026-01-02 09:00:00', '2026-02-02 09:00:00', 'CONVERTED', 
    12500.00, 0.00, 12500.00, 
    'Devis pour achat laptop - accepté et converti en facture', 
    '/pdf/quotes/DEV-2026-001.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'b7c8d9e0-1f2a-3b4c-5d6e-7f8a9b0c1d2e', 
    '2026-01-02 09:30:00', '2026-01-05 11:20:00', 'c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7f'
),
(
    'c8d9e0f1-2a3b-4c5d-6e7f-8a9b0c1d2e3g', 'DEV-2026-002', '2026-01-10 10:15:00', '2026-02-10 10:15:00', 'ACCEPTED', 
    5200.00, 0.00, 5200.00, 
    'Devis pour équipement bureau et fournitures', 
    '/pdf/quotes/DEV-2026-002.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'c8d9e0f1-2a3b-4c5d-6e7f-8a9b0c1d2e3f', 
    '2026-01-10 10:45:00', '2026-01-12 14:30:00', NULL
),
(
    'd9e0f1a2-3b4c-5d6e-7f8a-9b0c1d2e3f4b', 'DEV-2026-003', '2026-01-25 11:30:00', '2026-02-25 11:30:00', 'SENT', 
    8900.50, 0.00, 8900.50, 
    'Proposition de services de conseil et formation', 
    '/pdf/quotes/DEV-2026-003.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'd9e0f1a2-3b4c-5d6e-7f8a-9b0c1d2e3f4a', 
    '2026-01-25 12:00:00', '2026-01-25 12:00:00', NULL
),
(
    'e0f1a2b3-4c5d-6e7f-8a9b-0c1d2e3f4a5c', 'DEV-2026-004', '2026-02-05 13:45:00', '2026-03-05 13:45:00', 'SENT', 
    17500.00, 0.00, 17500.00, 
    'Devis pour développement site web et formation', 
    '/pdf/quotes/DEV-2026-004.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'e0f1a2b3-4c5d-6e7f-8a9b-0c1d2e3f4a5b', 
    '2026-02-05 14:15:00', '2026-02-05 14:15:00', NULL
),
(
    'f1a2b3c4-5d6e-7f8a-9b0c-1d2e3f4a5b6d', 'DEV-2026-005', '2026-02-15 08:30:00', '2026-03-15 08:30:00', 'DRAFT', 
    1800.00, 0.00, 1800.00, 
    'Devis pour support technique mensuel', 
    '/pdf/quotes/DEV-2026-005.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'f1a2b3c4-5d6e-7f8a-9b0c-1d2e3f4a5b6c', 
    '2026-02-15 09:00:00', '2026-02-15 09:00:00', NULL
);

-- Update invoice 001 to link to quote 001
UPDATE invoices SET quoteId = 'b7c8d9e0-1f2a-3b4c-5d6e-7f8a9b0c1d2f' WHERE id = 'c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7f';

-- =====================================================
-- 9. INSERT INVOICE_LINES (15 rows - 3 per invoice)
-- =====================================================
INSERT INTO invoice_lines (
    id, lineType, description, quantity, unitPrice, totalPrice, 
    `order`, invoiceId, productId, serviceId
) VALUES
-- Invoice 001 lines
('a2b3c4d5-6e7f-8a9b-0c1d-2e3f4a5b6c7e', 'PRODUCT', 'Laptop Dell XPS 13 (i7, 16GB, 512GB)', 1, 12500.00, 12500.00, 1, 'c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7f', 'e2f3a4b5-6c7d-8e9f-0a1b-2c3d4e5f6a7b', NULL),
('b3c4d5e6-7f8a-9b0c-1d2e-3f4a5b6c7d8f', 'PRODUCT', 'Monitor 24" Full HD', 2, 1750.00, 3500.00, 2, 'c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7f', 'c6d7e8f9-0a1b-2c3d-4e5f-6a7b8c9d0e1f', NULL),
('c4d5e6f7-8a9b-0c1d-2e3f-4a5b6c7d8e9g', 'PRODUCT', 'External SSD 1TB', 1, 890.25, 890.25, 3, 'c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7f', 'b5c6d7e8-9f0a-1b2c-3d4e-5f6a7b8c9d0e', NULL),

-- Invoice 002 lines
('d5e6f7a8-9b0c-1d2e-3f4a-5b6c7d8e9f0b', 'PRODUCT', 'Office Chair Ergonomique', 2, 2350.50, 4701.00, 1, 'd3e4f5a6-7b8c-9d0e-1f2a-3b4c5d6e7f8a', 'f3a4b5c6-7d8e-9f0a-1b2c-3d4e5f6a7b8c', NULL),
('e6f7a8b9-0c1d-2e3f-4a5b-6c7d8e9f0a1c', 'PRODUCT', 'External SSD 1TB', 3, 890.25, 2670.75, 2, 'd3e4f5a6-7b8c-9d0e-1f2a-3b4c5d6e7f8a', 'b5c6d7e8-9f0a-1b2c-3d4e-5f6a7b8c9d0e', NULL),
('f7a8b9c0-1d2e-3f4a-5b6c-7d8e9f0a1b2d', 'PRODUCT', 'Printer HP LaserJet Pro', 1, 3450.75, 3450.75, 3, 'd3e4f5a6-7b8c-9d0e-1f2a-3b4c5d6e7f8a', 'a4b5c6d7-8e9f-0a1b-2c3d-4e5f6a7b8c9d', NULL),

-- Invoice 003 lines
('a8b9c0d1-2e3f-4a5b-6c7d-8e9f0a1b2c3e', 'SERVICE', 'Consulting en Marketing Digital - 10 heures', 10, 450.00, 4500.00, 1, 'e4f5a6b7-8c9d-0e1f-2a3b-4c5d6e7f8a9b', NULL, 'e8f9a0b1-2c3d-4e5f-6a7b-8c9d0e1f2a3b'),
('b9c0d1e2-3f4a-5b6c-7d8e-9f0a1b2c3d4f', 'SERVICE', 'Formation Excel Avancé - 1 session', 1, 3500.00, 3500.00, 2, 'e4f5a6b7-8c9d-0e1f-2a3b-4c5d6e7f8a9b', NULL, 'f9a0b1c2-3d4e-5f6a-7b8c-9d0e1f2a3b4c'),
('c0d1e2f3-4a5b-6c7d-8e9f-0a1b2c3d4e5g', 'PRODUCT', 'External SSD 1TB', 1, 890.25, 890.25, 3, 'e4f5a6b7-8c9d-0e1f-2a3b-4c5d6e7f8a9b', 'b5c6d7e8-9f0a-1b2c-3d4e-5f6a7b8c9d0e', NULL),

-- Invoice 004 lines
('d1e2f3a4-5b6c-7d8e-9f0a-1b2c3d4e5f6b', 'SERVICE', 'Développement site web e-commerce', 1, 15000.00, 15000.00, 1, 'f5a6b7c8-9d0e-1f2a-3b4c-5d6e7f8a9b0c', NULL, 'a0b1c2d3-4e5f-6a7b-8c9d-0e1f2a3b4c5d'),
('e2f3a4b5-6c7d-8e9f-0a1b-2c3d4e5f6a7c', 'PRODUCT', 'Laptop Dell XPS 13', 1, 12500.00, 12500.00, 2, 'f5a6b7c8-9d0e-1f2a-3b4c-5d6e7f8a9b0c', 'e2f3a4b5-6c7d-8e9f-0a1b-2c3d4e5f6a7b', NULL),
('f3a4b5c6-7d8e-9f0a-1b2c-3d4e5f6a7b8d', 'PRODUCT', 'Office Chair Ergonomique', 1, 2350.50, 2350.50, 3, 'f5a6b7c8-9d0e-1f2a-3b4c-5d6e7f8a9b0c', 'f3a4b5c6-7d8e-9f0a-1b2c-3d4e5f6a7b8c', NULL),

-- Invoice 005 lines
('a4b5c6d7-8e9f-0a1b-2c3d-4e5f6a7b8c9e', 'SERVICE', 'Maintenance Informatique - 8 heures', 8, 250.00, 2000.00, 1, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1e', NULL, 'd7e8f9a0-1b2c-3d4e-5f6a-7b8c9d0e1f2a'),
('b5c6d7e8-9f0a-1b2c-3d4e-5f6a7b8c9d0f', 'PRODUCT', 'Printer HP LaserJet Pro', 1, 3450.75, 3450.75, 2, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1e', 'a4b5c6d7-8e9f-0a1b-2c3d-4e5f6a7b8c9d', NULL),
('c6d7e8f9-0a1b-2c3d-4e5f-6a7b8c9d0e1g', 'SERVICE', 'Consulting en Marketing Digital - 2 heures', 2, 450.00, 900.00, 3, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1e', NULL, 'e8f9a0b1-2c3d-4e5f-6a7b-8c9d0e1f2a3b');

-- =====================================================
-- 10. INSERT QUOTE_LINES (15 rows - 3 per quote)
-- =====================================================
INSERT INTO quote_lines (
    id, lineType, description, quantity, unitPrice, totalPrice, 
    `order`, quoteId, productId, serviceId
) VALUES
-- Quote 001 lines
('d7e8f9a0-1b2c-3d4e-5f6a-7b8c9d0e1f2b', 'PRODUCT', 'Laptop Dell XPS 13', 1, 12500.00, 12500.00, 1, 'b7c8d9e0-1f2a-3b4c-5d6e-7f8a9b0c1d2f', 'e2f3a4b5-6c7d-8e9f-0a1b-2c3d4e5f6a7b', NULL),
('e8f9a0b1-2c3d-4e5f-6a7b-8c9d0e1f2a3c', 'PRODUCT', 'External SSD 1TB', 2, 890.25, 1780.50, 2, 'b7c8d9e0-1f2a-3b4c-5d6e-7f8a9b0c1d2f', 'b5c6d7e8-9f0a-1b2c-3d4e-5f6a7b8c9d0e', NULL),
('f9a0b1c2-3d4e-5f6a-7b8c-9d0e1f2a3b4d', 'PRODUCT', 'Monitor 24" Full HD', 1, 1750.00, 1750.00, 3, 'b7c8d9e0-1f2a-3b4c-5d6e-7f8a9b0c1d2f', 'c6d7e8f9-0a1b-2c3d-4e5f-6a7b8c9d0e1f', NULL),

-- Quote 002 lines
('a0b1c2d3-4e5f-6a7b-8c9d-0e1f2a3b4c5e', 'PRODUCT', 'Office Chair Ergonomique', 2, 2350.50, 4701.00, 1, 'c8d9e0f1-2a3b-4c5d-6e7f-8a9b0c1d2e3g', 'f3a4b5c6-7d8e-9f0a-1b2c-3d4e5f6a7b8c', NULL),
('b1c2d3e4-5f6a-7b8c-9d0e-1f2a3b4c5d6f', 'PRODUCT', 'Printer HP LaserJet Pro', 1, 3450.75, 3450.75, 2, 'c8d9e0f1-2a3b-4c5d-6e7f-8a9b0c1d2e3g', 'a4b5c6d7-8e9f-0a1b-2c3d-4e5f6a7b8c9d', NULL),
('c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7g', 'SERVICE', 'Consulting en Marketing Digital - 4 heures', 4, 450.00, 1800.00, 3, 'c8d9e0f1-2a3b-4c5d-6e7f-8a9b0c1d2e3g', NULL, 'e8f9a0b1-2c3d-4e5f-6a7b-8c9d0e1f2a3b'),

-- Quote 003 lines
('d3e4f5a6-7b8c-9d0e-1f2a-3b4c5d6e7f8b', 'SERVICE', 'Consulting en Marketing Digital - 10 heures', 10, 450.00, 4500.00, 1, 'd9e0f1a2-3b4c-5d6e-7f8a-9b0c1d2e3f4b', NULL, 'e8f9a0b1-2c3d-4e5f-6a7b-8c9d0e1f2a3b'),
('e4f5a6b7-8c9d-0e1f-2a3b-4c5d6e7f8a9c', 'SERVICE', 'Formation Excel Avancé', 1, 3500.00, 3500.00, 2, 'd9e0f1a2-3b4c-5d6e-7f8a-9b0c1d2e3f4b', NULL, 'f9a0b1c2-3d4e-5f6a-7b8c-9d0e1f2a3b4c'),
('f5a6b7c8-9d0e-1f2a-3b4c-5d6e7f8a9b0d', 'PRODUCT', 'External SSD 1TB', 1, 890.25, 890.25, 3, 'd9e0f1a2-3b4c-5d6e-7f8a-9b0c1d2e3f4b', 'b5c6d7e8-9f0a-1b2c-3d4e-5f6a7b8c9d0e', NULL),

-- Quote 004 lines
('a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1f', 'SERVICE', 'Développement site web', 1, 15000.00, 15000.00, 1, 'e0f1a2b3-4c5d-6e7f-8a9b-0c1d2e3f4a5c', NULL, 'a0b1c2d3-4e5f-6a7b-8c9d-0e1f2a3b4c5d'),
('b7c8d9e0-1f2a-3b4c-5d6e-7f8a9b0c1d2g', 'PRODUCT', 'Monitor 24" Full HD', 2, 1750.00, 3500.00, 2, 'e0f1a2b3-4c5d-6e7f-8a9b-0c1d2e3f4a5c', 'c6d7e8f9-0a1b-2c3d-4e5f-6a7b8c9d0e1f', NULL),
('c8d9e0f1-2a3b-4c5d-6e7f-8a9b0c1d2e3h', 'SERVICE', 'Formation Excel Avancé', 1, 3500.00, 3500.00, 3, 'e0f1a2b3-4c5d-6e7f-8a9b-0c1d2e3f4a5c', NULL, 'f9a0b1c2-3d4e-5f6a-7b8c-9d0e1f2a3b4c'),

-- Quote 005 lines
('d9e0f1a2-3b4c-5d6e-7f8a-9b0c1d2e3f4c', 'SERVICE', 'Maintenance Informatique - 6 heures', 6, 250.00, 1500.00, 1, 'f1a2b3c4-5d6e-7f8a-9b0c-1d2e3f4a5b6d', NULL, 'd7e8f9a0-1b2c-3d4e-5f6a-7b8c9d0e1f2a'),
('e0f1a2b3-4c5d-6e7f-8a9b-0c1d2e3f4a5d', 'SERVICE', 'Support Technique - 2 heures', 2, 180.00, 360.00, 2, 'f1a2b3c4-5d6e-7f8a-9b0c-1d2e3f4a5b6d', NULL, 'b1c2d3e4-5f6a-7b8c-9d0e-1f2a3b4c5d6e'),
('f1a2b3c4-5d6e-7f8a-9b0c-1d2e3f4a5b6e', 'PRODUCT', 'External SSD 1TB', 1, 890.25, 890.25, 3, 'f1a2b3c4-5d6e-7f8a-9b0c-1d2e3f4a5b6d', 'b5c6d7e8-9f0a-1b2c-3d4e-5f6a7b8c9d0e', NULL);

-- =====================================================
-- 11. INSERT PAYMENTS (5 rows)
-- =====================================================
INSERT INTO payments (
    id, reference, amount, paymentDate, paymentMethod, notes, 
    transactionNumber, isReconciled, AutoEntrepreneurId, invoiceId, creationDate
) VALUES
(
    'a2b3c4d5-6e7f-8a9b-0c1d-2e3f4a5b6c7f', 'PAY-2026-001', 12500.00, '2026-01-18 14:30:00', 'BANK_TRANSFER', 
    'Paiement intégral facture INV-2026-001', 'TRX123456789', true, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7f', '2026-01-18 15:00:00'
),
(
    'b3c4d5e6-7f8a-9b0c-1d2e-3f4a5b6c7d8g', 'PAY-2026-002', 4700.00, '2026-02-01 11:20:00', 'CHECK', 
    'Chèque n° 123456 - Banque Populaire', 'CHQ123456', true, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'd3e4f5a6-7b8c-9d0e-1f2a-3b4c5d6e7f8a', '2026-02-01 11:45:00'
),
(
    'c4d5e6f7-8a9b-0c1d-2e3f-4a5b6c7d8e9h', 'PAY-2026-003', 5000.00, '2026-02-08 09:15:00', 'CREDIT_CARD', 
    'Paiement partiel carte de crédit', 'CC789012345', true, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'e4f5a6b7-8c9d-0e1f-2a3b-4c5d6e7f8a9b', '2026-02-08 09:30:00'
),
(
    'd5e6f7a8-9b0c-1d2e-3f4a-5b6c7d8e9f0c', 'PAY-2026-004', 2500.00, '2026-02-15 16:45:00', 'MOBILE_PAYMENT', 
    'Paiement mobile via Orange Money', 'OM456789012', false, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'e4f5a6b7-8c9d-0e1f-2a3b-4c5d6e7f8a9b', '2026-02-15 17:00:00'
),
(
    'e6f7a8b9-0c1d-2e3f-4a5b-6c7d8e9f0a1d', 'PAY-2026-005', 3500.00, '2026-02-22 10:30:00', 'CASH', 
    'Espèces déposées en agence', NULL, false, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 'f5a6b7c8-9d0e-1f2a-3b4c-5d6e7f8a9b0c', '2026-02-22 10:45:00'
);

-- =====================================================
-- 12. INSERT EXPENSES (5 rows)
-- =====================================================
INSERT INTO expenses (
    id, category, description, amount, date, supplier, 
    paymentMethod, receiptUrl, isDeductible, AutoEntrepreneurId, creationDate, updateDate
) VALUES
(
    'f7a8b9c0-1d2e-3f4a-5b6c-7d8e9f0a1b2e', 'Loyer', 'Loyer mensuel bureau - Janvier 2026', 4500.00, '2026-01-05 00:00:00', 
    'SCI Immobilière', 'BANK_TRANSFER', '/receipts/loyer-jan2026.pdf', true, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 
    '2026-01-05 10:30:00', '2026-01-05 10:30:00'
),
(
    'a8b9c0d1-2e3f-4a5b-6c7d-8e9f0a1b2c3f', 'Fournitures', 'Achat fournitures de bureau', 1250.50, '2026-01-12 00:00:00', 
    'Bureau Store', 'CREDIT_CARD', '/receipts/fournitures-jan2026.pdf', true, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 
    '2026-01-12 14:15:00', '2026-01-12 14:15:00'
),
(
    'b9c0d1e2-3f4a-5b6c-7d8e-9f0a1b2c3d4g', 'Internet/Télécom', 'Abonnement internet et téléphone', 650.00, '2026-01-20 00:00:00', 
    'Maroc Telecom', 'BANK_TRANSFER', '/receipts/internet-jan2026.pdf', true, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 
    '2026-01-20 09:45:00', '2026-01-20 09:45:00'
),
(
    'c0d1e2f3-4a5b-6c7d-8e9f-0a1b2c3d4e5h', 'Déplacement', 'Transport et déplacements professionnels', 850.00, '2026-02-03 00:00:00', 
    'Various', 'CASH', '/receipts/deplacements-fev2026.pdf', true, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 
    '2026-02-03 16:20:00', '2026-02-03 16:20:00'
),
(
    'd1e2f3a4-5b6c-7d8e-9f0a-1b2c3d4e5f6c', 'Formation', 'Formation continue - Marketing digital', 2500.00, '2026-02-10 00:00:00', 
    'CFP Formation', 'BANK_TRANSFER', '/receipts/formation-fev2026.pdf', true, 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', 
    '2026-02-10 11:00:00', '2026-02-10 11:00:00'
);

-- =====================================================
-- 13. INSERT DOCUMENTS (5 rows)
-- =====================================================
INSERT INTO documents (
    id, name, type, category, fileUrl, fileSize, 
    uploadDate, description, AutoEntrepreneurId
) VALUES
(
    'e2f3a4b5-6c7d-8e9f-0a1b-2c3d4e5f6a7d', 'RC_SmartBiz.pdf', 'pdf', 'legal', '/documents/RC_SmartBiz.pdf', 245760, 
    '2026-01-20 11:30:00', 'Registre de commerce - SmartBiz Solutions', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'
),
(
    'f3a4b5c6-7d8e-9f0a-1b2c-3d4e5f6a7b8e', 'Patente_2026.pdf', 'pdf', 'tax', '/documents/Patente_2026.pdf', 184320, 
    '2026-01-05 09:15:00', 'Patente 2026 - Quittance', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'
),
(
    'a4b5c6d7-8e9f-0a1b-2c3d-4e5f6a7b8c9f', 'Contrat_Customer001.pdf', 'pdf', 'contract', '/documents/Contrat_Customer001.pdf', 512000, 
    '2026-02-10 14:20:00', 'Contrat de prestation avec Hassan El Ouafi', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'
),
(
    'b5c6d7e8-9f0a-1b2c-3d4e-5f6a7b8c9d0g', 'Logo_Company.png', 'image', 'branding', '/uploads/logos/company-logo.png', 102400, 
    '2026-01-15 16:45:00', 'Logo officiel de entreprise', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'
),
(
    'c6d7e8f9-0a1b-2c3d-4e5f-6a7b8c9d0e1h', 'Devis_Type.docx', 'doc', 'template', '/documents/Devis_Type.docx', 307200, 
    '2026-01-01 10:00:00', 'Modèle de devis standard', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d'
);

-- =====================================================
-- 14. INSERT TAX_DECLARATIONS (5 rows)
-- =====================================================
INSERT INTO tax_declarations (
    id, period, year, month, totalRevenue, taxRate, 
    taxAmount, status, dueDate, paymentDate, pdfUrl, AutoEntrepreneurId, creationDate
) VALUES

(
    'd7e8f9a0-1b2c-3d4e-5f6a-7b8c9d0e1f2c', 'Monthly', 2024, 1, 17500.00, 0.25, 4375.00, 
    'PAID', '2024-02-28 23:59:59', '2024-02-15 10:30:00', 
    '/pdf/tax/declaration-jan2024.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2024-02-01 09:00:00'
),
(
    'e8f9a0b1-2c3d-4e5f-6a7b-8c9d0e1f2a3d', 'Monthly', 2024, 2, 23450.50, 0.25, 5862.63, 
    'SUBMITTED', '2024-03-31 23:59:59', NULL, 
    '/pdf/tax/declaration-fev2024.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2024-03-01 08:45:00'
),
(
    'f9a0b1c2-3d4e-5f6a-7b8c-9d0e1f2a3b4e', 'Quarterly', 2023, NULL, 45890.00, 0.25, 11472.50, 
    'PAID', '2024-01-31 23:59:59', '2024-01-25 14:20:00', 
    '/pdf/tax/declaration-q4-2023.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2024-01-10 11:15:00'
),
(
    'a0b1c2d3-4e5f-6a7b-8c9d-0e1f2a3b4c5f', 'Monthly', 2024, 3, 18500.00, 0.25, 4625.00, 
    'PENDING', '2024-04-30 23:59:59', NULL, 
    '/pdf/tax/declaration-mars2024.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2024-04-01 10:00:00'
),
(
    'b1c2d3e4-5f6a-7b8c-9d0e-1f2a3b4c5d6g', 'Annual', 2023, NULL, 187450.00, 0.25, 46862.50, 
    'PAID', '2024-04-30 23:59:59', '2024-04-25 16:30:00', 
    '/pdf/tax/declaration-annuelle-2023.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2024-04-05 09:30:00'
);


-- (
--     'd7e8f9a0-1b2c-3d4e-5f6a-7b8c9d0e1f2c', 'Monthly', 2026, 1, 17500.00, 0.25, 4375.00, 
--     'PAID', '2026-02-28 23:59:59', '2026-02-15 10:30:00', 
--     '/pdf/tax/declaration-jan2026.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2026-02-01 09:00:00'
-- ),
-- (
--     'e8f9a0b1-2c3d-4e5f-6a7b-8c9d0e1f2a3d', 'Monthly', 2026, 2, 23450.50, 0.25, 5862.63, 
--     'SUBMITTED', '2026-03-31 23:59:59', NULL, 
--     '/pdf/tax/declaration-fev2026.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2026-03-01 08:45:00'
-- ),
-- (
--     'f9a0b1c2-3d4e-5f6a-7b8c-9d0e1f2a3b4e', 'Quarterly', 2025, NULL, 45890.00, 0.25, 11472.50, 
--     'PAID', '2026-01-31 23:59:59', '2026-01-25 14:20:00', 
--     '/pdf/tax/declaration-q4-2025.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2026-01-10 11:15:00'
-- ),
-- (
--     'a0b1c2d3-4e5f-6a7b-8c9d-0e1f2a3b4c5f', 'Monthly', 2026, 3, 18500.00, 0.25, 4625.00, 
--     'PENDING', '2026-04-30 23:59:59', NULL, 
--     '/pdf/tax/declaration-mars2026.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2026-04-01 10:00:00'
-- ),
-- (
--     'b1c2d3e4-5f6a-7b8c-9d0e-1f2a3b4c5d6g', 'Annual', 2025, NULL, 187450.00, 0.25, 46862.50, 
--     'PAID', '2026-04-30 23:59:59', '2026-04-25 16:30:00', 
--     '/pdf/tax/declaration-annuelle-2025.pdf', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2026-04-05 09:30:00'
-- );

-- =====================================================
-- 15. INSERT CONTRIBUTIONS (5 rows)
-- =====================================================
INSERT INTO contributions (
    id, period, year, quarter, amount, dueDate, paymentDate, 
    status, reference, AutoEntrepreneurId, creationDate
) VALUES
(
    'c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7h', 'Quarterly', 2026, 1, 3250.00, '2026-04-30 23:59:59', '2026-04-20 11:45:00', 
    'PAID', 'CNSS-2026-Q1-001', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2026-03-15 09:00:00'
),
(
    'd3e4f5a6-7b8c-9d0e-1f2a-3b4c5d6e7f8c', 'Monthly', 2026, NULL, 1080.00, '2026-02-28 23:59:59', '2026-02-25 10:30:00', 
    'PAID', 'CNSS-2026-02-001', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2026-01-20 14:15:00'
),
(
    'e4f5a6b7-8c9d-0e1f-2a3b-4c5d6e7f8a9d', 'Monthly', 2026, NULL, 1080.00, '2026-03-31 23:59:59', '2026-03-28 09:20:00', 
    'PAID', 'CNSS-2026-03-001', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2026-02-20 11:30:00'
),
(
    'f5a6b7c8-9d0e-1f2a-3b4c-5d6e7f8a9b0e', 'Monthly', 2026, NULL, 1080.00, '2026-04-30 23:59:59', NULL, 
    'PENDING', 'CNSS-2026-04-001', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2026-03-20 10:45:00'
),
(
    'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1f', 'Quarterly', 2026, 2, 3350.00, '2026-07-31 23:59:59', NULL, 
    'PENDING', 'CNSS-2026-Q2-001', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2026-04-15 08:30:00'
);

-- =====================================================
-- 16. INSERT NOTIFICATIONS (5 rows)
-- =====================================================
INSERT INTO notifications (
    id, type, title, message, associatedEntityType, associatedEntityId, 
    isRead, priority, AutoEntrepreneurId, creationDate
) VALUES
(
    'b7c8d9e0-1f2a-3b4c-5d6e-7f8a9b0c1d2h', 'INVOICE', 'Nouvelle facture créée', 'La facture INV-2026-001 a été créée avec succès', 
    'invoice', 'c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7f', true, 'medium', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2026-01-05 10:35:00'
),
(
    'c8d9e0f1-2a3b-4c5d-6e7f-8a9b0c1d2e3i', 'PAYMENT', 'Paiement reçu', 'Paiement de 12 500,00 MAD reçu pour la facture INV-2026-001', 
    'payment', 'a2b3c4d5-6e7f-8a9b-0c1d-2e3f4a5b6c7f', true, 'high', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2026-01-18 15:05:00'
),
(
    'd9e0f1a2-3b4c-5d6e-7f8a-9b0c1d2e3f4d', 'TAX', 'Déclaration fiscale à soumettre', 'La déclaration de janvier 2026 doit être soumise avant le 28/02/2026', 
    'tax_declaration', 'd7e8f9a0-1b2c-3d4e-5f6a-7b8c9d0e1f2c', false, 'high', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2026-02-01 09:05:00'
),
(
    'e0f1a2b3-4c5d-6e7f-8a9b-0c1d2e3f4a5e', 'CONTRIBUTION', 'Échéance CNSS approche', 'La contribution du 1er trimestre 2026 est due le 30/04/2026', 
    'contribution', 'c2d3e4f5-6a7b-8c9d-0e1f-2a3b4c5d6e7h', false, 'medium', 'a6b7c8d9-0e1f-2a3b-4c5d-6e7f8a9b0c1d', '2026-04-01 08:00:00'
);