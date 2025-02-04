import { supabase } from '$lib/supabaseClient'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const { data, error } = await supabase
        .from('blogs')
        .select()
        .eq('id', params.id)
        .maybeSingle()

    if (error) {
        error(404, 'Not found')
    }

    return data
}
