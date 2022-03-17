function renderAccountInfo() {
    document.querySelector('#page').innerHTML = `
      <section class="account_info">
          <label>Username:</label>
          <span>${state.userId}</span>
          <label>Username:</label>
          <span>${state.userName}</span>
      </section>
      `
}