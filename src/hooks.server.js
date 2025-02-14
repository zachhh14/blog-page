import {
    PUBLIC_SUPABASE_ANON_KEY,
    PUBLIC_SUPABASE_URL,
} from '$env/static/public'
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'
import { error, redirect } from '@sveltejs/kit'
import { sequence } from '@sveltejs/kit/hooks'

async function supabase({ event, resolve }) {
    event.locals.supabase = createSupabaseServerClient({
        supabaseUrl: PUBLIC_SUPABASE_URL,
        supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
        event,
    })

    /**
     * Unlike `supabase.auth.getSession`, which is unsafe on the server because it
     * doesn't validate the JWT, this function validates the JWT by first calling
     * `getUser` and aborts early if the JWT signature is invalid.
     */
    event.locals.safeGetSession = async () => {
        const {
            data: { user },
            error,
        } = await event.locals.supabase.auth.getUser()
        if (error) return { session: null, user: null }

        const {
            data: { session },
        } = await event.locals.supabase.auth.getSession()
        return { session, user }
    }

    return resolve(event, {
        filterSerializedResponseHeaders(name) {
            return name === 'content-range' || name === 'x-supabase-api-version'
        },
    })
}

async function authorization({ event, resolve }) {
    const { session } = await event.locals.safeGetSession()

    if (
        (event.url.pathname === '/login' ||
            event.url.pathname === '/register') &&
        session
    ) {
        throw redirect(303, '/blogs')
    }
    if (
        event.url.pathname.startsWith('/blogs') &&
        event.request.method === 'GET'
    ) {
        if (!session) {
            redirect(303, '/login')
        }
    }

    // protect POST requests to all routes that start with /protected-posts
    if (
        event.url.pathname.startsWith('/blogs') &&
        event.request.method === 'POST'
    ) {
        if (!session) {
            // the user is not signed in
            throw error(303, '/login')
        }
    }

    return resolve(event)
}

export const handle = sequence(supabase, authorization)
