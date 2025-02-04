import { supabase } from '$lib/supabaseClient'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    console.log(params.id)
    const { data, error } = await supabase
        .from('blogs')
        .select()
        .eq('id', params.id)
        .maybeSingle()

    console.log(data)

    if (error) {
        error(404, 'Not found')
    }

    return data
}
