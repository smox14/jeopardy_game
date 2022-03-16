const Quiz = {
  findQuestion: () => {
    const api = "https://jservice.io/api/random"
    return api.then((data) => console.log(data))
  }
}