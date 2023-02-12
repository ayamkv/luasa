<script>
    import { enhance } from '$app/forms';
    import Date from "./Date.svelte";
    import 'iconify-icon';
    import { onMount } from "svelte";
    import { fly, fade } from 'svelte/transition';
    import ColorPicker from 'svelte-awesome-color-picker';
    
    let hex = "#0e1526";
    let visible = false;
    export let data;
    $: ({ messages } = data);
//    const { messages } = data;
    console.log('test')

    let loading = false
    // use later
  //  const addMessage = () => {
      
 //     loading = true
      
 //     return async ({ update }) => {
//        await update({ reset: true });
 //       loading = false
//        invalidateAll();
//      }
 //   }

    onMount(() => {
      visible = true;
      
    });
  
</script>

<svelte:head>
  <title>Luasa</title>
    <link rel="icon" href="https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Ghost/3D/ghost_3d.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet">
    <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
</svelte:head>

<!-- <button on:click={() => messagesRes.load()}>load user</button> -->
{#if visible}

<div class="hero h-1/2 pt-25 bg-base-200">
    <div in:fly="{{ y:-100, duration: 1200 }}" class="hero-content text-center">
      <div class="max-w-md mt-10 mb-1  ">
        <h1 class="text-5xl font-bold text-base-content drop-shadow-xl hover:text-primary hover:scale-110 transition-all ">
          <iconify-icon icon="fluent-emoji:ghost" class="translate-y-2 hover:scale-125 transition-all" ></iconify-icon>
          Luasa</h1>
        <p class="pt-6 pb-0 mb-0 text-sm">
            sent the unsent. <br> 
            💯 privacy. no bullshit.
        </p>
        
        <div class="flex flex-col justify-center items-center bg-base-200 pt-0">

            <form method="POST" action="?/sendMsg" class="card card-body" style="max-width: 400px" use:enhance>
                <label class="label" for="input">
                    <span class="label-text italic my-0">To :</span>
                  </label>
                <input type="text" class="input input-bordered input-sm w-full max-w-xs shadow-md" name="to" label="to" placeholder="ex: crush" required>
                <label class="label" for="textarea">
                    <span class="label-text italic my-0">Message : </span>
                  </label>
                <textarea class="textarea textarea-bordered shadow-xl" id="message" placeholder="your message..." name="message" cols="5" rows="3" maxlength="150" required></textarea>

                <p>{hex}</p>
                <div class="flex flex-col w-full border-opacity-50">
                  <div class="grid h-16 card bg-base-100 rounded-box place-items-center" style="border: 2px solid {hex}; z-index: 9999;">
                    <ColorPicker bind:hex isAlpha={false}/>
                  </div>

                </div>

                <input type="hidden" value="{hex}" name="color" hidden>
               
                <!-- <label for="my-modal-6" class="btn">Color 🎉</label>

                <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle">
                  <div class="modal-box">
                    <h3 class="font-bold text-lg">Select Color</h3>
                    <ColorPicker bind:hex />
                    <div class="modal-action">
                      <label for="my-modal-6" class="btn">Confirm</label>
                    </div>
                  </div>
                </div> -->
                <div class="cf-turnstile" data-sitekey="0x4AAAAAAACVH5V0v4_SuNes" data-callback="javascriptCallback" theme="dark"></div>
               
               
                <button type="submit" class="btn btn-primary w-64 rounded-full mx-auto shadow-xl my-2 gap-2" >
                    Submit
                    {#if loading}
                    <iconify-icon icon="line-md:uploading-loop"></iconify-icon>
                    {/if}
                    {#if !loading}
                    <iconify-icon icon="ph:paper-plane-tilt-bold"></iconify-icon>
                    {/if}
                    
                </button>
                
            </form>
        </div>
      </div>
    </div>
  </div>

<div in:fly="{{ y: 200, duration: 600}}" class="flex flex-col justify-center items-center my-5 mx-2 ">
    <h1 class="text-xl font-bold mt-3 mb-10 text-base-content drop-shadow-sm -z-50"><iconify-icon icon="fluent-emoji:envelope-with-arrow"></iconify-icon> Suara Rakyat</h1>
    <div class="flex flex-wrap justify-center items-start grid-cols-4 gap-5 mb-10 overflow">
<!-- {#if $messages} -->
  {#each messages as msg, i(msg.id)}
      <div in:fly="{{ y: 200, duration: 2000, delay: 80 * i }}" id="{msg.id}" class="card w-60 bg-base-300 shadow-xl hover:shadow-sm hover:scale-105 transition-all border-solid border-2 border-neutral border-[{msg.color}]" style="border: 2px solid {msg.color}">
          <div class="card-body break-words whitespace-pre-wrap px-6 pt-5 pb-5">

          
          <h3 class="card-title rounded-md text-sm font-semibold italic"> to : <span class="text-sm text-center">{msg.to}</span></h3>
          <p class="text-sm">{msg.messages}</p>
          <div class="card-actions justify-end mt-2">
            <a href="/#" on:click={() => alert('share feature, coming soon')} class="btn btn-xs"><iconify-icon icon="material-symbols:ios-share-rounded"></iconify-icon> </a>
              <Date name={msg.date_created} />
        
            </div>
      </div>
      </div>
  {/each}
<!-- {/if} -->
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
  {/if}
