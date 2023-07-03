CREATE DATABASE exam7;

CREATE TABLE admin(
    admin_id SERIAL PRIMARY KEY,
    username VARCHAR(53) NOT NULL,
    password VARCHAR(35) NOT NULL
);

INSERT INTO admin(username, password) VALUES('Soliha', 'olma');

CREATE TABLE company(
    company_id SERIAL PRIMARY KEY,
    company_name VARCHAR(45) not null,
    company_img VARCHAR(200) not null
);
INSERT INTO company(company_name, company_img ) VALUES('lamborgine', 'rasm.jpeg');

CREATE TABLE car(
    car_id SERIAL PRIMARY KEY,
    car_markasi VARCHAR(35) NOT NULL,
    car_motor  VARCVHAR(35) NOT NULL,
    car_img VARCHAR(45) not null,
    car_photo VARCHAR(45) not null,
    car_albom VARCHAR(45) not null,
    car_desc VARCHAR(45) not null,
    car_year current_timestamp,
    car_cost Int No null,
    company_id NOT null, REFERENCES company(company_id)
);

