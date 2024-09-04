// pages/api/auth/[auth0].js
import { handleAuth, handleLogin, handleLogout } from '@auth0/nextjs-auth0';
import memoryCache from 'memory-cache';

export default handleAuth({
    login: handleLogin((req) => {
        return {
            returnTo: req.headers.referer
        };
    }),
    logout: handleLogout((req) => {
        memoryCache.clear();
        return {
            returnTo: "/?success=true"
        }
    })
})
