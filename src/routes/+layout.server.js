export const load = async (event) => {
    // clearing the cookie from a browser if the user logs out or was deleted from the database
    if (event.locals.session == null) {
        event.cookies.delete(event.locals.supabaseServerClient.storageKey, {
            path: '/',
        })
    }

    return {
        session: event.locals.session,
        user: event.locals.user,
    }
}
