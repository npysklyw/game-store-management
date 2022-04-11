
use mysqldata;

CREATE TABLE Branch (
   BranchID int NOT NULL,
	Address varchar(100) NOT NULL,
    PRIMARY KEY (BranchID)
);

CREATE TABLE CustomerName (
    CustomerID int NOT NULL,
    BranchID int NOT NULL,
    PRIMARY KEY (CustomerID),
	FOREIGN KEY (BranchID) REFERENCES Branch(BranchID)
);

CREATE TABLE Customer (
    PhoneNumber varchar(20),
    Name varchar(20) NOT NULL,
    CustomerID int NOT NULL,
    PRIMARY KEY (Name,PhoneNumber),
	FOREIGN KEY (CustomerID) REFERENCES CustomerName(CustomerID)
);

CREATE TABLE EmployeeDetails (
    EmployeeID int NOT NULL,
    Address varchar(80),
    BranchID int NOT NULL,
    PRIMARY KEY (EmployeeID),
	FOREIGN KEY (BranchID) REFERENCES Branch(BranchID),
    FOREIGN KEY (Address) REFERENCES EmployeeAddress(Address)
);

CREATE TABLE EmployeeAddress (
    Name varchar(60),
    Address varchar(60) NOT NULL,
    PRIMARY KEY (Address)
);

CREATE TABLE Sales (
    OrderID int NOT NULL,
    Revenue double,
    Date date,
    CustomerID int,
    BranchID int NOT NULL,
    PRIMARY KEY (OrderID,BranchID),
	FOREIGN KEY (BranchID) REFERENCES Branch(BranchID),
    FOREIGN KEY (CustomerID) REFERENCES CustomerName(CustomerID)
);

CREATE TABLE Genre (
    GenreName varchar(15),
    Type varchar(40) NOT NULL,
    PRIMARY KEY (GenreName)
);

CREATE TABLE Advert (
    AdvertID int NOT NULL,
    BranchID int NOT NULL,
    Headline varchar(40),
    PaymentReceived double,
    Date date,
    PRIMARY KEY (AdvertID, BranchID),
    FOREIGN KEY (BranchID) REFERENCES Branch(BranchID)
);

CREATE TABLE Console (
    ItemID int NOT NULL,
    Name varchar(40),
    Price double,
    Manufacturer varchar(15),
    PRIMARY KEY (ItemID)
);

CREATE TABLE VideoGame (
    ItemID int NOT NULL,
    Name varchar(150),
    Price double,
    ReleaseDate varchar(30),
    GenreName varchar(60),
    PRIMARY KEY (ItemID),
    FOREIGN KEY (GenreName) REFERENCES Genre(GenreName)
);

CREATE TABLE Stock (
    StockName varchar(150),
    StockAmount int,
    ItemID int NOT NULL,
    PRIMARY KEY (ItemID,BranchID),
    FOREIGN KEY (ItemID) REFERENCES VideoGame(ItemID)
);

CREATE TABLE Quantity (
    AmountBought int NOT NULL,
    ItemID int NOT NULL,
    OrderID int NOT NULL,
    PRIMARY KEY (ItemID,OrderID),
    FOREIGN KEY (ItemID) REFERENCES VideoGame(ItemID),
    FOREIGN KEY (OrderID) REFERENCES Sales(OrderID)
);

CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);


