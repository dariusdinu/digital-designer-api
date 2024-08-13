# **Mila Hayes Portfolio Website**

## **Project Overview**

The Mila Hayes Portfolio Website is a digital showcase designed for Mila Hayes, a professional graphic designer. The website provides a platform for displaying a variety of design projects, including logo designs, social media graphics, and branding projects. It serves as a personal portfolio, allowing potential clients to explore Mila Hayes' work and get in touch for consultations or services.

The website includes an admin panel for managing projects, where new projects can be added, and existing ones can be updated or deleted. The design is fully responsive, offering an optimal experience on both desktop and mobile devices.

## **Features**

- **Project Showcase**: Display a wide range of design projects in different categories.
- **Responsive Design**: Fully responsive layout that adjusts seamlessly for mobile and desktop devices.
- **Admin Panel**: Manage portfolio content with options to add, edit, or delete projects.
- **Image Upload**: Upload project images directly to DigitalOcean Spaces.
- **Category Filtering**: Filter projects by categories like Logo Design, Social Media, Branding, etc.
- **Contact Form**: Allow potential clients to get in touch through a contact form.

## **Technologies Used**

### **Frontend:**

- **React**: A JavaScript library for building user interfaces.
- **CSS**: Custom CSS for styling with a focus on responsiveness.
- **React Router**: For handling routing within the application.

### **Backend:**

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **MongoDB**: A NoSQL database for storing project information.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **DigitalOcean Spaces**: For storing and serving project images.
- **Multer**: Middleware for handling file uploads.

## **Installation**

### **Prerequisites:**

- **Node.js**: Ensure you have Node.js installed. You can download it from [here](https://nodejs.org/).
- **MongoDB**: Install MongoDB and ensure it is running on your machine. You can find installation instructions [here](https://docs.mongodb.com/manual/installation/).
- **DigitalOcean Space**: Set up a DigitalOcean Space for storing images. You can create one [here](https://www.digitalocean.com/products/spaces/).

### **Clone the Repositories:**

Navigate to the server directory:

```bash
git clone https://github.com/dariusdinu/digital-designer-api.git
git clone https://github.com/dariusdinu/digital-designer-front.git
```

### **Backend Setup**

Navigate to the server directory:

```bash
cd path/to/server/directory
```

Install dependencies:

```bash
npm install
```

Create a .env file with the following content:

```bash
PORT=3000
MONGO_URI=mongodb://localhost:x/your-cluster
SPACES_ACCESS_KEY=your_digitalocean_access_key
SPACES_SECRET_KEY=your_digitalocean_secret_key
ORIGIN_ENDPOINT=https://your-space-name.digitaloceanspaces.com
BUCKET_NAME=your-space-name
```

Start the development server:

```bash
npm run start:dev
```

### **Backend Setup**

Navigate to the client directory:

```bash
cd path/to/client/directory
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The application should now be running on http://localhost:3000.
