<script>
    import Date from "./Date.svelte";
    import 'iconify-icon';
    import { onMount } from "svelte";
    import {fly, fade } from 'svelte/transition';	

    export let data;
    const { messages } = data;
    console.log(data)
    // function dateFormat(text) {
    //     dateText = String(text)
    //     dateReplace = dateText.replace('T',' ')
    //     date = String(dateReplace.slice(0, -1));

    //     return {
    //         date
    //     }

    // }
</script>

<svelte:head>
    <link rel="icon" href="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Ghost/3D/ghost_3d.png">
    <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
</svelte:head>




<div class="hero h-1/2 pt-25 bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md mt-10 mb-1">
        <h1 class="text-6xl font-bold text-base-content drop-shadow-xl hover:text-primary transition-all">
          <iconify-icon icon="fluent-emoji:ghost"></iconify-icon>
          Luasa</h1>
        <p class="pt-6">
            say what you need to say. <br> 
            💯 privacy. no bullshit.
        </p>
        
        <div class="flex flex-col justify-center items-center bg-base-200">

            <form method="POST" action="?/sendMsg" class="card card-body" style="max-width: 400px" >
                <label class="label">
                    <span class="label-text font-bold my-0">To :</span>
                  </label>
                <input type="text" class="input input-bordered input-sm w-full max-w-xs shadow-md" name="to" label="to" placeholder="ex: crush" required>
                <label class="label">
                    <span class="label-text font-bold my-0">Message : </span>
                  </label>
                <textarea class="textarea textarea-bordered shadow-xl" id="message" placeholder="say it.." name="message" cols="5" rows="5" maxlength="150" required></textarea>
                <div class="cf-turnstile" data-sitekey="0x4AAAAAAACVH5V0v4_SuNes" data-callback="javascriptCallback" theme="dark"></div>

                <button type="submit" class="btn btn-primary w-64 rounded-full mx-auto shadow-xl my-2 gap-2" >
                    Submit
                    
                    <iconify-icon icon="ph:paper-plane-tilt-bold"></iconify-icon>
                    
                </button>
            </form>


        
        </div>
      </div>
    </div>
  </div>

<div class="flex flex-col justify-center items-center my-5 mx-2">
    <h1 class="text-3xl font-bold mt-5 mb-10 text-base-content drop-shadow-sm">🗣️ Suara Rakyat</h1>
    <div class="flex flex-wrap justify-center items-start grid-cols-4 gap-5 mb-10 overflow">
        
{#each messages as msg}
    <div class="card w-60 bg-base-300 shadow-xl hover:shadow-sm transition-all">
        <div class="card-body break-words whitespace-pre-wrap">

        
        <h3 class="card-title"><b>to :</b> <span class="text-sm">{msg.to}</span></h3>
        <p class="text-sm">{msg.messages}</p>
        <div class="card-actions justify-end mt-2">
            
            <!-- <p class="text-xs text-right">{msg.date_created}</p> -->
            <Date name={msg.date_created} />
            <!-- <button class="btn btn-xs btn-outline">🗑️ </button> -->
          </div>
     </div>
    </div>
{/each}
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
    <div class="grid grid-flow-col mb-0">
      <p>Copyright © 2023 - All right reserved by Raharja.</p>
      </div>
  </footer>
