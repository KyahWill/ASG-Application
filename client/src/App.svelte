<script>
  import { Router, Route } from 'svelte-routing'
  import Home from './pages/Home.svelte'
  import Details from './pages/Details.svelte'
  import Chat from './pages/Chat.svelte';
</script>

<Router>
  <Route component={Home} />
  <Route path="/product/:id" let:params>
      <Details />
  </Route>
  <Route path="/chat" component={Chat}/>
</Router>