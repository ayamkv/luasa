<script>
    export let name;

    const date = new Date(name);
    const options = { 
        year: 'numeric', 
        month: 'numeric', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric'
    };

    const formatDate = date.toLocaleString('en-PH', options);
</script>
<p class="text-xs text-right text-slate-500 hover:text-slate-600">
    {formatDate}
</p>