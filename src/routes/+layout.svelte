<script lang="ts">
    import { invalidate } from '$app/navigation'
    import { onMount } from 'svelte'
    import '../app.css'

    export let data

    let { supabase, session } = data
    $: ({ supabase, session } = data)

    onMount(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, _session) => {
            if (_session?.expires_at !== session?.expires_at) {
                invalidate('supabase:auth')
            }
        })

        return () => subscription.unsubscribe()
    })
</script>

<div class="flex flex-col items-center justify-center w-full h-screen p-5">
    <slot />
</div>
