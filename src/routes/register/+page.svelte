<script>
    import { enhance } from '$app/forms'
    export let form
</script>

<h2>Sign Up</h2>
<form action="?/register" method="POST" use:enhance>
    <label for="email">email</label>
    <input name="email" type="email" value={form?.email ?? 'zactec114@gmail.com'} required />
    <label for="password">password</label>
    <input name="password" required value="password"/>
    <button type="submit">Sign up</button>
</form>
{#if form?.invalid}<mark>{form?.message}!</mark>{/if}
