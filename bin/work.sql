-- Creates Designation table
create table Designation(
Role varchar(120) not null unique,
Salary int not null,
constraint designation_pk primary key(Role));

-- Creates Employee table
create table Employee(
ID int not null,
Name varchar(120) not null,
NID int not null,
DOB date not null,
Contact int not null,
Role varchar(120) not null,
Joining_date date not null,
Resining_date date,
constraint role_fk foreign key (Role) references
Designation(Role),
constraint employee_pk primary key (ID,Name,NID));

-- Creates Administrator table
create table Administrator(
ID int not null,
Password varchar(120),
constraint administrator_pk primary key(ID),
constraint administrator_fk foreign key (ID) references
Employee(ID));

-- Creates Inventory table
create table Inventory(
ISBN int not null unique,
Name varchar(120),
Genra varchar(120),
Buy_date date not null,
Quantity int not null,
constraint inventory_pk primary key(ISBN,Name,Buy_date));

-- Creates onShelf table
create table onShelf (
ISBN int not null,
Shelf_number varchar(120) not null,
Shelf_row int not null,
Shelf_column int not null,
constraint onshelf_fk foreign key (ISBN) references Inventory(ISBN));

-- Creates Members table
create table Members(
ID int not null,
Name varchar(120) not null,
Profession varchar(120),
Contact int not null,
Joining_date date not null,
Expire_date date,
constraint members_pk primary key (ID));

-- Creates member_fee table
create table member_fee(
amount int not null,
initiation_date date,
constraint member_fee_pk primary key (amount));

-- Creates member_payment table
create table member_payment(
ID int not null,
Fee int,
payment_date date not null,
constraint member_payment_pk primary key(ID,payment_date),
constraint member_payment_ID_fk foreign key (ID) references
Members(ID),
constraint member_payment_fk foreign key(Fee) references
member_fee(amount));

-- Creates salary_status table
create table salary_status(
ID int not null,
Role varchar(120) not null,
payment_date date,
constraint salary_status_pk primary key(ID,payment_date),
constraint salary_status_fk foreign key(ID) references Employee(ID)
constraint salary_status_rolef_fk foreign key(Role) references
Designation(Role));

-- Creates Lend table
create table Lend (
ID int not null,
ISBN int not null,
lend_date date not null,
due date not null,
return_date date,
constraint lend_id_fk foreign key(ID) references Members(ID),
constraint lend_ISBN_fk foreign key(ISBN) references Inventory(ISBN));

-- function to authorizes the administrator
delimiter //
create function authorization(ID int, pass varchar(120))
returns int
reads sql data
begin
declare flag int;
select count(*) into flag
from Administrator
where Administrator.ID = ID and Administrator.Password =pass;
return flag;
end//

-- trigger to set the due date 7 or days from the the day the book was borrowed
delimiter //
create trigger due_date_set
before insert on lend
for each row
begin
set new.due = date_add(curdate(),interval 7 day);
end//

-- Procedure to find current employees
delimiter //
create procedure showCurrentEmployee()
begin
select id,name,role,contact from employee where resining_date is null;
end //

--Procedure to find past employees
delimiter //
create procedure showPastEmployee()
begin
select id,name,role,contact,joining_date,resining_date from employee where resining_date is not null;
end //


-- Procedure to set the return date when a book is returned
delimiter //
create procedure onReturn(idd int)
begin
update lend set return_date = curdate() where id=idd;
end//

-- Function to find whether the member id exists or not
delimiter //
create function existMember(idd int)
returns int
reads sql data
begin
declare flag int;
select count(*) into flag from members where id=idd;
return flag;
end//

-- Function to find whether the employee id exists or not
delimiter //
create function existEmployee(idd int)
returns int
reads sql data
begin
declare flag int;
select count(*) into flag from employee where id=idd;
return flag;
end//

-- procedure to find the book on the shelf
delimiter //
create procedure findOnShelf(isbnn int)
begin
declare flag int;
select shelf_number, shelf_row, shelf_column from onShelf where ISBN=isbnn;
end//


-- procedure to find the id of the members who have not paid the membership fees in a given month
-- delimiter //
-- create procedure due_payment_member(search_time date)
-- begin
-- select ID
-- from members
-- where ID not in (
-- select ID from member_payment
-- where month(payment_date)= month(search_time) and
-- year(payment_date) = year(search_time)
-- );
-- end//