import { fail, redirect } from '@sveltejs/kit'
import { AuthApiError } from '@supabase/supabase-js'

export const actions = {
    reset_password: async ({ request, locals }) => {
        const formData = await request.formData()
        const email = formData.get('email')

        const { data, error: err } =
            await locals.supabaseServerClient.auth.resetPasswordForEmail(
                email,
                { redirectTo: '/update_password' }
            )

        if (err) {
            if (err instanceof AuthApiError && err.status === 400) {
                return fail(400, {
                    error: 'invalidCredentials',
                    email: email,
                    invalid: true,
                    message: err.message,
                })
            }
            return fail(500, {
                error: 'Server error. Please try again later.',
            })
        }

        redirect(303, '/check_email')
    },
}

export const load = async ({ locals }) => {
    // if the user is already logged in redirect to the home page
    if (locals.session) {
        redirect(303, '/')
    }
}
