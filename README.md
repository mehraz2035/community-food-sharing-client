# Community Food Sharing 

### Site live Link : [puffy-apples.surge.sh](https://puffy-apples.surge.sh/)

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [License](#license)

## Project Overview

Our project is a Community Food Sharing and Surplus Reduction Platform aimed at connecting those with surplus food to those in need. The platform utilizes technologies like React, Firebase, Node.js (Express.js), and MongoDB to create a user-friendly and socially impactful solution that addresses both food waste and hunger.



## Features

1. **Authentication System**
   - User registration with Name, Email, Password, and Photo URL.
   - Email/Password and Google/Github sign-in options.
   - Error messages for relevant scenarios.

2. **Homepage**
   - Catchy banner/slider.
   - Featured Foods section with details.
   - Additional attractive sections.
   - Show All button redirecting to Available Foods page.

3. **Available Foods Page**
   - Search functionality by Food name.
   - Sorting functionality by Food Expire Date.
   - Display all available foods with detailed information.
   - View Details button redirects to Food details page.

4. **Food Details Page**
   - Donor Information and Single Food Section.
   - Request Button to add the food to the database food request collection.

5. **Add Food Page (Private)**
   - Form to add food with details.
   - Save data to the food collection and display on the Available Foods Page.

6. **Manage My Foods Page (Private)**
   - Tabular display of all added foods using React-Table.
   - Edit and Delete buttons for each food with update and delete actions.

7. **Manage Single Food Page (Private)**
   - Update request status from pending to delivered.
   - Display request information with relevant details.

8. **My Food Request Page (Private)**
   - Display all food requests made by the logged-in user.
   - Cancel Request button to remove requests if the status is "available."

9. **404 Page**
   - Custom 404 page with an interesting jpg/gif.
   - Back to Home button redirects to the home page.

10. **Toast Notifications**
    - Toast notifications for CRUD operations.

## Technologies

- React
- Firebase
- Node.js (Express.js)
- MongoDB
- Tailwind CSS
- React-Table
- (Optional) Explore new packages:
  - react-elastic-carousel
  - Lottie-react
  - Framer-motion
  - React Hook Form
  - React Helmet

## License

This project is licensed under the [MIT License](LICENSE).

