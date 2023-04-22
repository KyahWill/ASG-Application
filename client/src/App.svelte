<script>
  import { Router, Route } from 'svelte-routing'
  import Chat from './pages/Chat.svelte';
  import Login from './pages/Login.svelte';


  
</script>

<Router>
  <Route path="/" component={Login} />
  <Route path="/chat" component={Chat}/>
</Router>
