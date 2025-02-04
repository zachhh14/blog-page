<script>
    import { supabase } from '$lib/supabaseClient'

    let { data } = $props()
    let blogs = $state([])
    let page = $state(1)
    let limit = $state(5)
    let totalPages = $state(1)

    const fetchPosts = async () => {
        const start = (page - 1) * limit
        const end = start + limit - 1
        const { data, error, count } = await supabase
            .from('blogs')
            .select('*', { count: 'exact' })
            .range(start, end)

        if (error) {
            console.error(error)
        } else {
            blogs = data
            totalPages = Math.ceil(count / limit)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const form = event.target

        const formData = new FormData(form)
        const title = formData.get('title')
        const message = formData.get('message')
        const submitted_by = formData.get('submitted_by')

        const { data, error } = await supabase
            .from('blogs')
            .insert([{ title, message, submitted_by }])

        if (error) {
            alert('Error: ' + error.message)
        } else {
            alert('Blog submitted successfully!')
            form.reset()
            fetchPosts()
        }
    }

    const nextPage = () => {
        if (page < totalPages) {
            page++
            fetchPosts()
        }
    }

    const prevPage = () => {
        if (page > 1) {
            page--
            fetchPosts()
        }
    }

    fetchPosts()
</script>

<h1 class="text-lg font-bold text-center">Add Submission</h1>
<form onsubmit={handleSubmit} class="flex flex-col mb-5 space-y-5">
    <input type="hidden" name="submitted_by" value={data.user.email} />
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
    <button class="p-5 text-white bg-black rounded" type="submit">Submit</button
    >
</form>
<table class="w-full text-center border border-collapse">
    <thead>
        <tr class="font-bold text-center">
            <td class="border">Title</td>
            <td class="border">Submitted By:</td>
            <td class="border">Action</td>
        </tr>
    </thead>
    <tbody>
        {#each blogs as blog}
            <tr>
                <td class="p-2 border">{blog.title}</td>
                <td class="p-2 border">{blog.submitted_by ?? 'anonymous'}</td>
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

<div class="flex justify-between mt-4">
    <button
        class="p-2 text-white bg-black rounded disabled:opacity-50"
        onclick={prevPage}
        disabled={page === 1}>Previous</button
    >
    <span>Page {page} of {totalPages}</span>
    <button
        class="p-2 text-white bg-black rounded disabled:opacity-50"
        onclick={nextPage}
        disabled={page === totalPages}>Next</button
    >
</div>
