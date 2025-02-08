<script>
    import { goto } from '$app/navigation'

    export let data
    let { supabase } = data
    $: ({ supabase } = data)

    let email
    let password
    let confirmPassword

    const handleSignUp = async (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert('Passwords do not match!')
            return
        }

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            })
            if (error) throw error

            goto('/login')
        } catch (error) {
            alert(error.message)
            console.error(error.message)
        }
    }
</script>

<form
    onsubmit={handleSignUp}
    class="flex flex-col justify-center p-5 space-y-2 text-white bg-black border rounded"
>
    <label for="email">Email</label>
    <input
        type="text"
        class="p-2 text-black border rounded"
        name="email"
        bind:value={email}
        required
    />
    <label for="password">Password</label>
    <input
        type="password"
        class="p-2 text-black border rounded"
        name="password"
        bind:value={password}
        required
    />
    <label for="password">Confirm Password</label>
    <input
        type="password"
        class="p-2 text-black border rounded"
        name="confirm_password"
        bind:value={confirmPassword}
        required
    />
    <div class="flex flex-col">
        <button class="p-2 my-4 text-black bg-white rounded" type="submit">
            Register
        </button>
        <span>
            Already have an account?
            <a href="/login" class="underline"> Login </a>
        </span>
    </div>
</form>
