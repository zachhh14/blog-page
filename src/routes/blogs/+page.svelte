<script>
    import { goto } from '$app/navigation'
    import { supabase } from '$lib/supabaseClient'

    let blogs = $state([])

    const handleSubmit = async (event) => {
        event.preventDefault()
        const form = event.target

        const formData = new FormData(form)
        const title = formData.get('title')
        const message = formData.get('message')
        const submittedBy = formData.get('submitted_by')

        const { data, error } = await supabase
            .from('blogs')
            .insert([{ title, message }])

        if (error) {
            alert('Error: ' + error.message)
        } else {
            alert('Blog submitted successfully!')
            form.reset()
            fetchPosts()
        }
    }
    const fetchPosts = async () => {
        const { data, error } = await supabase.from('blogs').select()

        if (error) {
            console.error(error)
        } else {
            blogs = data
        }
    }

    fetchPosts()
</script>

<h1 class="text-lg font-bold text-center">Add Submission</h1>
<form onsubmit={handleSubmit} class="flex flex-col mb-5 space-y-5">
    <label for="">Title</label>
    <input
        type="text"
        name="title"
        class="p-2 border border-black rounded"
        required
    />
    <label for="">Message</label>
    <textarea
        name="message"
        id=""
        class="p-2 border border-black rounded"
        required
    ></textarea>
    <input type="hidden" name="submitted_by" />
    <button class="p-5 text-white bg-black rounded" type="submit">Submit</button
    >
</form>
<table class="w-full text-center border border-collapse">
    <thead>
        <tr class="font-bold text-center">
            <td class="border">Title</td>
            <td class="border">Subitted By:</td>
            <td class="border">Action</td>
        </tr>
    </thead>
    <tbody>
        {#each blogs as blog}
            <tr>
                <td class="p-2 border">{blog.title}</td>
                <td class="p-2 border">zach</td>
                <td class="p-2 border">
                    <a
                        href="/blogs/{blog.id}"
                        class="p-2 text-white bg-black border rounded"
                    >
                        View
                    </a>
                </td>
            </tr>
        {/each}
    </tbody>
</table>
