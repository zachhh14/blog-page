<script>
    /** @type {import('./$types').PageProps} */
    let { data } = $props()
</script>

<h1 class="text-6xl font-bold text-center">{data.title}</h1>
<div class="w-full text-sm font-bold text-center text-gray-700">Author: {data.submitted_by ?? 'Anonymous'}</div>
<p class="mt-5">{data.message}</p>
lorem*25