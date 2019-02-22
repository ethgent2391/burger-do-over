-- creates database
CREATE DATABASE burger_db;
-- tells sql to select database
USE burger_db;
-- creates table
    CREATE TABLE burgers{
        -- creates columns in burger
        -- INT NOT NULL ensure that the column is a number and not empty
        -- AUTO increment populates the cell with a INT that is always 1 more than the last; like for loop wiht i++;
        ID INT NOT NULL AUTO_INCREMENT,
        -- varchar tells the sql server to expect a variable array of characters not larger than the argument
        burger_name VARCHAR(40) NOT NULL,
        -- BOOLEAN/BIT is a True/False statement Defeault set it to a specified value automatically.
        devoured BOOLEAN NOT NULL DEFAULT 0,
    };
    --sql uses this file to construct the database and any tables that may reside in it. more specifically, it instructs JAWSDB to create the DB in heroku