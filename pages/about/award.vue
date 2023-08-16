<template>
    <div>
        <div class="xl:px-32 px-8 font-arian-bold xl:pt-60 pt-32 pb-20">
            
        </div>
    </div>
</template>
<script>
    export default {
        name: 'AwardPage',
        middleware({ route, redirect, from }) {
            window.open('https://www.africau.edu/images/default/sample.pdf', '_blank', 'noreferrer');
            return redirect("/")
        }
    }
</script>