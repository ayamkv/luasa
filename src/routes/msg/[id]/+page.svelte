<script>
     // import { crossfade } from '../../crossfade';
     // const [send, receive] = crossfade
     import Date from '../../Date.svelte'
     export let data;
     const { msg } = data;
     import 'iconify-icon';
     import { onMount } from 'svelte'
     import { fly, fade } from 'svelte/transition';
     let visible = false;
     console.log(data);
     onMount(() => {
      visible = true;
      
    });
</script>

{#if visible}
<div class="wrapper" in:fade out:fade>


<div class="flex h-[85vh] justify-center items-center shadow-md">
<div id="{msg.id}" class="card w-72 h-1/4 bg-base-300 shadow-xl hover:shadow-sm hover:scale-105 transition-all border-solid border-2 border-neutral border-[{msg.color}]" style="border: 2px solid {msg.color}" >
     <div class="card-body break-words whitespace-pre-wrap px-6 pt-5 pb-5">

     
     <h3 class="card-title rounded-md text-md font-semibold italic"> to : <span class="text-md text-center">{msg.to}</span></h3>
     <p class="text-md">{msg.messages}</p>
     <div class="card-actions justify-end mt-2">
      
         <Date name={msg.date_created} />

     
       </div>
       <div class="card-actions justify-right">
          <p class="text-[0.7rem] text-right text-slate-600 hover:text-slate-700">luasa.vercel.app</p>
      
         </div>
 </div>
 </div>
 </div>
</div>


 <footer class="footer footer-center p-6 bg-base-100 text-base-content rounded gap-4">
    
     <div class="grid grid-flow-col gap-4 mt-0 py-0 text-2xl">
     <a href="https://github.com/ayamkv" class="link leading">
       <iconify-icon icon="lucide:github"></iconify-icon></a>
     <a href="https://instagram.com/raaharja" class="link link-hover gap-2">
       <iconify-icon icon="lucide:instagram"></iconify-icon>
     </a>
   </div>
   <div class="grid grid-flow-col mb-0 text-sm">
     <p>Copyright © Luasa 2023 - All right reserved by Raharja.</p>
     </div>
 </footer>

 {/if}