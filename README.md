TravelTrucks Camper Rental Web Application
Project Overview
The TravelTrucks project is a frontend web application designed for a company that rents out campers. The goal is to provide a user-friendly interface where visitors can browse available campers, view details, read reviews, and make bookings. The application includes several pages: the home page, a catalog of campers, and a detailed camper page with reviews and a booking form.

Deployed Application
The project is deployed at [Deployed URL].

Backend API
This project uses a pre-built backend API for camper listings and details, which is available at:
https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers

Main Endpoints:
GET /campers: Retrieves all camper listings (filtering must be done server-side, not client-side).
GET /campers/
: Retrieves details of a specific camper by its ID.
Technologies Used
React with Vite for fast development.
Redux for state management.
React Router for routing and navigation.
Axios for making HTTP requests to the API.
CSS Modules (or another CSS library of your choice) for styling.
Features
Pages:
Home Page:
Contains a banner with a call to action for the user to explore the catalog.
Catalog Page:
Displays all available campers with filtering options.
Filters allow users to narrow their search by location, type of camper, and amenities (e.g., AC, kitchen).
Users can mark campers as "favorites."
"Load More" button to fetch more listings with applied filters.
Camper Details Page:
Displays detailed information about a selected camper.
User reviews (5-star rating system).
Booking form to reserve the camper.
Functional Requirements:
Filtering: Filters by location, camper type, and specific amenities.
Favorites: Users can add/remove campers to/from their list of favorites, which persists across page refreshes.
Pagination: "Load More" button for loading additional campers in the catalog.
Review Section: Displays reviews for each camper on the details page, using a 5-star SVG icon system.
Booking Form: Allows users to submit a reservation for a camper.
Responsive Design: Optional but supported.
Backend Data:
Camper data includes transmission, engine size, amenities like AC, kitchen, TV, and more.
Filtering and sorting are done on the backend.
Critical Evaluation Criteria:
UI design and adherence to the provided mockups.
No errors in the console.
Proper pagination and filtering.
Fully functional routing.
Installation and Setup
Prerequisites:
Node.js (v16 or higher)
Vite
Installation Steps:
Clone the repository:
bash
Копировать код
git clone https://github.com/your-username/traveltrucks.git
Install dependencies:
bash
Копировать код
cd traveltrucks
npm install
Run the development server:
bash
Копировать код
npm run dev
Open the app in your browser:
bash
Копировать код
http://localhost:3000
Deployment
The project is deployed using Vercel. To deploy your own version:

Push your project to GitHub.
Connect your repository to Vercel.
Follow the deployment instructions provided by Vercel.
Author
Developed by Maya Kulinich.
Feel free to reach out at: mayakulinich5@gmail.com

Additional Notes
Ensure that the head of the site is properly formatted for SEO and social sharing.
The code follows a clean structure with reusable components and complies with the DRY principle.
All commits have clear and descriptive messages.
A loading spinner is shown during asynchronous data fetches.
