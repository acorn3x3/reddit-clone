const SUPABASE_URL = 'https://xfelbrggqnrkizxiryof.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmZWxicmdncW5ya2l6eGlyeW9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjUwOTQxMjksImV4cCI6MTk4MDY3MDEyOX0.8vBoAkQ5q3e-83vo9Z0XKJN8oPFOHqlYB8YObVgKkBs';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */
