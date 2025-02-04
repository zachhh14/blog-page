import { redirect } from '@sveltejs/kit'

export const GET = async (event) => {
    const {
        url,
        locals: { supabaseServerClient },
    } = event
    const token_hash = url.searchParams.get('token_hash')
    const type = url.searchParams.get('type')
    const next = url.searchParams.get('next') ?? '/'

    if (token_hash && type) {
        const { error } = await supabaseServerClient.auth.verifyOtp({
            token_hash,
            type,
        })
        if (!error) {
            redirect(303, `/${next.slice(1)}`)
        }
    }

    // return the user to an error page with some instructions
    redirect(303, '/auth/auth-code-error')
}
