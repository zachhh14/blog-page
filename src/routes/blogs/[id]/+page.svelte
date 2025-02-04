<script>
	/** @type {import('./$types').PageProps} */
	let { data } = $props();
	console.log(data);
</script>

<h1>{data.title}</h1>
<div>{@html data.message}</div>