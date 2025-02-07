<script>
    export let data
    let { supabase } = data
    $: ({ supabase } = data)

    // let email = 'zactec114@gmail.com' debugging
    // let password = 'password' debugging
    let email 
    let password

    const handleSignUp = async () => {
        try {
            const response = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: `${location.origin}/auth/callback`,
                },
            })
        } catch (error) {
            console.error(error)
        }
    }

    const handleSignIn = async () => {
        try {
            const response = await supabase.auth.signInWithPassword({
                email,
                password,
            })
        } catch (error) {
            console.error(error)
        }
    }

    const handleSignOut = async () => {
        try {
            const response = await supabase.auth.signOut()

            await supabase.auth.getUser().then(({ data, error }) => {
                console.log('Current User:', data.user)
            })
        } catch (error) {
            console.error(error)
        }
    }
</script>

<form on:submit={handleSignUp}>
    <input name="email" bind:value={email} />
    <input type="password" name="password" bind:value={password} />
    <button>Sign up</button>
</form>

<button on:click={handleSignIn}>Sign in</button>
<button on:click={handleSignOut}>Sign out</button>
