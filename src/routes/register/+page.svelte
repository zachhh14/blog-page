<script>
    import { goto } from '$app/navigation'
    export let data
    let { supabase } = data
    $: ({ supabase } = data)
    import { redirect } from '@sveltejs/kit'

    let email
    let password

    const handleSignUp = async () => {
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            })
            if (error) throw error

            goto('/login')
        } catch (error) {
            console.error(error)
        }
    }
</script>

<form
    onsubmit={handleSignUp}
    class="flex flex-col justify-center p-5 space-y-2 text-white bg-black border rounded"
>
    <div class="flex space-x-2">
        <div class="flex flex-col space-y-2">
            <label for="email" class="h-1/2">Email</label>
            <label for="password">Password</label>
        </div>
        <div class="flex flex-col space-y-2 text-black">
            <input
                name="email"
                bind:value={email}
                class="p-2 border rounded h-1/2"
            />
            <input
                type="password"
                name="password"
                bind:value={password}
                class="p-2 border rounded"
            />
        </div>
    </div>
    <button class="p-2 text-black bg-white rounded">Register</button>
</form>
