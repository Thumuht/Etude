import express, { Request } from 'express';
import { Sequelize, DataTypes } from 'sequelize';

const app = express();
const db = new Sequelize('sqlite::memory:');

app.use(express.json());

const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

interface RegisterBody {
    name: string;
    password: string;
}

interface RegisterRequest extends Request {}

app.post('/register', async (req, res) => {
    const body = req.body as RegisterBody;
    res.send;
});
