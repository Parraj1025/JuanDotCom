const express = require('express');
const path = require('path');

const app = express(); // Create the Express application

// Mount API routes (assuming they are already defined in separate files)
app.use('/api', postRoutes, userRoutes); // Mount in order of definition

// Serve static files (HTML, CSS, etc.) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle the root path (`/`) for the main HTML file
app.get('/', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).send('Internal Server Error'); // Send a more informative error message
  }
});

// Start the server (assuming a port is defined elsewhere or defaulting to 3000)
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

// Export the app object if you need it elsewhere in your project (optional)
module.exports = app;

