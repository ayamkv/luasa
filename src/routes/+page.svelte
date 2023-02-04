<script>
    import { onMount } from "svelte";
    import {fly, fade } from 'svelte/transition';	

    export let data;
    const { messages } = data;
    console.log(data)

</script>





<div class="hero h-1/2 pt-25 bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md mt-10 mb-1">
        <h1 class="text-6xl font-bold">🙊 Luasa</h1>
        <p class="pt-6">
            say what you need to say. <br> 
            💯 privacy. no bullshit.
        </p>
        
        <div class="flex flex-col justify-center items-center bg-base-200">

            <form method="POST" action="?/sendMsg" class="card card-body" style="max-width: 400px" >
                <label class="label">
                    <span class="label-text font-bold my-0">To :</span>
                  </label>
                <input type="text" class="input input-bordered input-sm w-full max-w-xs" name="to" label="to" placeholder="ex: crush" required>
                <label class="label">
                    <span class="label-text font-bold my-0">Message : </span>
                  </label>
                <textarea class="textarea textarea-bordered shadow-xl" id="message" placeholder="say it.." name="message" cols="5" rows="5" maxlength="150" required></textarea>
                <button type="submit" class="btn btn-primary w-64 rounded-full mx-auto shadow-xl my-2" >
                    Submit
                </button>
            </form>


        
        </div>
      </div>
    </div>
  </div>

<div class="flex flex-col justify-center items-center my-5">
    <h1 class="text-3xl font-bold mt-5 mb-10">🗣️ Suara Rakyat</h1>
    <div class="flex flex-wrap justify-center items-start grid-cols-4 gap-5 mb-10 overflow">
        
{#each messages as msg}
    <div class="card w-60 bg-base-200 shadow-xl">
        <div class="card-body break-words">

        
        <h3 class="card-title"><b>to :</b> {msg.to}</h3>
        <p class="text-xs">{msg.messages}</p>
        <!-- <div class="card-actions justify-end">
            <button class="btn btn-xs btn-outline">🗑️ </button>
          </div> -->
     </div>
    </div>
{/each}
</div>
</div>

<footer class="footer footer-center p-4 bg-base-100 text-base-content">
    <div>
      <p>Copyright © 2023 - All right reserved by Raharja.</p>
      <a href="https://github.com/ayamkv" class="link leading">Source Code</a>
      <a href="https://instagram.com/raaharja" class="link">Instagram</a>
    </div>
  </footer>