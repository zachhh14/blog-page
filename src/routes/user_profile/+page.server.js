import { redirect } from '@sveltejs/kit'

export const load = async ({ locals }) => {
    // redirect if there is no user's session
    if (!locals.session) {
        redirect(303, '/')
    }

    return {
        session: locals.session,
        user: locals.user,
    }
}
