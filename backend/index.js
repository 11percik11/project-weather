const express = require('express')
const app = express()
const cors = require('cors');
  
app.use(cors()); // Разрешаем запросы с любых источников
app.use(express.json());

app.listen(5000, console.log("Server run on port 5000."))

app.use('/', async (req, res) => {
    try {
        // const count = await prisma.user.count();  // Замените 'user' на имя вашей модели
        res.send("hello sendsadfsdf");
      } catch (error) {
        res.status(500).json({ error: 'Ошибка соединения с базой данных' });
      }
})