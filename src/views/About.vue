<template>
  <div class="about">
    <h1>This is an about page</h1>

    <p>The purpose of this app is to demonstrate a few things:</p>

    <ul>
      <li>Getting data from an external API (I am using the NPS API)</li>

      <li>SPA architecture (this is a Single Page Application)</li>

      <li>Flux-Architeture State Management (Vuex)</li>

      <li>Route - Level code splitting (Webpack is generating separate bundles for each view)</li>

      <li>LocalStorage to persist data.<br/>
        Sunil, I know you asked me how I would cache a response, and I believe I did not get my point across very well.
        I believe you were asking about caching on the server (thus your question about the headers) and I was talking
        about storing data on the client side.
        For example: In this application I am doing the following:

        <ul>
          <li>User selects a State</li>

          <li>App asks parks api for parks in that state</li>

          <li>I then save this response to localStorage</li>

          <li>The user decides to save a park for later</li>

          <li>I save this in localStorage</li>

          <li>The user decides to go back and search for the same state again</li>

          <li>This time, the app uses the data stored in localStorage and does not have to go to the server</li>

          <li>The user reloads the page after saving items for later</li>

          <li>The items are still there! Because the app saved and is loading the ones in localStorage.</li>
        </ul>
      </li>

      <li>Responsive design (it adjusts to different screen sizes)</li>
    </ul>
  </div>
</template>
<style>
.about { text-align: left; max-width: 80ch; margin: 0 auto;}
.about h1 { text-align: center; }
</style>
