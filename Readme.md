TechStore
=========

E-commerce platform built using the MERN stack.

Features
--------

-   **User Authentication:** Secure registration and login with JWT.
-   **Google Sign-In:** Seamless login using Google accounts.
-   **Responsive Design:** Optimized for all devices.

-   **Product Search & Filtering:** Easily find and refine product selections.
-   **Secure Payments:** Integrated with Stripe API for safe transactions.

Installation
------------

Follow these steps to set up the project:

1.  **Clone the Repository**

	```
	git clone https://github.com/NirupanJoe/tech-store
	```

2.  **Install Dependencies**

	```
	npm run setup
	```

3.  **Start the Application**

	```
	npm run dev
	```

Environment Variables
---------------------

Create a `.env` file in the backend directory and add the following configuration:

```
PORT=8000
NODE_ENV=development
DB_URI=
JWT_SECRET=
JWT_EXPIRE=5d
COOKIE_EXPIRE=5
RESET_PASSWORD_EXPIRE=30
SMTP_HOST=sandbox.smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=
SMTP_PASSWORD=
FROM_NAME=TechStore
FROM_EMAIL=noreplay@techstore.com
FRONTEND_URI=http://localhost:5173
STRIPE_API_KEY=
STRIPE_SECRET_KEY=
VITE_GOOGLE_CLIENT_ID=
```

License
-------

This project is licensed under the MIT License.

Credits
-------

Developed by [Nirupan Joe](https://github.com/NirupanJoe)

### Technologies Used

-   [React](https://reactjs.org/)
-   [Node.js](https://nodejs.org/)
-   [MongoDB](https://www.mongodb.com/)
-   [Express.js](https://expressjs.com/)
-   [Stripe](https://stripe.com/)

Inspired by the [Samsung website](https://www.samsung.com/in/).
