const Router = require('express')
const { check, validationResult } = require("express-validator")
const jwt = require("jsonwebtoken");
const hash = require("../utils/password");
const authMiddleware = require('../middlewaree/auth')
//const roleMiddleware = require('../middlewaree/role')
const User = require("../database/models/User");
const { secret } = require("../config")

const router = new Router()

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, { expiresIn: "24h" })
}

router.post('/registration', [
    check('name', "Имя пользователя не может быть пустым").notEmpty(),
    check("email", "Invalid email").isEmail(),
    check('password', "Пароль должен быть больше 4 и меньше 10 символов").isLength({ min: 4, max: 10 })
], async (req, res) => {

    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).send({ msg: "uncorrect request", errors });
        }

        const { name, email } = req.body;
        const userDB = await User.findOne({ email });

        if (userDB) {
            return res.status(400).send({ msg: `Email '${email}' alredy exist` });
        }
        const password = hash.hashPassword(req.body.password);
        const newUser = await User.create({ name, email, password });
        res.status(201).send({ msg: "Registration successful" });

    } catch (e) {
        console.error(e);
        res.status(500).send({ msg: "Registration server error" });
    }
});

router.post('/users/:id/bmi', async (req, res) => {
    try {
        console.log(req.params, req.body)
        const userId = req.params.id;
        const bmiValue = req.body.bmi;

        // Ищем пользователя в базе данных по ID
        const user = await User.findById(userId);

        // Добавляем значение BMI в массив статистики пользователя
        user.bmiStat.push({bmi: parseFloat(bmiValue), date: new Date()});
        console.log(user)
        // Сохраняем обновленного пользователя в базе данных
        await user.save();

        // Отправляем ответ с обновленным пользователем
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/users/:id/bmi', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        const bmiStat = user.bmiStat.map(stat => ({ bmi: stat.bmi, date: stat.date }));
        res.json(bmiStat);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


router.post('/users/:id/workout', async (req, res) => {
    try {
        console.log(req.params, req.body)
        const userId = req.params.id;
        const workoutValue = req.body;

        // Ищем пользователя в базе данных по ID
        const user = await User.findById(userId);

        // Добавляем значение BMI в массив статистики пользователя
        user.workautDays.push(new Date());
        console.log(user)
        // Сохраняем обновленного пользователя в базе данных
        await user.save();

        // Отправляем ответ с обновленным пользователем
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


router.get('/users/:id/workout', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        const workautDays = user.workautDays.map(stat => (stat.date ));
        res.json(workautDays);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ msg: `Пользователь with email: ${email} не найден` })
        }
        const validPassword = await hash.comparePassword(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ msg: `Введен неверный пароль` })
        }
        const token = generateAccessToken(user._id, user.roles)
        return res.status(200).send({
            token: token,
            user: {
                _id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                bmiStat: user.bmiStat,
                workautDays: user.workautDays,
            },
            msg: "Login successful",
        })
    } catch (e) {
        console.log(e)
        res.status(400).json({ msg: 'Login error' })
    }
}
);



router.get("/auth", authMiddleware, async (req, res) => {
    try {
        const { id } = req.user;
        const user = await User.findOne({ _id: id }).select("_id name email role bmiStat workautDays");

        const token = generateAccessToken(user._id, user.roles);
        res.status(201).send({
            token,
            user,
        })

    } catch (e) {
        console.error(e);
        res.status(403).send({ msg: "Server error" });
    }
})

router.post("/buypremium", authMiddleware, async (req, res) =>{
    try {
        const { id } = req.user;
        const user = await User.updateOne({ _id: id }, {isPremium: true});

        res.status(201).send({
            user,
        })

    } catch (e) {
        console.error(e);
        res.status(500).send({ msg: "Server error" });
    }
})

/*router.get('/users', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (e) {
        console.log(e)
    }
});*/

/*router.delete('/:id',
    async (req, res) => {
        try {
            const id = req.params.id
            const deletedUser = await User.findByIdAndDelete(id);
            if (!deletedUser) throw new Error('User not found');
            res.status(203).send({ msg: 'User deleted✔️', user: deletedUser });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
    });*/

module.exports = router;
