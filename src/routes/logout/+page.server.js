import { redirect } from '@sveltejs/kit'

export const actions = {
    logout: async ({ locals }) => {
        await locals.supabaseServerClient.auth.signOut()
        redirect(303, '/')
    },
}

// no one should visit this page
export async function load() {
    redirect(303, '/')
}
