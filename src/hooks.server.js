import {
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY,
} from '$env/static/public'
import { createServerClient } from '@supabase/ssr'

export const handle = async ({ event, resolve }) => {
    event.locals.supabaseServerClient = createServerClient(
        PUBLIC_SUPABASE_URL,
        PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                getAll() {
                    return event.cookies.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) =>
                        event.cookies.set(name, value, {
                            ...options,
                            path: '/',
                        })
                    )
                },
            },
        }
    )
    // if you want to silence the warnings https://github.com/supabase/auth-js/issues/873
    if ('suppressGetSessionWarning' in event.locals.supabaseServerClient.auth) {
        // @ts-expect-error - suppressGetSessionWarning is not part of the official API
        event.locals.supabaseServerClient.auth.suppressGetSessionWarning = true
    } else {
        console.warn(
            'SupabaseAuthClient#suppressGetSessionWarning was removed. See https://github.com/supabase/auth-js/issues/888.'
        )
    }

    const getSessionAndUser = async () => {
        const {
            data: { session },
        } = await event.locals.supabaseServerClient.auth.getSession()
        if (!session) {
            return {
                session: null,
                user: null,
            }
        }

        const {
            data: { user },
            error,
        } = await event.locals.supabaseServerClient.auth.getUser()
        if (error) {
            // JWT validation has failed
            return {
                session: null,
                user: null,
            }
        }

        delete session.user
        const sessionWithUserFromUser = { ...session, user: { ...user } }

        return { session: sessionWithUserFromUser, user }
    }

    const { session, user } = await getSessionAndUser()

    event.locals.session = session
    event.locals.user = user

    return resolve(event, {
        filterSerializedResponseHeaders(name) {
            return name === 'content-range' || name === 'x-supabase-api-version'
        },
    })
}
