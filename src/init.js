import app from "./server.js"

const PORT = process.env.PORT || 4000;

const handleListening = () => 
    console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);