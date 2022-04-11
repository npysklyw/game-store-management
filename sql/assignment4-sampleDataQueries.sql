-- Insert into stock:
INSERT stock values ((select Name from videogame WHERE ItemID = 12 ),56,(select ItemID from videogame WHERE ItemID = 12),8);

-- Creating an advertisement:
INSERT INTO mysqldata.advert
VALUES(11,(SELECT BranchID FROM branch WHERE BranchID=1 ),"Arcane",217, current_date() );


-- Inserting an employee into the database:
INSERT INTO mysqldata.employeeaddress 
VALUES("Vi", "123 Piltover");

-- Inserting an employee
INSERT INTO mysqldata.employeedetails(EmployeeID, Address, BranchID)
VALUES (251,(SELECT Address FROM employeeaddress WHERE Name="Vi" ), (SELECT BranchID FROM branch WHERE BranchID=5 ));

-- Inserting customer
INSERT INTO customername VALUES(201,5);
INSERT INTO customer VALUES("647858489", "Jinx", 201);