import { AuthApiError } from '@supabase/supabase-js'
import { fail, redirect } from '@sveltejs/kit'

export const actions = {
    update_password: async ({ request, locals }) => {
        const formData = await request.formData()
        const password = formData.get('new_password')

        const { data, error: err } =
            await locals.supabaseServerClient.auth.updateUser({
                password,
            })

        if (err) {
            if (
                err instanceof AuthApiError &&
                err.status >= 400 &&
                err.status < 500
            ) {
                return fail(400, {
                    error: 'invalidCredentials',
                    invalid: true,
                    message: err.message,
                })
            }
            return fail(500, {
                error: 'Server error. Please try again later.',
            })
        }

        redirect(303, '/user_profile')
    },
}

export const load = async ({ locals }) => {
    // if there is no user's session redirect back to the home page
    if (!locals.session) {
        redirect(303, '/')
    }
}
