import express from 'express'
import sqlite3 from 'sqlite3'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const db = new sqlite3.Database('p2pchat.db')
db.serialize(() => {
	db.run(`CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		email TEXT UNIQUE,
		password TEXT,
		nick TEXT UNIQUE,
		peer_id TEXT,
		premium INTEGER DEFAULT 0,
		created_at DATETIME DEFAULT CURRENT_TIMESTAMP
	)`)
	db.run(`CREATE TABLE IF NOT EXISTS connections (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		user_id INTEGER,
		peer_id TEXT,
		created_at DATETIME DEFAULT CURRENT_TIMESTAMP
	)`)
})

function hashPassword(pass: string) {
	return require('crypto').createHash('sha256').update(pass).digest('hex')
}

function generateToken(user: any) {
	return jwt.sign(user, process.env.JWT_SECRET || 'secret-key-change-in-production')
}

function auth(req: any, res: any, next: any) {
	const token = req.headers.authorization?.split(' ')[1]
	if (!token) return res.status(401).json({ error: 'No token' })
	jwt.verify(token, process.env.JWT_SECRET || 'secret-key-change-in-production', (err: any, decoded: any) => {
		if (err) return res.status(403).json({ error: 'Invalid token' })
		req.user = decoded
		next()
	})
}

app.post('/api/register', async (req, res) => {
	const { email, password, nick } = req.body
	const hashed = hashPassword(password)
	db.run('INSERT INTO users (email, password, nick) VALUES (?, ?, ?)', [email, hashed, nick], (err) => {
		if (err) return res.status(400).json({ error: err.message })
		res.json({ success: true })
	})
})

app.post('/api/login', (req, res) => {
	const { email, password } = req.body
	db.get('SELECT * FROM users WHERE email = ?', [email], (err, user) => {
		if (!user || user.password !== hashPassword(password)) {
			return res.status(401).json({ error: 'Invalid credentials' })
		}
		res.json({ token: generateToken(user), user: { id: user.id, email: user.email, nick: user.nick, premium: !!user.premium } })
	})
})

app.post('/api/peer-id', auth, (req: any, res) => {
	db.run('UPDATE users SET peer_id = ? WHERE id = ?', [req.body.peerId, req.user.id], () => {
		res.json({ success: true })
	})
})

app.get('/api/directory', (req, res) => {
	db.all('SELECT id, nick, peer_id, premium FROM users WHERE peer_id IS NOT NULL', (err, users) => {
		res.json(users)
	})
})

app.get('/api/me', auth, (req: any, res) => {
	db.get('SELECT id, email, nick, peer_id, premium FROM users WHERE id = ?', [req.user.id], (err, user) => {
		res.json(user)
	})
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Auth server running on port ${PORT}`))