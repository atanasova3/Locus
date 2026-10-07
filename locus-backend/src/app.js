require ("dotenv").config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();

app.use(cors());
app.use(express.json());

const supabaseUrl = process.env.SUPABASE_URL?.trim();
const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY?.trim();
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey || supabaseKey);
const supabaseAuth = createClient(supabaseUrl, supabaseKey);

if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase URL or key is not defined in environment variables');
    
}

app.post('/api/register', async (req, res) => {
    const { username, email, password } = req.body;

   if (!username || !email || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const payload = {
            email: email,
            password: password,
            options: {
                data: {
                    username: username,
                },
            },
        };

        const { data, error } = supabaseServiceRoleKey
            ? await supabase.auth.admin.createUser({
                email: payload.email,
                password: payload.password,
                email_confirm: true,
                user_metadata: payload.options.data,
            })
            : await supabase.auth.signUp(payload);

        if (error) {
            let statusCode = 400;

            if (/already (?:been )?registered|already exists/i.test(error.message)) {
                statusCode = 409;
            } else if (/rate limit/i.test(error.message)) {
                statusCode = 429;
            }

            return res.status(statusCode).json({ error: error.message });
        }
        
        console.log('Registered user in Supabase', data.user);

        return res.status(200).json({
            message: 'User registered successfully',
            user: data.user,
        });
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const { data, error } = await supabaseAuth.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return res.status(401).json({ error: error.message });
        }

        return res.status(200).json({
            message: 'User logged in successfully',
            user: data.user,
            session: data.session,
        });
    } catch (error) {
        console.error('Error logging in user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

  



