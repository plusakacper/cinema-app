# Cinema application

Cinema seats booking application

Created using:
- Java 17
- Spring Boot
- React.js

## Project setup
#### Backend

To run the backend side of this project, you will need to create a MySQL database and enter its url, username and password in the 'application.properties' file:

`spring.datasource.url`

`spring.datasource.username`

`spring.datasource.password`

#### Frontend

To run the front-end part of this project:
- open the terminal and go to `src/webapp` directory
- type the command `npm start`
- the application is running on port `:3000`

http://localhost:3000

## Features

- Possibility of viewing films in the cinema's program
- Possibility of viewing available screenings of a selected film with their dates, times and ticket prices
- Possibility of selecting seats for a given screening  via a visualisation of the cinema hall, including available seats and occupied ones
- Possibility of making seat reservations for a specific screening using e-mail address and telephone number
- Possibility of displaying a booking summary with details of the selected film, screening, seat numbers and total cost of tickets
- Ability to book tickets using details linked to an existing account for logged-in users
- Ability to display bookings linked to an existing user's account
- Ability to cancel bookings linked to an existing user's account

## Using the application

In order to be able to use all the functionalities of the application, it is necessary to fill in `movies` and `showings` tables in the database with test data. This can be done using traditional database commands or the Swagger UI, which makes it easier to manipulate the resources of web applications. To do this, after starting the application go to: 
http://localhost:8080/swagger-ui/index.html 

In the `movie-controller` section fill in the data for the `movies` table: 
- `name`
- `price`
- `imgUrl`

In the `showing-controller` section, fill in the data for the `showings` table:  
- `showingTime` 
- `movieId` 
- `numberOfPleaces`

Once you have completed these steps, you can start using the application.

## Screenshots

**Main screen:**

![App Screenshot](https://i.postimg.cc/25wvq0vm/java1.png)

**Screening selection screen:**

![App Screenshot](https://i.postimg.cc/zv9Rm6mw/java5.png)

**Seat selection screen:**

![App Screenshot](https://i.postimg.cc/B6nF22cF/java7.png)

**Booking confirmation screen:**

![App Screenshot](https://i.postimg.cc/63bvcTYm/java11.png)

**User bookings screen:**

![App Screenshot](https://i.postimg.cc/T1yW4GsY/java12.png)

## Author

- [@plusakacper](https://github.com/plusakacper)
